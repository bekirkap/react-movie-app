import React, { createContext, useContext, useState } from 'react'
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify';

const AuthContext = createContext();

export const useAuthContext = () =>{
  return useContext(AuthContext);
}

const AuthProvider = ({children}) => {

  const navigate = useNavigate()

const [currentUser, setCurrentUser] = useState(false);

const createUser = async(email, password)=> { 
  
  try{
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  navigate("/")
  toastSuccessNotify("Registered succesfully")
  }
  catch(error){
    toastErrorNotify(error.message)
  }
}
const signIn = async(email, password)=> { 
  
  try{
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  navigate("/")
  toastSuccessNotify("Singed in succesfully")
  }
  catch(error){
    toastErrorNotify(error.message)
  }
}
const logOut = () => {
  signOut(auth)
    .then(() => {
      toastSuccessNotify("Logged out successfully");
      navigate("/login")
    })
    .catch((error) => {
      toastErrorNotify(error.message)
    });
};


  const values = {currentUser, createUser,signIn, logOut};
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;