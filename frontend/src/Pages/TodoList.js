import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import UpdateTask from '../components/UpdateTask'

export default function TodoList() {
const [ID, setID] = useState(0);
  return (
    <>
    <TaskList s={setID}/>
    <TaskForm />
    <UpdateTask i={ID}/>

    </>
  )
}
