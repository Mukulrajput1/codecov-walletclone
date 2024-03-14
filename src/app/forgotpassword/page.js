"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Loader from "../components/navigation/Loader";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loader,setLoader] = useState(false)
  const [isSuccess,setIsSuccess] = useState(false)
  const handleSubmit =async (event) => {
    event.preventDefault();
    setLoader(true)
    setError('')
    try {
        const response =await axios.post('/api/users/resetpassword',{email: email})
        setError(response.data.message)
        console.log(response.data)
        if(response.data.success){
        setIsSuccess(true)}
    } catch (error) {
      console.log(error);
      setError(error.response.data.error)
      setLoader(false)
    }
    finally{
        setEmail('')
        setLoader(false)
    }
  };
  return (
    <div className="flex justify-center items-center w-full min-h-screen text-black flex-col">
     {loader &&  <Loader></Loader>}
      <div className="px-5 py-5 bg-white rounded-lg shadow-md shadow-white">
      {isSuccess?<div className="text-gray-800 flex flex-col items-center text-sm font-bold"><p>Password reset link has been sent to your registered email.</p><Link href='/login' className="mt-5 px-5 py-3 border-[2px] border-gray-800 hover:bg-gray-800 hover:text-white ">Go To Login</Link></div>:<form className="text-sm  space-y-4" onSubmit={handleSubmit}>
        <div className="text-gray-500 w-72 text-center"><p>Enter the email address associated with your account and we will send you a link to reser your Password.</p></div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id="email"
            value={email}
            className="shadow appearance-none focus:border-blue-400 font-fontawesome border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
        </div >
          <span className="text-sm text-red-500">{error}</span>
        <div>
          <button disabled={loader?true:false} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{loader?"Continue...":"Continue"}</button>
        </div>
      <div className=" my-5 text-sm">Do not have an Account? <Link className="text-blue-500 hover:text-blue-700" href='/signup'>SignUp</Link></div>
      </form>}
    </div>
    </div>
  );
}

export default ForgotPassword;
