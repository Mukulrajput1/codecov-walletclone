'use client'
import React,{useEffect} from "react";
import AddExpense from "@/app/components/forms/AddExpense";
import Table from "@/app/components/tables/Table";
import { useContexter } from "../contexter";


function Income() {
  const {setIsNavbar,setIsActive} = useContexter()
  useEffect(() => {
    setIsNavbar(false)
  }, [])
  setIsActive(2)

  
  return (

      <div className="w-full h-[calc(100vh-4rem)] flex flex-col py-12 px-6 sm:px-12 md:px-16">
        <div className="text-2xl font-bold uppercase">Manage Income</div>
        <div className="my-10">
          <AddExpense types={["Taken", "Income"]} medium="from" path = {["api/wallet/income/addIncome","api/wallet/income/showIncome"]}>
            {" "}
          </AddExpense>
        </div>
        <div>
          <Table path = "api/wallet/income/showIncome"></Table>
        </div>
        <br></br>
      </div>
    
  );
}

export default Income;