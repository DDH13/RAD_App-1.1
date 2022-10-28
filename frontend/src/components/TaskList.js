import React from 'react'
import { useEffect, useState } from "react";
import refreshPage from './refresh';
import TaskForm from './TaskForm';
import { useNavigate } from 'react-router-dom';


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
        refreshPage();
    }
    return(
        <button className='delbutton' onClick={handleClick}>Delete</button>
    )
}

function Update(e){
    let a = e.key3;
    const setID = e.s

    const handleClick = (e)=>{

        setID(a)
    }
    return(
        <button className='updatebutton' onClick={handleClick}>Update</button>
    )
}
function Task(props) {
    const x = props.task
    const setID = props.s

    return (
        <>

        <h3>{x.title}: {x.description}</h3> 

            <Del key2 ={x._id} />   <Update key3 ={x._id} s={setID}/>
        </>
    )
}


export default function TaskList(props) {
    const setID = props.s
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
            (d) => (<Task task={d} key = {d._id} s={setID}/>) 
        )

    )
}
