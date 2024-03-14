import connect from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import Expense from "@/models/expensesModel";
import axios from "axios";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    
    const { username, amount, type, to, date, description,walletAmount } = reqBody;
    const newExpense = new Expense({
        email: username,
        amount,
        type,
        to,
        date,
        description
    })
    const data = {
      email: username,
      amount: (walletAmount - amount)
    }
    console.log(newExpense)
    const savedData = await newExpense.save()
    console.log(savedData)
    const response =await axios.post(`${process.env.DOMAIN}/api/wallet/updateWalletMoney`,data)
    console.log(response)
    return NextResponse.json({message: "Data inserted successfully", success:true, updatedMoney : data.amount})


  } catch (error) {
    console.log("error");
    return NextResponse.json(
      {
        error: "data not added successfully",
      },
      { status: 500 }
    );
  }
}
