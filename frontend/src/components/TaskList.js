import React from 'react'
import { useEffect, useState } from "react";

function Task(props) {
    const x = props.task

    return (
        <>
        <h3>
            <div>{x.title}</div>
            <div>{x.description}</div>
            <br></br>
            <br></br>
        </h3>
        </>
    )
}



export default function TaskList() {
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
            (d) => (<Task task={d} key = {d.id}/>) 
        )

    )
}




