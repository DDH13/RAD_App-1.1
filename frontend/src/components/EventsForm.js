import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import refreshPage from './refresh';

  function EventsForm(props) {
    
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
    //   alert(inputs);
      console.log(inputs)
      fetch('http://localhost:5000/event/save', {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json'
        },
    })
    refreshPage();
  

    }
  
    return (
      <form onSubmit={handleSubmit}>
  
        <input 
          type="text" 
          name="name" 
          placeholder='Event Name'
          value={inputs.name || ""} 
          onChange={handleChange}
        />



          <input 
            type="date" 
            name="date" 
            placeholder='Date'
            value={inputs.date || ""} 
            onChange={handleChange}
          />



          <input 
            type="text" 
            name="club" 
            placeholder='Club'
            value={inputs.club || ""} 
            onChange={handleChange}
          />

          <input type="submit" />
      </form>
    )
  }
export default EventsForm;