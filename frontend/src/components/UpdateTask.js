import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import refreshPage from './refresh';

  function UpdateTask(props) {
    const [inputs, setInputs] = useState(0);
    const fid = props.i

    const checkobj = (ob)=>{
        return ob._id==fid
    }
        const baseURL = `http://localhost:5000/`
        fetch(`${baseURL}todo`)
            .then((response) => {
                return response.json()
            })
            .then(jsondata => {
                const obj =  jsondata.find(checkobj)
                if (inputs==0){
                  setInputs({_id:obj._id,title: obj.title, description: obj.description})
                }

            })
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values,[name]: value}))

    }
  
    const handleSubmit = (event) => {
      event.preventDefault();

      fetch('http://localhost:5000/todo/update', {
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
          value={inputs.title||""} 
          onChange={handleChange}
        />
        
          <input 
            type="text" 
            name="description" 
            placeholder='Description'
            value={inputs.description}
            onChange={handleChange}
          />
          
          <input type="submit" value="Update"/>
      </form>
    )
  }


export default UpdateTask;



