"use client";
import React,{useEffect} from "react";
import AddExpense from "@/app/components/forms/AddExpense";
import Table from "@/app/components/tables/Table";
import { useContexter } from "../contexter";

function Expenses() {
  const { setIsNavbar,setIsActive } = useContexter();
  setIsActive(1)
  useEffect(() => {
    setIsNavbar(false);
  }, []);
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col py-12 px-6 sm:px-12 md:px-16">
      <div className="text-2xl font-bold uppercase">Manage Expenses</div>
      <div className="my-10">
        <AddExpense
          types={["Given", "Expense"]}
          medium="to"
          path={["api/wallet/expenses", "api/wallet/showExpenses"]}
        >
          {" "}
        </AddExpense>
      </div>
      <div>
        <Table path="api/wallet/showExpenses"></Table>
      </div>
    </div>
  );
}

export default Expenses;
