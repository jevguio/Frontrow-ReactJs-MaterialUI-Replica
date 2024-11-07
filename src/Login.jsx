import { useState } from 'react'
import './App.css'
import bg from './assets/Frontrow_BG_login.jpg'
import logo from './assets/Frontrow_logo.png'
function App() {
  const user={username:'mauleon',pass:'mauleon123'};
  const [userIn,setUser]=useState('');
  const [passIn,setPass]=useState('');
  const login=(e)=>{
    e.preventDefault();
    if(userIn===user.username&&passIn===user.pass){
      
      window.location='./home';
    }else{
      alert('Invalid Account');
    }
  }
  const userInHander=(e)=>{
    setUser(e.target.value)
  }  
  const passInHander=(e)=>{
    setPass(e.target.value)
  }

  return (
    <>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ width: '70%', backgroundImage: `url(./${bg})`, backgroundSize: 'cover' }}></div>
        <div style={{ width: '30%', itemAlign: 'center', backgroundColor: 'white' }}>

          <img src={"./"+logo} style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '35%' }}></img>
          <form onSubmit={login} className='login' style={{ marginLeft: 'auto', marginRight: 'auto' ,marginTop:'15%'}}>
            <center>
 
              <input type='text'  onChange={userInHander}  placeholder='Username' required></input>
              <br></br>
              <br></br> 
              <input type='password' onChange={passInHander} placeholder='Password' required></input>
              <button type='submit'>Login</button>
              <a href='#'>FORGOT PASSWORD?</a>
              <a href='#'>DO NOT HAVE AN ACCOUNT? REACHOUT TO FRONTROW NEAR YOU.</a>
              <button>Home</button>
              <a href='#'>OLD MEMBERSHIP PORTAL ACCESS</a>
            </center>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
