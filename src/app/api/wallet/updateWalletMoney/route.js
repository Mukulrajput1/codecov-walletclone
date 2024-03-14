import { NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect()

export async function POST(request) {
    try {
    const reqBody = await request.json()
    const {email,amount} = reqBody

    const response = await User.updateOne({email:email},{$set:{walletAmount : amount, firstUpdate: true}})
    return NextResponse.json({
        response,
        message: "wallet updated successfully",
        success: true
    })

  } catch (error) {
    return NextResponse.json(
      {
        error: "Cannot update wallet",
      },
      { status: 500 }
    );
  }
}
