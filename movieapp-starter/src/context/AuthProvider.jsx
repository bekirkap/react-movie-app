import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup,sendPasswordResetEmail } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from '../helpers/ToastNotify';

const AuthContext = createContext();

export const useAuthContext = () =>{
  return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(()=>{
    userObserver()
  },[])


  const createUser = async(email, password, displayName)=> { 
  
  try{
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  await  updateProfile(auth.currentUser, {
    displayName: displayName
  })
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


const userObserver = ()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
      const {email,displayName,photoURL} = user
      setCurrentUser({email,displayName,photoURL})


  } else {
    setCurrentUser(false)
  }
});
}

const googleProvider = ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then(() => {
    navigate("/")
    toastSuccessNotify("Logged in Succesfully")
  }).catch((error) => {
    toastErrorNotify(error.message)
  });
}
const forgotPassword = (email)=>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
 toastWarnNotify("Please check your mail")
  })
  .catch((error) => {
  toastErrorNotify(error.message)
  })

}


  const values = {currentUser, 
    createUser,
    signIn, 
    logOut,
    googleProvider,
    forgotPassword
  };
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;