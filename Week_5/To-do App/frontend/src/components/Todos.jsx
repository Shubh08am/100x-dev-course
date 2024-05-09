
//renders all todo and put them on the screen  

/*
todos = [{
    {title:"go swim",
     description: "fast swim",
     completed : false
    },{}...
}] */
export function Todos({todos}){
    return <div>
        
        {todos.map((todo)=>{
                return <div>
                    <h1>{todo.title}</h1>
                    <h4>{todo.description}</h4>
                    <button>{todo.completed==true ? "Completed":"Mark as completed"}</button>
                </div>
            })
        }
        
    </div>
}
