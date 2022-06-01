import React from 'react'
import { addTodos } from '../Redux/Todo/action'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../Redux/store'

export default function Todo() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
 
    const todo = useSelector(store => store.todos.todos)
    // console.log(todo)
    console.log(store.getState())
    const [text, setText] = useState("");


    const handleAdd = () => {
        const payload = {
            title : text,
            status : false,
          };
         fetch("http://localhost:8080/todo", {
           body : JSON.stringify(payload),
           headers : {
             "content-type" : "application/json"
    
           },
           method : "POST"
         }).then(() =>setText("")).then(getData)
    }

    useEffect(() =>{

        getData()


    },[page])


    const getData = () =>{
        fetch(`http://localhost:8080/todo?_page=${page}&_limit=3`).then((d) =>d.json()).then(data =>{
            dispatch(addTodos(data))
        })
       
    }

  return (
    <div style={{marginTop:"40px"}}>
        <h1>Todo List</h1>
      <input type="text" value = {text}placeholder="Enter Todos.." onChange = {(e) => {
        setText(e.target.value)
      }} />
      <button onClick={handleAdd}>Add Todo</button>
      {
        todo.map((e) => (
            <div key={e.id}>
                {
                    console.log(e.status)
                }
                <h3>{e.id} {e.title}</h3>
            </div>
        ))
      }
      <button onClick={()=>{
        setPage(page - 1)
      }}>Prev</button>
       <button onClick={()=>{
        setPage(page + 1)
      }}>Next</button>
    </div>
  )
}
