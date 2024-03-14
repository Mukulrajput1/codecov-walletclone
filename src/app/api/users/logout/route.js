import { NextResponse } from "next/server";


export async function GET(){
    try {
        
        const response = new NextResponse({
            message : "Logout Successfull",
            success: true
        })
        console.log("before token reset")
        response.cookies.set("token",'',{httpOnly: true , expires: new Date(0)})
        console.log("after token reset")
        return response
    } catch (error) {
        console.log("error")
        return NextResponse.json({
            error: error.message
        },{status:500})
    }
}