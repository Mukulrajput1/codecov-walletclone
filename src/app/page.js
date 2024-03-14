'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  console.log(`${process.env.DOMAIN}/api/users/logout`)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full items-center justify-center min-h-screen flex flex-col">
        <div className="text-2xl md:text-4xl font-bold my-3">Welcome To SR Wallet</div>
        <div className="text-xl md:text-3xl font-bold my-3 w-full text-center">Clone Your Real Wallet and Manage the Expense And Income</div>
        <Link href='/login' className="text-white py-3 my-3 px-6 border-[2px] font-bold hover:bg-white hover:text-black transition-all">
        Login <FontAwesomeIcon className="text-lg" icon={faRightToBracket}/> 
        </Link>
      </div>
    </main>
  );
}
