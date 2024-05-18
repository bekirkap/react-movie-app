import React from "react";
import AppRouter from "./router/AppRouter";
import "./index.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" dark:bg-gray-dark-main min-h-screen">
      <Navbar/>
      <AppRouter/>
    </div>
  );
};

export default App;
