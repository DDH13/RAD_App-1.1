import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import refreshPage from './refresh';

  function UpdateEvent(props) {
    const [inputs, setInputs] = useState(0);
    const fid = props.i

    const checkobj = (ob)=>{
        return ob._id==fid
    }
        const baseURL = `http://localhost:5000/`
        fetch(`${baseURL}event`)
            .then((response) => {
                return response.json()
            })
            .then(jsondata => {
                const obj =  jsondata.find(checkobj)
                if (inputs==0){
                  setInputs({_id:obj._id,date: obj.date, club: obj.club,name:obj.name})
                }

            })
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values,[name]: value}))

    }
  
    const handleSubmit = (event) => {
      event.preventDefault();

      fetch('http://localhost:5000/event/update', {
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
          value={inputs.name||""} 
          onChange={handleChange}
        />
        
          <input 
            type="date" 
            name="date" 
            placeholder='Date'
            value={inputs.date}
            onChange={handleChange}
          />
          <input 
          type="text" 
          name="club" 
          placeholder='Club'
          value={inputs.club||""} 
          onChange={handleChange}
        />
          
          <input type="submit" value="Update"/>
      </form>
    )
  }


export default UpdateEvent;



