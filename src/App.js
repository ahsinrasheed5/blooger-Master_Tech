import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import Main from "./components/Main";
import Home from "./components/home/Home";
import About from "./components/About";
import Blooger from "./components/Blooger";
import Page from "./components/projects/Page";
import Contact from "./components/Contact";
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Main/>
    <Routes>
      <Route exact path="/" element={<Home/>} /> 
      <Route  path="/about" element={<About/>} /> 
      <Route  path="/blooger" element={<Blooger/>} /> 
      <Route  path="/page" element={<Page/>} /> 
      <Route  path="/Contact" element={<Contact/>} /> 
    </Routes>
   </>
  );
}

export default App;
