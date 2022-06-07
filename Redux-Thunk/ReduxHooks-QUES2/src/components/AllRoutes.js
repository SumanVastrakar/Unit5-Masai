import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from './Dashboard'
import "../App.css"
import TodoAdd from './TodoAdd'

export default function AllRoutes() {
  return (
    <div className="routeAdjustment" >
<Dashboard/>
      <Routes>
<Route path="/todoadd" element={<TodoAdd/>}></Route>

      </Routes>
    </div>
  )
}
