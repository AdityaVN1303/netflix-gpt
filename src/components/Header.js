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
import {toggler} from '../utils/gptSlice'

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const search = useSelector((state) => state?.gpt?.showGptSearch);
  const dispatch = useDispatch()

  const signOutVal = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }

  const toggleVal = ()=>{
    dispatch(toggler());
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
    <div className='header flex justify-between text-white z-30 absolute top-0 px-6 py-1 bg-gradient-to-b from-black w-full'>
        <img src={logo} className=' w-20 h-10 lg:h-auto lg:w-52' alt="logo" />

        <div className="space-x-3">
        { user &&
          <button onClick={toggleVal} className=' bg-blue-700 font-semibold text-white lg:h-14 my-3 lg:text-base text-sm rounded-md px-2'>{search ? "Browse" : "GptSearch"}</button>
        }
        {user && <button className="sign-out bg-red-800 font-semibold lg:h-14 my-3 lg:text-base text-sm rounded-md px-2" onClick={signOutVal}>Sign Out</button>}
        </div>
       
    </div>
  )
}

export default Header