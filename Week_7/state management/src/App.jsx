import {useContext, useMemo} from 'react'
import {CountContext} from "./context"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {
  return (
    <div>
      
      <RecoilRoot>
        <Count></Count>
        <EvenCountRenderer></EvenCountRenderer>
      </RecoilRoot>
    </div>
  )
}

// this compoenent is no longer re-rendering
function Count(){
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons ></Buttons>
  </div>
}
function CountRenderer(){
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
  </div>
}

function Buttons(){
  const setCount= useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>increase</button>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>decrese</button>
  </div>
  
}

function EvenCountRenderer(){
  // const count = useRecoilValue(countAtom);
  
  // useMemo is used for executing function only when count changes
  /*const isEven = useMemo(()=>{
    return count%2==0;
  },[count])*/

  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "it is even" : null}
  </div>

}

export default App