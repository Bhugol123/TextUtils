import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import { useState } from 'react'
import Alert from './components/Alert'

const App = () => {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }

  const toggleMode= ()=>{
    if(mode==='light'){
       setMode('dark')
       document.body.style.backgroundColor = '#042743'
       showAlert('Dark mode has been enable', 'success')
    }else{
      setMode('light')
       document.body.style.backgroundColor = 'white'
       showAlert('Light mode has been enable', 'success')
    }
  };


  return (
    <>
   <Navbar title='TextUtils' aboutText='About Us' homePage='Home' mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
         <TextForm heading='Enter the text to analyze' mode={mode} showAlert={showAlert}/>
   </div>
   <div className='my-5'>
   <About about='About Us'/>
   </div>
  
    </>
  )
}

export default App