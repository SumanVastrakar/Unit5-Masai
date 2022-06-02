import React, { useEffect, useState } from 'react'
import { useDispatch, selector, useSelector } from 'react-redux';
import { addTodo } from '../Redux/action';
import { store } from '../Redux/store';
import { Link } from 'react-router-dom';

export default function Todo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const todo = useSelector(store => store.todos.todos)
    console.log(todo)
    console.log(store.getState())
    
    const handleAdd = () => {
    const payload = {
        Title : text,
        status : false,
    }
    fetch("http://localhost:8080/todo",{
        method : "POST",
        headers : {
            "content-type" : "application/json",
        },
        body : JSON.stringify(payload)
    }).then(() => setText("")).then(getData)
    }

    //posting the value in the json server while adding it in the todo

    useEffect(()=>{
getData();
    },[])

    async function getData(){
     fetch("http://localhost:8080/todo").then((d) => d.json()).then(data=>{
        dispatch(addTodo(data))
     })
    }

  return (
    <div>
   <input type="text" placeholder='Enter Todo...' onChange={(e) =>{
    setText(e.target.value)
   }}/>
   <button onClick={handleAdd}>Add Todo</button>
   {
    todo.map((e) => (
        <Link key={e.id} to={`/todo/${e.id}`}>
     <div >
<h3>{e.id}- {e.Title}</h3>
        </div>
        
        </Link>

        
    ))
   }
    </div>
  )
}
