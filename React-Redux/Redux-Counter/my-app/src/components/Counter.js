import React from 'react'
import { addCount, subCount } from '../Redux/Counter/action'
import { store } from '../Redux/store'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {

     const dispatch = useDispatch();
     const counter = useSelector(store => store.counter.counter)
  return (
    <div className='App'>
      <h1>Counter : {counter}</h1>
      <button onClick={() =>{
        dispatch(addCount(1))
      }}>ADD</button>
      <button onClick={() =>{
        dispatch(subCount(1))
      }}>REDUCE</button>
    </div>
  )
}
