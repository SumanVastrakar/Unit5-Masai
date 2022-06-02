import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from "axios";

export default function TodoDetils() {
    const [data, setData] = useState({});
    const {id} = useParams();

const ToggleTodo = () => {
axios.patch(`http://localhost:8080/todo/${id}`,{
    ...data, status : true,
}).then(function(response){
    setData(response.data)
}).catch(function(error){
    console.log(error)
})
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
   
   <button>Delete</button> 
    </div>
  )
}
