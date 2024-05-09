import { useEffect,useState } from 'react'


// problem statement is to create four buttons on screen 
// 1,2,3,4 
// depending on which button is clicked render the todo on screen of that id


function App() {
    // const [todos,setTodos] = useState([]);

    // useEffect(()=>{
    //     fetch("https://sum-server.100xdevs.com/tods").then(async (res)=>{
    //         const json = await res.json()
    //         setTodos(json.todos);
    //     })
    // },[])


    const [selectedId,setSelectedId] = useState(1);

    
  return (
    <>
        {/* {todos.map((todo)=>{
            return <Todo key = {todo.id} title={todo.title} description = {todo.description} ></Todo>
        })} */}

        <button onClick={function onClickHandler(){
            setSelectedId(1);
        }}>1</button>

        <button onClick={function onClickHandler(e){
            setSelectedId(2);
        }}>2</button>

        <button onClick={function onClickHandler(e){
            setSelectedId(3);
        }}>3</button>

        <button onClick={function onClickHandler(e){
            setSelectedId(4);
        }}>4</button>

        <TodoId id={selectedId}></TodoId>
    </>
  )
}

function Todo({title,description}){
    return (
        <div>
            <h1>{title}</h1>
            <h4>{description}</h4>
        </div>
    )
}


// write a component that takes a todo id as an input and fetches
// the data for that todo from the given endpoint and then renders it
// How would the dependency array change

function TodoId({id}){

    const [todo , setTodo] = useState({});

    useEffect(()=>{
        fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async (res)=>{
            const json = await res.json()
            setTodo(json.todo);
        })
    },[id])//render with this id dependency 

    return (
        <div>
            Id: {id}
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
        </div>
    )


}
export default App