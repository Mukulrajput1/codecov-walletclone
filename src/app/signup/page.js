// pages/signup.js
'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoader,setIsLoader] = useState(false)
  const [isSuccess,setIsSuccess] = useState(false)
  
  const router = useRouter()
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoader(true)
    setError('')
    try {
        const data = {
            email: email ,
            phoneNumber: phoneNumber,
            password: password,
        }
        const response = await axios.post('/api/users/signup',data);
        // router.push('/login')
        setIsSuccess(true)
        
    } catch (error) {
      console.error('Error:', error);
      setError(error.response.data.error);
      setIsLoader(false)
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {isSuccess && <div className="text-gray-800 text-center flex px-10 rounded-md space-y-8 bg-white py-5 flex-col items-center text-md font-bold"><p>Verification link has been successfully sent to your registered Email Address(Check Spam Also)<br/> Please Verify to complete SignUp.</p><Link href='/login' className="mt-5 px-5 py-3 border-[2px] border-gray-800 hover:bg-gray-800 hover:text-white ">Go To Login</Link></div>}
      {!isSuccess && <div className=" px-5 rounded-md space-y-8 bg-white pb-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="sr-only">
                Phone number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              disabled = {isLoader?true:false}
              className={` group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
            >
              {isLoader?"Signing Up...":"Sign up"}
            </button>
          </div>
          <div className='text-gray-800 text-sm'><span>Already SignUp! <Link href='/login' className='text-blue-500 hover:text-blue-700 cursor-pointer'> SignIn</Link></span></div>
        </form>
      </div>}
    </div>
  );
}

export default SignupPage;
