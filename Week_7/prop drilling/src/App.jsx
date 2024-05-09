import { useState,useContext } from 'react'
import {CountContext} from "./context"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value = {{count, setCount}}>
        <Count count={count} setCount={setCount} ></Count>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount} />
  </div>
}
function CountRenderer(){ 
  const count = useContext(CountContext);
  return <div>
      {count}
  </div>
}

function Buttons(){
  const {count,setCount} = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>decrese</button>
  </div>
  
}

export default App