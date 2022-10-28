import React from 'react'
import { useEffect, useState } from "react";
import EventsForm from './EventsForm';
import refreshPage from './refresh';

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
function Event(props) {
    const x = props.event
    const setID = props.s

    return (
        <>
        <h3><br>
        </br>
            <div className='ev'>{x.date}</div>
            <div className='ev'>{x.name}</div>
            <div className='ev'>{x.club}</div>
<br></br>
            <Del key2 ={x._id} />
            <Update key3 ={x._id} s={setID}/>
            <br></br>
            <br></br>
        </h3>
        </>
    )
}


export default function EventList(props) {
    const setID = props.s
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

        data.map((d)=> (<Event event={d} key = {d._id}  s={setID}/>)  )


    )
}
