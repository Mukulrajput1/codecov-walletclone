import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  email: { type: String, required: [true, "please provide email"] },
  amount: {type: Number, required: true},
  type : {type: String, required: true},
  to : {type: String},
  description: String,
  date: {type:Date,require: true }
},
{timestamps:true});

const Expense = mongoose.models.expenses || mongoose.model("expenses", expenseSchema);

export default Expense;
