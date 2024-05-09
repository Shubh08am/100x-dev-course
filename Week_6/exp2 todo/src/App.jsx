import { useState } from 'react'

// import './App.css'

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {id:1,
      title:"tit1",
      description:"des1"
    },{id:2,
      title:"tit2",
      description:"des2"
    },{id:3,
      title:"tit3",
      description:"des3"
    }
  ])

  const [title, setTitle] = useState("")
  const [description,setDescription] = useState("")
  
  return (
    <>
      <input onChange = {(e)=>{
        setTitle(e.target.value)
      }} placeholder='title'></input> <br></br> <br></br>
      <input onChange = {(e)=>{
        setDescription(e.target.value)
      }} placeholder='description'></input> <br></br> <br></br>
      <button onClick={()=>{
        setTodos([...todos,{id:counter++,title:title,description:description}])
      }}>Add a todo</button>
      
      {todos.map((todo)=>{
        return <Todo key = {todo.id} title = {todo.title} description={todo.description}></Todo>
      })}
    </>
  )
}


function Todo({title,description}){
  return (
    <>
    <h1>{title}</h1>
    <h4>{description}</h4>
    </>
  )
}

export default App