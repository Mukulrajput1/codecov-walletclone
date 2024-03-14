"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContexter } from "@/app/dashboard/contexter";
import Link from "next/link";
import Loader from "../components/navigation/Loader";

function Dashboard() {
  const {setIsNavbar} = useContexter()
  const { username } = useContexter();
  const { setWalletAmount,setIsActive} = useContexter();
  const [amount, setAmount] = useState();
  const { isFirstUpdated,setIsFirstUpdated } = useContexter();
  const {isLoader,setIsLoader} = useContexter(false);
  setIsActive(0)

  useEffect(() => {
    setIsNavbar(false)
  }, [])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoader(true)
    try {
      const data = {
        email: username,
        amount: amount,
      };
      const response = await axios.post("api/wallet/updateWalletMoney", data);
      setWalletAmount(amount);
      setIsFirstUpdated(true)
      setIsLoader(false)
      console.log(response.data.message);
    } catch (error) {
      setIsLoader(false)
      console.log(error);
    }
  };
  return (
    <>
    <div className="w-full h-[calc(100vh-4rem)] flex justify-center items-center flex-col px-5 sm:px-10">
      <div className="text-3xl md:text-4xl font-bold mb-4">Clone Your Real Wallet</div>
      <div className="text-md sm:text-lg font-bold mb-1">
        {isFirstUpdated
          ? "Handle Your Expenses and Income Here"
          : "Enter Your Initial Wallet Amount"}
      </div>
      {isFirstUpdated ? (
        <div className="flex sm:space-x-10 mt-5 flex-col sm:flex-row">
          <div>
            <Link className="hover:bg-white text-white hover:text-black border-white border-[2px] px-6 py-3 " href="/dashboard/expenses">Manage Expense</Link>
          </div>
          <div className="pt-10 sm:pt-0">
            <Link className="hover:bg-white text-white hover:text-black border-white border-[2px] px-6 py-3 " href="/dashboard/income">Manage Income</Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="h-10 w-80 px-4 text-black"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            ></input>
            <button className="bg-blue-900 text-white font-bold h-10 px-5">
              Proceed
            </button>
          </div>
        </form>
      )}
    </div>
    </>
  );
}

export default Dashboard;
