// hook for defining state variable 
import { useState } from 'react';

import './App.css'

// state , component

/* //METHOD - 1
function App(){
    //defining initial states 
  const [count,setCount] = useState(0) ; //initial value of state is 0
 //doing array de-structuring here 
  //use state return array which contains 2 value stored in count and setCount


  // when this is called it set the states and reacts re-render -> automatically updating DOM 
 function onClickHandler(){
   setCount (count + 1) ;  //for updating call setCount function with count+1 
 }

 //returning dynamic html i.e button 
return (
  <div>
    <button onClick = {onClickHandler}> Counter {count}</button>
  </div>
) 
}
*/


//METHOD - 2
function App(){
  const [count,setCount] = useState(0) ; 

  //here we are rendering custom Button components 
return (
  <div>
          {/* Corrected: Use PascalCase for custom component */}
    <CustomButton count={count} setCount={setCount}></CustomButton>
  </div>
) 
}

 //defining custom Button component -> takes state variable as parameter -> here 2 parameter as input 
  function CustomButton(props){
    function onClickHandler(){
      props.setCount(props.count+1);
    }
    //dynamic variable of js wrapped inside {} when writing inside react function 
  return <button onClick={onClickHandler}>Counter {props.count}</button>
}


export default App

// basic todos app 
/* 
import { useState } from 'react'

//import './App.css'


// here we need to create a todo app
// state = {
// [{title,description, completed:true/false}]
//}
function App() {
  
  const [todos,setTodos] = useState([{
    title: "go to gym",
    description : "go to gym 8 to 9:30",
    completed: false
  },{
    title : "study dsa",
    description: "study trees and graph",
    completed: true
  }]);

  //updating todos list using seTodos function 
  function addTodo(){
    setTodos([...todos,{
      title:"random todo",
      description: "random todo description",
      completed:false
    }])
  }
  return (
    
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {
        todos.map((single_todo)=>{
          return <TodoOnScreen title={single_todo.title} description={single_todo.description}></TodoOnScreen>
        })
      }
      
    </div>
  )
}

function TodoOnScreen(props){
  return <div>
    <h1>{props.title}</h1>
    <h4>{props.description}</h4>
  </div>
}

export default App
*/