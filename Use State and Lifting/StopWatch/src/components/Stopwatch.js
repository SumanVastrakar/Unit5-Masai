import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";

export default function Stopwatch() {

    const [hours, setHours] = useState(0);
    const [min, setMin] = useState(0);
    const [second, setSecond] = useState(0);
    const [msecond, setMsecond] = useState(0);
    const [stop, setStop] = useState(false);


    ///function for various functionalities

    const onStop = () => {
        setStop(false);
    }

    const onStart = () => {
        setStop(true);
    }

    const onReset = () => {
        setHours(0);
        setMin(0);
        setSecond(0);
        setMsecond(0);



    }

    useEffect(() =>{
        let interval = null;
        if(stop){
            interval = setInterval(() =>{
                if (min > 59){
                    setHours(hours+1);
                    setMin(0);
                    clearInterval(interval)

                }
                if (second > 59){
                    setMin(min+1);
                    setSecond(0);
                    clearInterval(interval)

                }
                if (msecond > 999){
                    setSecond(second+1);
                    setMsecond(0);
                    clearInterval(interval)

                }
                if(msecond <= 999){
                    setMsecond(msecond + 1);
                }
            },0.1)
        }
        else {
            clearInterval(interval)
        }
        return ()=>{
            clearInterval(interval)
        }
    })

  return (
    <div>
        <h1 style={{textDecoration:"underline"}}> STOP WATCH</h1>
      <p style={{fontSize:"30px"}}><span style={{color:"green", fontSize:"60px"}}>{hours}</span> h : <span style={{color:"green", fontSize:"60px"}}>{min}</span> m : <span style={{color:"green", fontSize:"60px"}}>{second}</span> s : <span style={{color:"green", fontSize:"60px"}}>{msecond}</span> ms</p>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>

<Link to="/countdown">
<h5 style={{color:'red', cursor:"pointer", textDecoration:"underline"}}>Click here for Countdown</h5>
</Link>
    
    </div>
  )
}
