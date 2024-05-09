import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes, Route, useNavigate } from 'react-router-dom' 
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

/*
function App() {

  //client side routing -> adding multiple pages 
  return (
    <div>
      <div style={{background:"yellow",color:"blue"}}>Hi this is topbar</div>
    <BrowserRouter>
        <Routes>
          <Route path = "/dashboard" element={<Dashboard/>} />
          <Route path = "/" element={<Landing/>} />

        </Routes>
    </BrowserRouter>
    </div>
  )
}
*/

function App(){ 
 return (
  <div >
    <BrowserRouter>
    <Appbar /> 
          <Routes>
            <Route path = "/dashboard" element={<Dashboard/>} />
            <Route path = "/" element={<Landing/>} />
          </Routes>
      </BrowserRouter>
  </div>
 )
}

function Appbar(){
    // intialise the useNavigate hook always inside the BrowserRouter
  const navigate = useNavigate(); //use this hook inside browserRouter
  return <div> 
    <div> 
    <button onClick={()=>{
      // this does the job but is not client side routing
      // everytime the site reloads and we get html css js back
    // window.location.href="/dashboard";
    navigate("/dashboard") 
    }}>Dashboard Page</button>

    <button onClick={()=>{
    //  window.location.href="/";
    navigate("/") 
    }}>Landing Page</button>
    </div>
    </div>
}
export default App
