import { NextResponse } from "next/server";


export async function GET(){
    try {
        
        const response = new NextResponse({
            message : "Logout Successfull",
            success: true
        })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/", // Set the cookie path
            sameSite: "strict" // Set SameSite attribute for security
        });
        return response
    } catch (error) {
        return NextResponse.json({
            error: error.message
        },{status:500})
    }
}