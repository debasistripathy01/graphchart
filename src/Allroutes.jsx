import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Graph } from './Components/Graph';
import Dashboard from './Scenes/Dashboard/dashboard';

// import LineChart from './Components/Line';
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Graph />}/>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  )
}

export default Allroutes