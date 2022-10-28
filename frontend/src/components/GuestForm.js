import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function ResForm(props) {

  const [inputs, setInputs] = useState({});



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //   alert(inputs);
    console.log(inputs)
    fetch('http://localhost:5000/resourcepeople/save', {
      method: 'POST',
      body: JSON.stringify(inputs),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder='Name'
        value={inputs.name || ""}
        onChange={handleChange}
      />

      <input
        type="text"
        name="profession"
        placeholder='Profession'
        value={inputs.profession || ""}
        onChange={handleChange}
      />

      <input
        type="text"
        name="contactNo"
        placeholder='Contact No.'
        value={inputs.contactNo || ""}
        onChange={handleChange}
      />

      <input
        type="text"
        name="company"
        placeholder='Company'
        value={inputs.company || ""}
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        placeholder='Email'
        value={inputs.email || ""}
        onChange={handleChange}
      />

      <input type="submit" />
    </form>
  )
}
export default ResForm;