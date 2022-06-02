import React, { useEffect, useState } from 'react'
import { useDispatch, selector, useSelector } from 'react-redux';
import { addTodo, sortTodo } from '../Redux/action';
import { store } from '../Redux/store';
import { Link } from 'react-router-dom';

export default function Todo() {
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("");

    const dispatch = useDispatch();
    const todo = useSelector(store => store.todos.todos)
    // console.log(todo)
    // console.log(store.getState())

    const handleAdd = () => {
        const payload = {
            Title: text,
            status: false,
        }
        fetch("http://localhost:8080/todo", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payload)
        }).then(() => setText("")).then(getData)
    }

    //posting the value in the json server while adding it in the todo

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        fetch("http://localhost:8080/todo").then((d) => d.json()).then(data => {
            dispatch(addTodo(data))
        })
    }
    console.log(todo)
    let count = 0;
    for (let i = 0; i < todo.length; i++) {
        
        if (todo[i].status == false) {
            count++;
        }
    }

    return (
        <div>
            {/* <input type="text" placeholder='Filter Todo...' onChange={(e) => {
                setFilter(e.target.value)
            }} /> */}
            <input type="text" placeholder='Enter Todo...' onChange={(e) => {
                setText(e.target.value)
            }} />

            {/* <select onChange={(e) => {
                dispatch(sortTodo(e.target.value))
            }}>
                <option value="id">Sort By Id</option>
                <option value="status">Sort By Status</option>
                <option value="title">Sort By Title</option>
            </select> */}

            <button onClick={handleAdd}>Add Todo</button>
            {
                <div>
                    <h1>Total No Of Not Done Status : {count}</h1>

                    {/* todos.filter(todo => todo.title.includes(filter)).map(e =>(
                 <div key={e.title}>
                 <h1>{e.id}{e.title} - {e.status ? "Done" : "Not Done"}</h1> */}
                    {
                        todo.map((e) => (


                            <Link key={e.id} to={`/todo/${e.id}`}>
                                <div >
                                    <h3>{e.id}- {e.Title} --> {e.status ? "Done" : "Not Done"} </h3>
                                </div>
                            </Link>


                        ))
                    }


                </div>
            }
        </div>
    )
}
