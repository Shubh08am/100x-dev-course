import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React , {Fragment} from "react" 

//create a react app that has a header component 
//that takes a title as a prop and renders it inside a div 
//the top level app components renders 2 headers 

//method-1
/*
function App() {
  return (
    <> 
        <button>update the title </button>
        <Header title= "Shubham"> </Header>
        <Header title= "Aman"> </Header>
    </>
  )
}
*/

/*
//method-2
function App() {
  const [title,setTitle] = useState("my name is shubham") ; 
  
  function updateTitle(){
    setTitle("my name is "+ Math.random()) ; 
  }
  return (
    <Fragment> 
      <button onClick={updateTitle}>update the title </button>
        <Header title= {title}> </Header>
        <Header title= "Aman"> </Header>
    </Fragment>
  )
}
*/

//Method-1 for minimizing re-rendering 
/*
function App() {
  
  return (
   <div>
    <HeaderWithButton/> 
     <Header title= "Shubham"> </Header>
      <Header title= "Aman"> </Header>
   </div>
  )
}
//re-render saving -> push the states down -> remove all state variable from parent 
//as it saves parent from re-rendering than 


//only this re-render -> minimizes the re-rendering
function HeaderWithButton(){
  const [title,setTitle] = useState("my name is shubham") ; 
  function updateTitle(){
    setTitle("my name is "+ Math.random()) ; 
  } 

  return  <div> 
  <button onClick={updateTitle}>update the title </button>
    <Header title= {title}> </Header>
</div>

}


function Header({title}){
  return <div>
      {title}
  </div>

}
*/

//Method-2 for minimizing re-rendering -> using memo

function App() {
  const [title,setTitle] = useState("my name is shubham") ; 
  
  function updateTitle(){
    setTitle("my name is "+ Math.random()) ; 
  }
  return (
    <div> 
      <button onClick={updateTitle}>update the title </button>
        <Header title= {title}> </Header>
        <Header title= "Aman"> </Header>
    </div>
  )
}


const Header = React.memo(function Header({title}){
  return <div>
      {title}
  </div>

})

export default App