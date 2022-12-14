import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import refreshPage from './refresh';

  function TaskForm(props) {
    const [inputs, setInputs] = useState({});

    //When called to update items

    const fid = props.fid
    const checkobj = (ob)=>{
        return ob._id==fid

    }
    
   

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
    //   alert(inputs);
      console.log(inputs)
      fetch('http://localhost:5000/todo/save', {
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
          name="title" 
          placeholder='Title'
          value={inputs.title || ""} 
          onChange={handleChange}
        />
        
          <input 
            type="text" 
            name="description" 
            placeholder='Description'
            value={inputs.description || ""} 
            onChange={handleChange}
          />
          
          <input type="submit" />
      </form>
    )
  }

  TaskForm.defaultProps = {
    fid: -1
  }
export default TaskForm;



