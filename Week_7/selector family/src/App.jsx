import { useState } from 'react'
import { RecoilRoot,useRecoilValue,useRecoilState,useSetRecoilState, useRecoilValueLoadable } from 'recoil'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { todosFamily } from './atoms'
function App() {
 

  return (
    <>
    <RecoilRoot>
      <Todo id={1}></Todo>
      <Todo id={3}></Todo>
    </RecoilRoot>
    </>
  )
}

//content and state in useRecoilValueLoadable
function Todo({id}){
  const curr_todo = useRecoilValueLoadable(todosFamily(id));
  if(curr_todo.state=="loading"){
    return <div>
      loading..
    </div>
  }
  else if(curr_todo.state=="hasValue"){
    return <div>
    title: {curr_todo.contents.title}
    description : {curr_todo.contents.description}
    </div>
  }
  else if(curr_todo.state=="hasError"){
    return <div>
      error while loading from backend
    </div>
  }
  
}

export default App