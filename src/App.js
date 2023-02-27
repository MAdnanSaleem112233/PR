import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patient from './components/Patient';
import Login from './components/Login';
import Register from './components/Register';
import BP from "./components/BP";
import MPatientBP from "./components/MPatientBP";
import PatientReccord from "./components/PatientRecoed";
import TB from "./components/TB";
import Admin from "./components/Admin"
import './App.css';


function App() {
  

  return (
    
    <BrowserRouter>

    <Routes>
    <Route path="patientRecord" element={<Patient />}></Route>
    <Route path="login" element={<Login />}></Route>
    <Route path="register" element={<Register />}></Route>
    <Route path="bloodPressure" element={<BP />}></Route>
    <Route path="measureBP" element={<MPatientBP />}></Route>
    <Route path="patientRc" element={<PatientReccord />}></Route>
    <Route path="tb" element={<TB />}></Route>
    <Route path="admin" element={<Admin />}></Route>
    </Routes>
  
    </BrowserRouter>
   
  );
}

export default App;
