import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import './App.css'

function App() {
  const [todos, setTodos] = useState([]) ; //state variable 

  //hit the backend and get current todo and call them with setTodo  
  //infinte request sended 
 
  fetch("http://localhost:3068/todos")
  .then(async function(res){
    const json  = await res.json(); 
    setTodos(json.todos) ; 
  })
  
  return (
      <div>
          <CreateTodo> </CreateTodo> 
          <Todos todos={todos}></Todos> 
      </div>
  )
}

export default App
