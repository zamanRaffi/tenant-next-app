import { connectdb } from "../../../../dbConfiq/dbConfiq"; 
import User from "../../../../models/user.model"; 
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

connectdb();



export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { firstName,lastName,phoneNumber,state,zipCode,idCardNo,drivingLicenseNo,address,email, password} = reqBody;

        // Check if user already exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phoneNumber,
            state,
            zipCode,
            idCardNo,
            drivingLicenseNo,
            address

        });

        await newUser.save();

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            newUser,
        },{status:201});
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
