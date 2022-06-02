import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../Redux/action';

export default function TodoDetils() {
    const [data, setData] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const todo = useSelector(store => store.todos.todos)

const ToggleTodo = () => {
axios.patch(`http://localhost:8080/todo/${id}`,{
    ...data, status : true,
}).then(function(response){
    setData(response.data)
}).catch(function(error){
    console.log(error)
})
}

const handleDelete = () =>{
    axios.delete(`http://localhost:8080/todo/${id}`)
    navigate( -1, {replace: true})

}

    useEffect(() => {
     getData();
    },[])
    async function getData(){
       let data = await fetch(`http://localhost:8080/todo/${id}`).then((d) => d.json())
       setData(data);

    }


  return (
    <div>
   <h1>{data.id} - {data.Title}</h1>
   <h3>{data.status ? "Done" : "Not Done"}</h3>
   <Link to ={`/todo/${id}/edit`}>
   <button>Want to Edit?</button>
   </Link>
  
   <button onClick={ToggleTodo}>Marks as Done</button>
   
   <button onClick={handleDelete}>Delete</button> 
    </div>
  )
}
