import React from 'react'
import { useEffect, useState } from "react";
import ResForm from './ResForm';

function Del(e){
    let a = e.key2;
    const handleClick = (e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/resourcepeople/delete', {
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
function Resperson(props) {
    const x = props.resp

    return (
        <>
        <h3>
            <div>{x.name}</div>
            <div>{x.company}</div>
            <div>{x.email}</div>
            <div>{x.contactNo}</div>
            <div>{x.profession}</div>

            <Del key2 ={x._id} />
            <Update key3 ={x._id} />
            <br></br>
            <br></br>
        </h3>
        </>
    )
}


export default function ResList() {
    const [data, setData] = useState([]);

    const getdata = () => {
        const baseURL = `http://localhost:5000/`
        fetch(`${baseURL}resourcepeople`)
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
            (d) => (<Resperson resp={d} key = {d._id}/>) 
        )

    )
}
