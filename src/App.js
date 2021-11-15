import React, {useState} from 'react';
import Nav from './components/Navigation';
import Textbox from './components/Textbox';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
// import Notfound from './components/Notfound';
import {BrowserRouter,Routes,Route} from "react-router-dom";

let Test = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === "light"){
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(0 9 32)';
        document.body.style.transition = 'background 300ms linear';
      }
    else{
        setMode('light');
        document.body.style.backgroundColor = '#f1f1f1';
        document.body.style.transition = 'background 300ms linear';
      }
  }
  return(
    <>
      <BrowserRouter>
        <Nav 
          title="Converter" 
          menu1 ="Home" 
          menu2 ="Portfolio" 
          menu3 ="Services" 
          menu4 ="About" 
          menu5 ="Contact"
          theme = {mode} 
          enableDarkMode = {toggleMode}/>

          <Routes>
            <Route exact path="/" element={<Textbox title = "Please Drop Your Text" btnTitle="Convert In Uppercase" 
            btnTitle2="Convert In Lowercase" btnTitle3="Copy Your Text" theme = {mode}/>}/>
            <Route exact path="/portfolio" element={<Portfolio theme = {mode} title = "Portfolio Page"/>} />
            <Route exact path="/Service" element={<Service theme = {mode} title = "Service Page"/>} />
            <Route exact path="/About" element={<About theme = {mode} title = "About Page"/>} />
            <Route exact path="/Contact" element={<Contact theme = {mode} title = "Contact Page"/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default Test;