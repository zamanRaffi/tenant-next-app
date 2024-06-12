import { NextResponse } from "next/server";
import { signOut } from 'next-auth/react';

export async function GET (){

 try {

   signOut({ redirect: "/login" });

    const response = NextResponse.json({
        message:"Logout Successfully",
        success:true
    })

    response.cookies.set('token','',
    { httpOnly : true,  expires : new Date(0)});

    return response;
    
 } catch (error) {
    return NextResponse.json({error:error.message},{status:500})
 }


}