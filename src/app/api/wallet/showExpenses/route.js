import { NextResponse } from "next/server";
import Expense from "@/models/expensesModel";
import getDataFromToken from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

export async function GET(request) {
  try {
    const id = await getDataFromToken(request)
    const user= await User.findOne({_id:id})
    const email = user.email
    console.log(id)
    const expenses = await Expense.find({email: email});
    return NextResponse.json({
      message: "Data fetch Successfully",
      data: expenses,
    });
  } catch (error) {
    return NextResponse.json({ error: "Connot fetch" }, { status: 500 });
  }
}
