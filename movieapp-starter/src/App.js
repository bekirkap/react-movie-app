import React from "react";
import AppRouter from "./router/AppRouter";
import { Routes, Route } from "react-router-dom";
import Main from "../src/pages/Main"

const App = () => {
  return (
    <div>
      <AppRouter/>
    </div>
  );
};

export default App;
