import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import "../App.css"
import { postTodo } from '../Redux/TodoAdd/action';

export default function TodoAdd() {
  // const [multselect, setMultipleselect] = ({
  //   official : false,
  //   personal : false,
  //   others : false
  // })
  // const checkList = (e) => {
  //   const {name, checked} = e.target; 
  // }
const dispatch = useDispatch();
  let checkMultiple = [];
  const[task, setTask] = useState ({
    title : "",
    description :"",
    date : "",
    status : "",
    tags: [],
  })
  const handleChange = (e) => {
    const {name, value} = e.target ;
    setTask({
      ...task, [name] : value
    })
    
  }
  const handleChangetags = (e) =>  {
    if(e.target.value == "official" ){
      checkMultiple.push("official")
    }
    if(e.target.value = "personal"){
      checkMultiple.push("personal")
    }
    if( e.target.value = "others"){
      checkMultiple.push("others")
    }
    setTask({
      ...task, tags : checkMultiple
    })
  }

  const  handledate = (e) =>{
    setTask({
      ...task, date : e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(checkMultiple)

dispatch(postTodo(task))

console.log(task)
alert("Todo Successfully created")
setTask({
  title : "",
  description :"",
  date : null,
  status : "",
  tags: [],
})


  }
  return (
    <div style={{width:"1000px", minHeight:"60vh",margin:"8%",border:"10px solid black"}}>
      <h1 style={{textAlign:"center"}}>Create Element</h1>
      <div className="createUserDiv">
      <div>
      <input style={{width:"300px", height:"40px", margin :"10px"}} value ={task.title} type="text" name="title" onChange={handleChange} placeholder="Enter Title" />
          <br/>
    
          <textarea type="text" placeholder="Enter Description" style={{width:"300px", height:"100px", margin :"10px"}} name="description" onChange={handleChange} id="" value ={task.description} cols="30" rows="10"></textarea>
          <br/>
          <form  name ="date" value={task.date}  >
  <label>Date:</label>
  <input onChange={handledate} type="date" />

</form>
      </div>

          {/* <br /> */}
          <div>
          <form  value={task.status} style={{padding:"20px"}} onChange={handleChange}>
            <h4>Enter Your status</h4>
          <input type="radio" id="html" name="status" value = "Todo"/>
  <label for="Todo">Todo</label><br/>
  <input type="radio" id="css" name="status" value="Inprogress"/>
  <label for="Inprogress">InProgress</label><br/>
  <input type="radio" id="javascript" name="status" value="Done"/>
  <label for="Done">Done</label>
      </form> 
          </div>
          <div>
          <form  value={task.tags} style={{padding:"20px"}} method="get" onChange={handleChangetags}>
          <h4>Tags</h4>
  <input type="checkbox" id="official" name = "tags"value="official"/>
  <label for="official">   Official</label><br/>
  <input type="checkbox" id="personal" name = "tags" value="personal"/>
  <label for="personal">   Personal</label><br/>
  <input type="checkbox" id="others" name = "tags" value="others" />
  <label for="others">   Others</label><br/>
  {/* <input type="checkbox" name="official" /> Official <br />
  <input type="checkbox" name="personal" /> Personal <br />
  <input type="checkbox" name="others" /> Others */}

</form>
          </div>
         
          
  
      </div>
      <button onClick={handleSubmit} style={{textAlign:"center", marginLeft :"35%", width : "300px", height :"60px"}}>Create Task</button>
     
    </div>
  )
}


// <form action="/action_page.php">
//   <input type="checkbox" name="vehicle1" value="Bike">
//   <label for="vehicle1"> I have a bike</label><br>
//   <input type="checkbox" name="vehicle2" value="Car">
//   <label for="vehicle2"> I have a car</label><br>
//   <input type="checkbox" name="vehicle3" value="Boat" checked>
//   <label for="vehicle3"> I have a boat</label><br><br>
//   <input type="submit" value="Submit">
// </form>