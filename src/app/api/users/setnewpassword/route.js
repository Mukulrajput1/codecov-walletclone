import { NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import connect from "@/dbConfig/dbConfig";


connect()


export async function POST(request){
    try {
        const reqBody = await request.json()
        const {token,newPassword} = reqBody
        console.log(token)
        const user = await User.findOne({forgotPasswordToken: token,forgotPasswordTokenExpiry: {$gt: Date.now()}})
        if(!user){
            return NextResponse.json({error: "Invalid Token"}, {status: 400})
        }
        console.log(user)
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(newPassword,salt)
        user.forgotPasswordToken = undefined
        user.forgotPasswordTokenExpiry = undefined
        user.password = hashedPassword
        await user.save()
        return NextResponse.json({message: "Password reset successfully", success: true})

    } catch (error) {
        return NextResponse.json({
            error: "Token Cannot Verify"
        },{status: 500})
    }
    
}