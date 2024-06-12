import { connectdb } from "../../../../dbConfiq/dbConfiq"; 
import User from "../../../../models/user.model"; 
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

connectdb();



export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password} = reqBody;
    //    console.log(reqBody)


        // Check if user already exists
        const user = await User.findOne({email});
            // console.log(user)

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 400 });
        }



        //check if the password is correct 
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error: "Invalid credentials"},{status: 400});

        }

        //create token data

        const tokenData = {
            id:user._id,
            email:user.email
        }

        //create token
        const token = await jwt.sign(tokenData, `${process.env.TOKEN_SECRET}`, { expiresIn: "1d" });
        // console.log(token)
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        
        response.cookies.set("token", token, {
            httpOnly: true,
            
        });
       
        return response;
        

    } catch (error) {
        // console.log("this issus from server",error.message)
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}
