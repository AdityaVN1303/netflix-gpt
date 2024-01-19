import React from 'react'
import {signOut} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state);

  const signOutVal = ()=>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className='header flex justify-between text-white z-30 absolute px-6 py-1 bg-gradient-to-b from-black w-full'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='w-52' alt="logo" />
       
        {user && <button className="sign-out bg-red-800 h-14 my-3 rounded-md px-2" onClick={signOutVal}>Sign Out</button>}
       
    </div>
  )
}

export default Header