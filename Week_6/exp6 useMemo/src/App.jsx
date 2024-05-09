import { useEffect, useMemo, useState } from 'react'


// task is to create an app that does two things
// 1. increases a counter by 1
// 2.  Lets user put a value in an input box(n) and you need to 
// to show sum from 1-n


// problem is when we click the button re-render happens and the expensive 
// for loop for calculating the sum also runs again
// although the input value is not changed
// can't we just somehow remember the value of sum somehow


// useMemo is used to remember the value across renders 
//run only when inputvalue changes
 
function App() {
   const [counter, setCounter] = useState(0); 
   const [inputValue, setInputValue] = useState(1); 
 //  const [count, setCount] = useState(0);  /for useEffect

   let count = useMemo(()=>{
   let sum=0;
   for(let i=1; i<= inputValue; i++){
    sum=sum+i;
   }
   return sum;
   }, [inputValue])  

   /*
    //useEffect 
    useEffect(()=>{
      let sum=0;
      for(let i=1; i<= inputValue; i++){
       sum=sum+i;
      }
      setCount(sum)
    },[inputValue])
*/

  return (
    <div> 
      <input onChange={(e)=>{
        setInputValue(e.target.value);
      }} placeholder="find sum from 1 to n" />
      <br />
      sum from 1 to {inputValue} is {count}
      <br />
     <button onClick={()=>{
      setCounter(counter+1)
     }}>Counter({counter})</button>
    </div>
  )
}

export default App