"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'

function Success() {

    const url = "https://wallet-clone-j324.vercel.app/success";
    return (
        <div className='h-screen w-screen bg-white flex justify-center items-center flex-col space-y-10'>
            <div className='font-bold text-lg'>Redirecting to Your App</div>
           <div> Click <Link href={url} className='underline text-[#0000ff]'>here</Link> to go to the app</div>
            <div className="loader"></div>
        </div>
    )
}


export default Success