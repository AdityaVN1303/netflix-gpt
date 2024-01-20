import React, { useRef, useState } from 'react'
import Header from './Header'
import {addUser} from '../utils/userSlice'
import {isValid} from '../utils/validate'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { bgImg } from '../utils/constants';

const Login = () => {
  
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [typoError, setTypoError] = useState(null);

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleSignIn = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  const handleSubmit = ()=>{
    const message = isValid(email.current.value, password.current.value);
    setTypoError(message);

    if(message){
      return;
    }

    if(!isSignInForm){
      // Signup
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // SignUp Success
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value
    }).then(()=>{
      const {uid , email , displayName} = auth.currentUser;
          dispatch(addUser({uid : uid , email : email , displayName : displayName }));
    })
  })
  .catch((error) => {
    // SignUp Reject
    const errorCode = error.code;
    const errorMessage = error.message;
    setTypoError(errorCode + "-" + errorMessage);
  });
    }
    else{
      // Sign In 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Sign In Success
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    // Sign In Reject
    const errorCode = error.code;
    const errorMessage = error.message;
    setTypoError(errorCode + " - " + errorMessage);
  });
    }

  }

  return (
    <>
    <Header/>
    <div className="login_form">
      <img src={bgImg} alt="bg" className='w-full h-screen object-cover' />
    </div>
    <form onSubmit={(e)=>{e.preventDefault()}} action="" className='bg-black bg-opacity-85 text-white absolute top-0 left-0 right-0 mt-32 mx-10 md:mx-auto md:w-1/4 flex flex-col justify-center items-start p-16 px-8'>
      <h1 className='text-4xl mb-10'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
      { !isSignInForm &&
        <input ref={name} type="text" placeholder='full name' className='p-2 rounded-md my-2 w-full bg-slate-800 ' />
      }
      <input ref={email} type="email" placeholder='email address' className='p-2 rounded-md my-2 w-full bg-slate-800 ' />
      <input ref={password} type="password" placeholder='password' className='p-2 rounded-md my-2 w-full bg-slate-800' />
      <p className='error-field'>{typoError}</p>
      <button onClick={handleSubmit} className="sign-in bg-red-700 w-full p-3 rounded-md my-10">{isSignInForm? "Sign In" : "Sign Up"}</button>
      <div>
      <p className='inline mr-2 text-slate-500'>{isSignInForm ?  "New to Netflix ?" : "Exisiting User?"}</p>
      <p className='inline cursor-pointer hover:underline' onClick={handleSignIn}>{isSignInForm? "Sign Up" : "Sign In"}</p>
      </div>
    </form>
    </>
  )
}

export default Login