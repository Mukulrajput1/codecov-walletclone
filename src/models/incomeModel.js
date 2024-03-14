import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
  email: { type: String, required: [true, "please provide email"] },
  amount: {type: Number, required: true},
  type : {type: String, required: true},
  from : {type: String},
  description: String,
  date: {type:Date,require: true }
},
{timestamps:true});

const Income = mongoose.models.incomes || mongoose.model("incomes", IncomeSchema);

export default Income;
