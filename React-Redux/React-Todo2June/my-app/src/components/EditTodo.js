import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function EditTodo() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  const {id} = useParams();
  console.log("id", id)


  useEffect(() =>{
    getData();
  },[])

  async function getData(){
    let data = await fetch(`http://localhost:8080/todo/${id}`).then((d) => d.json());
    setData(data);
    setStatus(data.status)
  }
  console.log(data)
  



  const editTodo = () =>{
  axios.patch(`http://localhost:8080/todo/${id}`,{
    ...data, 'Title' : title
  }).then(function(response){
    setData(response.data)
  }).catch(function(error){
    console.log(error)
  })
  }
  
  const ToggleUndone = () => {
    axios.patch(`http://localhost:8080/todo/${id}`,{
        ...data, status : false,
    }).then(function(response){
        setData(response.data)
    }).catch(function(error){
        console.log(error)
    })
  }
  return (
    <div>
        <h1>{data.id} - {data.Title} -- {status ? "Done" : "Not Done"}</h1>
     <input type="text" placeholder="Enter Title to Edit..." onChange={(e) => {
        setTitle(e.target.value)
     }}/>
     <button onClick={editTodo}>Edit</button>
     <button onClick={ToggleUndone}>Mark as Undone?</button>

    </div>
  )
}
