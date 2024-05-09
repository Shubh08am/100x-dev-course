import { useState } from 'react'
import { RecoilRoot,useRecoilValue,useRecoilState,useSetRecoilState } from 'recoil'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { todosFamily } from './atoms'
function App() {
 

  return (
    <>
    <RecoilRoot>
      <Todo id={1}></Todo>
      <Todo id={2}></Todo>
    </RecoilRoot>
    </>
  )
}

function Todo({id}){
  const curr_todo = useRecoilValue(todosFamily(id));
  return <div>
    title: {curr_todo.id}
    description : {curr_todo.description}
  </div>
}

export default App