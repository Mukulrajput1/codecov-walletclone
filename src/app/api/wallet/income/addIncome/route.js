import connect from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import axios from "axios";
import Income from "@/models/incomeModel";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    
    const { username, amount, type, to, date, description,walletAmount } = reqBody;
    const newIncome = new Income({
        email: username,
        amount,
        type,
        from : to,
        date,
        description
    })
    const data = {
      email: username,
      amount: (Number(walletAmount) + Number(amount))
    }
    console.log(newIncome)
    const savedData = await newIncome.save()
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
