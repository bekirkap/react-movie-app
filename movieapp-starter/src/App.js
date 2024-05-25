import React from "react";
import AppRouter from "./router/AppRouter";
import "./index.css";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";


const App = () => {
  return (
    <div className=" dark:bg-gray-dark-main min-h-screen">
      <AuthProvider>
      <Navbar/>
      <AppRouter />
      </AuthProvider>
    </div>
    
  );
};

export default App;
