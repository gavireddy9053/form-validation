import './App.css';
import {useState} from 'react'

function App() {
  const [data,setData] = useState({
    name:'',
    password:''
  })
  const MyEvent = (event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className="App">
      <h1>SignIn</h1>
      <div>
        <label>UserName</label>
        <input type='text' name='name' placeholder='Enter your username' onChange={MyEvent}/>
       </div>
       <div>
        <label>Password</label>
        <input type='password' password='password' placeholder='Enter password'  onChange={MyEvent}/>
       </div>
       <div>
      <button onClick={handleSubmit}>sumbit</button>
       </div>
    </div>
  );
}

export default App;
