import Header from "./components/Header/Header"
import Skills from "./components/Skills/Skills"
import Skills2 from "./components/Skills/Skills2";
import Footer from "./components/Footer/Footer";
import "./app.css";
import "./components/mode.css";
import {useState} from 'react';


function App() {
  const[isDarkMode, setTheme]=useState(false);
  const clickHandler=()=>{
    setTheme(!isDarkMode);
  }
  const theme = isDarkMode ? 'dark' : 'light';
  
  
  return (
    
    <div className={`App ${theme}`}>
     <button className="button-30" onClick={clickHandler}>Change Mode</button>
     
    <Header />
     <Skills />
     <Skills2 />
     <Footer />
     </div>
    
   
  );
}

export default App;
