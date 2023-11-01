import React from "react";
import "./App.css";
import DateDisplay from "./components/DateDisplay";
import DateTime from "./components/DateTime";
import RegistrationForm from "./components/Registration";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Quotes from "./components/Quotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DateDisplay currentDate={currentDate} />} />
          <Route path="/time" element={<DateTime />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
