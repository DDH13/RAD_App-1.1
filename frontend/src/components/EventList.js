import React from 'react'
import { useEffect, useState } from "react";
import EventsForm from './EventsForm';

function Del(e){
    let a = e.key2;
    const handleClick = (e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/event/delete', {
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

    }
    return(
        <button className='updatebutton' onClick={handleClick}>Update</button>
    )
}
function Event(props) {
    const x = props.event

    return (
        <>
        <h3>
            <div>{x.date}</div>
            <div>{x.name}</div>
            <div>{x.club}</div>

            <Del key2 ={x._id} />
            <Update key3 ={x._id} />
            <br></br>
            <br></br>
        </h3>
        </>
    )
}


export default function EventList() {
    const [data, setData] = useState([]);

    const getdata = () => {
        const baseURL = `http://localhost:5000/`
        fetch(`${baseURL}event`)
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
            (d) => (<Event event={d} key = {d._id}/>) 
        )

    )
}
