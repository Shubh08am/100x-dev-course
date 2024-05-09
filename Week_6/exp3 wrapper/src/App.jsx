import { useState } from 'react'

// import './App.css'


//create a div which has a border 
//and inside the div render the props 

function App() {

  return (
    <>
      <CardWrapper>
        <TextComponent1></TextComponent1>
        
      </CardWrapper>

      <CardWrapper>
        <TextComponent2></TextComponent2>
      </CardWrapper>
    </>
  )
}

function CardWrapper({children}){
  return (
    <div style={{border: "2px solid black",padding:20}}>
      {children}
    </div>
  )
}


function TextComponent1(){
  return (
    <div>
      hi there 
    </div>
  )
}

function TextComponent2(){
  return (
    <div>
      hi there 
    </div>
  )
}
export default App