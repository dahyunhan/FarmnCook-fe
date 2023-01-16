import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
// import "tailwindcss/tailwind.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  );
}

export default App;
