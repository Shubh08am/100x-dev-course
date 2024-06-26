import { useState } from "react";


export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    
    return <div>

        <input  style={{padding: 10,margin:5}} type = "text" placeholder="title" 
        onChange={(e)=>{
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br></br><br></br>

        <input  style={{padding: 10,margin:5}} type = "text" placeholder="description" onChange={(e)=>{
            setDescription(e.target.value);
        }}></input><br></br><br></br>
        <button style={{padding: 10,margin:5}} onClick={()=>{
            fetch("http://localhost:3068/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),headers : {
                    "Content-type" : "application/json"
                }
            }).then(async (res)=>{
                const json = await res.json();
                alert("todo added");
            })
        }}>Add a todo</button>
    </div>
}