import React from 'react'
import {signOut} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from 'react-redux';
import { logo } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state);
  const dispatch = useDispatch()

  const signOutVal = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email , displayName} = user;
        dispatch(addUser({uid : uid , email : email , displayName : displayName }));
        navigate('/browse');

      } else {
        dispatch(removeUser());
        navigate('/');

      }

      return ()=>unsubscribe();
    });
  }, [])

  return (
    <div className='header flex justify-between text-white z-30 absolute px-6 py-1 bg-gradient-to-b from-black w-full'>
        <img src={logo} className='w-52' alt="logo" />
       
        {user && <button className="sign-out bg-red-800 h-14 my-3 rounded-md px-2" onClick={signOutVal}>Sign Out</button>}
       
    </div>
  )
}

export default Header