import React from 'react'
import { useEffect, useState } from "react";
import TaskForm from './TaskForm';

function Del(e){
    let a = e.key2;
    const handleClick = (e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/todo/delete', {
            method: 'POST',
            body: JSON.stringify({_id:a}),
            headers: {
              'Content-Type': 'application/json'
            },
        })
    }
    return(
        <button className='delbutton' onClick={handleClick}>Delete</button>
    )
}

function Update(e){
    let a = e.key3;
    const handleClick = (e)=>{
        // e.preventDefault();
        // fetch('http://localhost:5000/todo/update', {
        //     method: 'POST',
        //     body: JSON.stringify({_id:a}),
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        // })
        return (
            <>
                <TaskForm fid={a}/>
            </>
        )
    }
    return(
        <button className='updatebutton' onClick={handleClick}>Update</button>
    )
}
function Task(props) {
    const x = props.task

    return (
        <>
        <h3>
            <div>{x.title}</div>
            <div>{x.description}</div>

            <Del key2 ={x._id} />
            <Update key3 ={x._id} />
            <br></br>
            <br></br>
        </h3>
        </>
    )
}


export default function TaskList({todo}) {
    const [data, setData] = useState([]);

    const getdata = () => {
        const baseURL = `http://localhost:5000/`
        fetch(`${baseURL}todo`)
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then(jsondata => {
                setData(jsondata)
            })
    }
    useEffect(() => {
        getdata()
    }, [])

    return (
        data.map(
            (d) => (<Task task={d} key = {d._id}/>) 
        )

    )
}
