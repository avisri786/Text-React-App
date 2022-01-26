import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';






function App() {
 const[mode,setMode]=useState('light');
 const[alert,setAlert]=useState(null);
 function togglemode(){
   if(mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor = 'black';
     showalert('success','Dark mode enabled');
   }
   else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showalert('success','Light mode enabled');
   }
 }
function showalert(type,message){
  setAlert({
    type:type,
    message:message
  });
setTimeout(() => {
  setAlert(null);
},1000);
  
}
  return (
  <>
  <Navbar mode={mode} togglemode={togglemode}/>
  <Alert alert={alert} />
  <Textform heading='Enter Text Here' mode={mode} showalert={showalert}/>
        
        
    
  
  </>
  );
}

export default App;
