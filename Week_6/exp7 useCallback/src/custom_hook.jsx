import { memo ,useCallback,useEffect,useState } from 'react'

//define state inside this custom hook 
function useTodos(){
    const[todos,setTodos] = useState(0); 

    useEffect(()=>{
        fetch("").then((res)=>{
            setTodos(res.formData.todos);
        })
    },[])
}

function App() {
  const todos = useTodos(); 
  

  return (
    <div>
      
    </div>
  )
}


export default App