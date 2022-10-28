import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

export default function Login() {
  return (
    <>
     <h2>Login</h2>
    <LoginForm/>
    </>
    
  )
}

function LoginForm(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //   alert(inputs);
    // console.log(inputs)
    // fetch('http://localhost:5000/users', {
    //   method: 'POST',
    //   body: JSON.stringify(inputs),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // })
    delay(3000);
    navigate('/');


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
