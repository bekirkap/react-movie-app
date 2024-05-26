import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuthContext } from "../context/AuthProvider";

const Login = () => {

    const[info,setInfo] = useState({firstName: "" , lastName:"" , email:"", password:""})

    const handleChange = (e) =>setInfo({...info, [e.target.name]: e.target.value})
    const {email , password} = info

    const {signIn } = useAuthContext()
    const handleSubmit = (e) =>{

      e.preventDefault();
      signIn(email, password)
      console.log(info);
}

  return (
    <div className="flex justify-center">
      <div className="overflow-hidden flex-1 h-screen justify-center items-center dark:bg-gray-dark-main ">
        <div className={`form-container mt-[5vh] w-[380px] h-[580px] `}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
              Sign in
            </h2>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="email"
                className="peer"
                type="email"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_email">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="password"
                className="peer"
                type="password"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label htmlFor="floating_password">Password</label>
            </div>
            <div className="flex justify-between">
            <span className=" py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]">Forgot Password</span>
            <span className=" py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]">Sign Up</span>
            </div>
            <button className="btn-danger" type="submit">
              Login
            </button>
            <button
              className="flex justify-between text-center items-center btn-danger"
              type="button"
            >
              Continue with Google
              <GoogleIcon color="currentColor" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
