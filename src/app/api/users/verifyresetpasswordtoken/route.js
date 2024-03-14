import { NextResponse } from "next/server";
import User from "@/models/userModel";
import connect from "@/dbConfig/dbConfig";


connect()


export async function POST(request){
    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token)
        const user = await User.findOne({forgotPasswordToken: token,forgotPasswordTokenExpiry: {$gt: Date.now()}})
        if(!user){
            return NextResponse.json({error: "Invalid Token"}, {status: 400})
        }
        console.log(user)
        user.forgotPasswordToken = undefined
        user.forgotPasswordTokenExpiry = undefined
        await user.save()

        return NextResponse.json({message: "Email Verify Successfully", success: true})

    } catch (error) {
        return NextResponse.json({
            error: "Token Cannot Verify"
        },{status: 500})
    }
    
}