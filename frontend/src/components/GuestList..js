import React from 'react'
import { useEffect, useState } from "react";
import refreshPage from './refresh';

function Del(e) {
    let a = e.key2;
    const handleClick = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/participant/delete', {
            method: 'POST',
            body: JSON.stringify({ _id: a }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        refreshPage();
        }
    return (
        <button className='delbutton' onClick={handleClick}>Delete</button>
    )
}

function Update(e) {
    let a = e.key3;
    const handleClick = (e) => {

    }
    return (
        <button className='updatebutton' onClick={handleClick}>Update</button>
    )
}
function Guest(props) {
    const x = props.guest
    console.log("Guests")
    console.log(x)
    return (
        <>
            <h6>
                <span className='guest'>{x.name}:  {x.email}</span>
            </h6>

        </>
    )
}
function Evname(props) {
    return (
        <h3> {props.e}</h3>
    )
}
function PrtLst(props) {
    const d = props.p
    return (
        d.map(
            (x) => <Guest guest={x} />
        )
    )
}


function Guestbox(props) {
    console.log(`Prop =`)
    console.log(props)
    console.log(props.d.eventName)
    return (
        <>
            <Evname e={props.d.eventName}/>
            <PrtLst p={props.d.participant}/>
            <Del key2={props.d._id} />
            <Update key3={props.d._id} />
        </>
    )
}


export default function GuestList() {
    const [data, setData] = useState([]);

    const getdata = () => {
        const baseURL = `http://localhost:5000/`
        fetch(`${baseURL}participant`)
            .then((response) => {
                // console.log(response)
                return response.json()
            })
            .then(jsondata => {
                console.log(jsondata)
                setData(jsondata)
            })
    }
    useEffect(() => {
        getdata()
    }, [])

    return (

        data.map(
            (d) => (<Guestbox d={d} />)
        )

    )
}
