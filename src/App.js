import React from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";
// import Example from "./login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  );
}

export default App;
