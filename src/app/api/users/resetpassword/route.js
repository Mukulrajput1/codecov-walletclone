
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";


connect()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {email} = reqBody
        console.log(email)
        const user = await User.findOne({email})
        if(!user || !user.isVerified){
            return NextResponse.json({
                error: "User not Found"
            },{status: 400})
        }
        console.log(user)
        const res = await sendEmail({email, emailType: 'FORGOT', userId: user._id})
        return NextResponse.json({message: res, success:true})

    } catch (error) {
        return NextResponse.json({
            error: "Something went wrong"
        },{status: 500})
    }
}