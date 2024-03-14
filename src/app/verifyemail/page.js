"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(true);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post(`${process.env.DOMAIN}/api/users/verifyemail`, {
        token,
      });
      setVerified(true);
    } catch (error) {
      console.log(error.response.data.error);
      setError(true);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken);
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col text-white">
      <div className="flex justify-center flex-col items-center bg-white text-black overflow-hidden py-6 px-10 rounded-lg">
      <p className="font-bold uppercase ">
        {" "}
        {verified ? "Email Verified Successfully" : "Verifying please wait..."}
      </p>
      {verified && <div className="mt-8">{verified && <Link href="/login" className="hover:bg-black hover:text-white font-bold px-5 py-3 border-black border-[2px] text-sm"> Go To Login </Link>}</div>}
    </div>
    </div>
  );
}
