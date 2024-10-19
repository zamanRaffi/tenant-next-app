import { connectdb } from "../../../../dbConfiq/dbConfiq";
import User from "../../../../models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectdb();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400 });
        }

        // Check if the password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
        }

        // Create token data
        const tokenData = {
            id: user._id,
            email: user.email
        };

        // Debug logs
        // console.log("Token Data:", tokenData);
        // console.log("TOKEN_SECRET:", `${process.env.TOKEN_SECRET}`);

        // Create token
        let token;
        try {
            token = jwt.sign(tokenData, `${process.env.TOKEN_SECRET}`, { expiresIn: "1d" });
            console.log("Generated Token:", token);
        } catch (error) {
            console.error("JWT Sign Error:", error);
            return NextResponse.json({ error: "Failed to create token" }, { status: 500 });
        }

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });

        // Setting cookie
        response.cookies.set("token", token, {
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;

    } catch (error) {
        console.error("Server error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
