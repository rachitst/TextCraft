
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const [color, setColor] = useState('light');
  const togglemode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="grey"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"

    }
  }
  const toggleColor = (value) => {
    console.log(value);
    setColor(value);
    document.body.style.backgroundColor = color;
  }
  return (
    <>
     <Router>
  <Navbar title = "RACHIT" mode={mode} togglemode= {togglemode} toggleColor={toggleColor} color={setColor}/>
  <div className= 'container'>
  {/* <Routes>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          {/* <Route path="/">
          <TextForm heading = "Enter your Text here"/>
          </Route>
        </Routes>*/ } 
        {/* <TextForm heading = "Enter your Text here"/> */}
    {/* <About/> */}



      <Routes>
        <Route path="/" element={<TextForm heading = "Enter your Text here"/>}/>
          {/* <Route index element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
