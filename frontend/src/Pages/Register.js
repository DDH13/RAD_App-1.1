import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  return (
  <>
  <h2>Register</h2>
    <RegForm />
  </>
  )
}
function RegForm(props) {

  const [inputs, setInputs] = useState({});


  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //   alert(inputs);
    console.log(inputs)
    // fetch('http://localhost:5000/users', {
    //   method: 'POST',
    //   body: JSON.stringify(inputs),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    
    navigate('/login');
    

  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder='Username'
        value={inputs.name || ""}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder='password'
        value={inputs.password || ""}
        onChange={handleChange}
      />


      <input type="submit" />
    </form>
  )
}
