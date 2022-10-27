import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js";
import Home from "./Pages/Home.js";
import TodoList from "./Pages/TodoList.js";
import EventTracker from "./Pages/EventTracker.js";
import ResourcePeople from "./Pages/ResourcePeople.js";
import GuestPlanner from "./Pages/GuestPlanner.js";



function App() {

  return (<>
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/todo" element={<TodoList/>}/>
        <Route path = "/event" element={<EventTracker/>}/>
        <Route path = "/participant" element={<GuestPlanner/>}/>
        <Route path = "/resourcepeople" element={<ResourcePeople/>}/>
        <Route path= "/register" element ={<Register/>}/>
        <Route path= "/login" element ={<Login/>}/>



      </Routes>
    </Router>

  </>
  )
}

export default App;