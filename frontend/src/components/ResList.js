import React from 'react'
import { useEffect, useState } from "react";
import refreshPage from './refresh';
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
        refreshPage();
    }
    return(
        <button className='delbutton' onClick={handleClick}>Delete</button>
    )
}

function Update(e){
    let a = e.key3;
    const handleClick = (e)=>{

        refreshPage();
    }
    return(
        <button className='updatebutton' onClick={handleClick}>Update</button>
    )
}
function Resperson(props) {
    const x = props.resp

    return (
        <>
        <table>
            <tr>
                <td>{x.name}</td>
                <td>{x.company}</td>
                <td>{x.email}</td>
                <td>{x.contactNo}</td>
                <td>{x.profession}</td>
            </tr>
            <Del key2 ={x._id} />
            <Update key3 ={x._id} />
            <br></br>
            <br></br>
        </table>
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
