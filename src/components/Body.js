import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

import { useDispatch } from 'react-redux';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : '/',
            element : <Login/>
        },
        {
            path : '/browse',
            element : <Browse/>
        },

    ])

    const dispatch = useDispatch()
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , email , displayName} = user;
          dispatch(addUser({uid : uid , email : email , displayName : displayName }));

        } else {
          dispatch(removeUser());

        }
      });
    }, [])

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default Body