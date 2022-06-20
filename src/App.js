import React from "react";
import Home from "./components/Home";
import {Routes, Route} from 'react-router-dom'
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar"
import { CssBaseline } from "@mui/material";
import './App.css'

function App() {
  return (
    <div className="App">
      <CssBaseline></CssBaseline>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
