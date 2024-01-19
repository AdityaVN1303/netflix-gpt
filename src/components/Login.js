import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignIn = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <>
    <Header/>
    <div className="login_form">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg" className='w-full h-screen object-cover' />
    </div>
    <form action="" className='bg-black bg-opacity-85 text-white absolute top-0 left-0 right-0 mt-32 mx-10 md:mx-auto md:w-1/3 flex flex-col justify-center items-start p-16 px-8'>
      <h1 className='text-4xl mb-10'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
      { !isSignInForm &&
        <input type="text" placeholder='full name' className='p-2 rounded-md my-2 w-full bg-slate-800 ' />
      }
      <input type="text" placeholder='email address' className='p-2 rounded-md my-2 w-full bg-slate-800 ' />
      <input type="text" placeholder='password' className='p-2 rounded-md my-2 w-full bg-slate-800' />
      <button className="sign-in bg-red-700 w-full p-3 rounded-md my-10">{isSignInForm? "Sign In" : "Sign Up"}</button>
      <div>
      <p className='inline mr-2 text-slate-500'>{isSignInForm ?  "New to Netflix ?" : "Exisiting User?"}</p>
      <p className='inline cursor-pointer hover:underline' onClick={handleSignIn}>{isSignInForm? "Sign Up" : "Sign In"}</p>
      </div>
    </form>
    </>
  )
}

export default Login