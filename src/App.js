import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
import Example from "./login/Login";
// import "tailwindcss/tailwind.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Example />} />
    </Routes>
  );
}

export default App;
