import React, { useState } from "react";
import { useContexter } from "@/app/dashboard/contexter";
import axios from "axios";

function AddExpense({ types, medium,path }) {
  const { username } = useContexter();
  const { walletAmount } = useContexter();
  const { setWalletAmount, setExpense } = useContexter();
  const [error, setError] = useState("");
  console.log(username);
  const [formData, setFormData] = useState({
    amount: "",
    type: "",
    to: "",
    date: "",
    description: "",
  });
  const { amount, type, to, date, description } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const data = formData;
    if (
      formData.amount > walletAmount ||
      formData.amount <= 0 ||
      formData.amount === NaN
    ) {
      setError("Please Enter a valid Amount");
      return false;
    }
    if (formData.type === "" || formData.to === "" || formData.date === "") {
      setError("All field must be filled");
      return false;
    }
    data["username"] = username;
    try {
      data["walletAmount"] = walletAmount
      const response = await axios.post(
        `${process.env.DOMAIN}/${path[0]}`,
        data
      );
      console.log(response);
      const res = await axios.get(
        `${process.env.DOMAIN}/${path[1]}`
      );
      setExpense(res.data.data);
      setWalletAmount(response.data.updatedMoney);
      alert("data inserted successfully");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex items-center">
      <div className="text-white">{error}</div>
      <form
        className="w-[100%] h-full bg-gray-600 flex justify-center l"
        onSubmit={handleSubmit}
      >
        <div className="flex w-[90%] sm:w-[80%] md:w-[60%] lg:w-[100%]  flex-col lg:flex-row flex-wrap lg:items-center lg:space-x-5 justify-center px-6 py-6">
        <div>
          <div className="text-white uppercase font-sans font-bold">Amount</div>
          <div>
            <input
              type="text"
              className="h-8 outline-none pl-2 text-black w-full lg:w-auto"
              name="amount"
              onChange={handleChange}
              value={amount}
            ></input>
          </div>
        </div>
        <div>
          <div className="text-white uppercase font-sans font-bold">Type</div>
          <div>
            <select
              className="h-8 px-2 outline-none text-black w-full lg:w-auto"
              name="type"
              onChange={handleChange}
              value={type}
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value={types[0]}>{types[0]}</option>
              <option value={types[1]}>{types[1]}</option>
            </select>
          </div>
        </div>
        <div>
          <div className="text-white uppercase font-sans font-bold">
            {medium}
          </div>
          <div>
            <input
              type="text"
              className="h-8 outline-none pl-2 text-black w-full lg:w-auto"
              name='to'
              onChange={handleChange}
              value={to}
            ></input>
          </div>
        </div>
        <div>
          <div className="text-white uppercase font-sans font-bold ">date</div>
          <div>
            <input
              type="date"
              className="h-8 outline-none pl-2 text-black w-full lg:w-auto"
              name="date"
              onChange={handleChange}
              value={date}
            ></input>
          </div>
        </div>
        <div>
          <div className="text-white uppercase font-sans font-bold">
            Description (optional)
          </div>
          <div>
            <input
              type="text"
              className="h-8 outline-none pl-2 text-black w-full lg:w-auto"
              name="description"
              onChange={handleChange}
              value={description}
            ></input>
          </div>
        </div>
        <div className="text-white mt-4">
          <button className="uppercase w-full bg-gray-800 lg:px-10 py-2 hover:bg-gray-900 font-bold">Add</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
