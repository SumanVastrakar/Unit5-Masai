import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

export default function Countdown({value}) {
 
  const [  min, setMin] = useState(value.minval);
  const [sec, setSec] = useState(value.secval);
  const [ stop, setStop] = useState(false);

const onStart = () =>{

      setStop(true);

}
const onStop = () =>{
  setStop(false);
}
const onReset = () =>{
  setMin(value.minval);
  setSec(value.secval)

}
      useEffect(() =>{
        let interval = null;
        if(stop){
          interval = setInterval(() =>{
            if( min == 0 && sec == 0){
              setMin(0)
              setSec(0);
              clearInterval(interval)
              return;

            }
            if(sec == 60 ){
              setMin(min - 1);
              setSec(sec-1);
              clearInterval(interval)
              
            }
          
            if(sec < 60){
              setSec(sec-1)
              if(sec == 0){
                setSec(60);
                // setMin(min - 1);
                clearInterval(interval)
                
              }
             
              
            }
          }, 50)
        }
        else{
          clearInterval(interval)
        }
        return () =>{
          clearInterval(interval)
        }
  
      })
     

  return (
    <div>
  
      <h1 style={{textDecoration:"underline"}}> COUNT DOWN</h1>
      <p style={{fontSize:"30px"}}><span style={{color:"green", fontSize:"60px"}}>{min}</span> m : <span style={{color:"green", fontSize:"60px"}}>{sec}</span> s </p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>


    </div>
  )
}
