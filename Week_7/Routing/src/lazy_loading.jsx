import { Suspense,useState,lazy } from 'react'
import {BrowserRouter, Routes,Route, useNavigate} from 'react-router-dom'
const Dashboard = lazy(()=>import ('./components/Dashboard'))
const Landing = lazy(()=> import ("./components/Landing"))

function App() {

  // intialise the useNavigate hook always inside the BrowserRouter
  // const navigate = useNavigate();

  // linkedin has a constant topbar on all the pages
  // can we implement something like that
  return (
    <div>
      
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

function Appbar(){
  const navigate = useNavigate();
 return (
  
  <div >
    <button onClick={()=>{
      // this does the job but is not client side routing
      // everytime the site reloads and we get html css js back
      // window.location.href="/dashboard";

      navigate("/dashboard")
    }}>Dashboard</button>

    <button onClick={()=>{
      // window.location.href="/";
      navigate("/");
    }}>Landing</button>

  </div>
 )
}
export default App