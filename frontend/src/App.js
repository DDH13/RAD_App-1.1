import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard.js";
import MyForm from "./components/TaskForm.js";
import TaskList from "./components/TaskList.js";



function App() {

return (<>
  <Dashboard />
  <TaskList />
  <MyForm/>
</>
)

}

export default App;
