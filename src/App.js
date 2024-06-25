import './App.css';
import {useState} from 'react';

function App() {
  const initialData = {
    name: '',
    password: ''
  };

  const [data, setData] = useState(initialData);

  const MyEvent = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleReset = () => {
    setData(initialData);
  };

  return (
    <div className="App">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your username" 
            value={data.name}
            onChange={MyEvent} 
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter password" 
            value={data.password}
            onChange={MyEvent} 
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default App;
