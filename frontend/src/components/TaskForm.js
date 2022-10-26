import { useState } from 'react';
import ReactDOM from 'react-dom/client';




  function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
      console.log(inputs)
      fetch('http://localhost:5000/todo/save', {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json'
        },
    })
  

    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your title:
        <input 
          type="text" 
          name="title" 
          value={inputs.title || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your description:
          <input 
            type="text" 
            name="description" 
            value={inputs.description || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }
export default MyForm;
