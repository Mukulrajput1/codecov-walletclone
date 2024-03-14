import { NextResponse } from "next/server";


export async function GET(){
    try {
        
        const response = new NextResponse({
            message : "Logout Successfull",
            success: true
        })
        response.cookies.set("token",'',{httpOnly:true})
        return response
    } catch (error) {
        return NextResponse.json({
            error: error.message
        },{status:500})
    }
}