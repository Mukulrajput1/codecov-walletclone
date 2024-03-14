import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import getDataFromToken from "@/helpers/getDataFromToken";

connect();

export async function GET(request) {
  try {
    const id = await getDataFromToken(request);
    const user = await User.findOne({ _id: id })
    // .select('-password');
    return NextResponse.json({message: "User found", data: user} )
  } catch (error) {
    return NextResponse.json({ error: "something went wrong" }, { status: 500 });
  }
}
