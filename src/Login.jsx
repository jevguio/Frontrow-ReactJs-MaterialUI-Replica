
import React, { useState, useEffect } from 'react';
import './App.css'
import bg from './assets/Frontrow_BG_login.jpg'
import logo from './assets/Frontrow_logo.png'
import { Container, Box, Typography, Button, Modal } from '@mui/material';
import { useMediaQuery } from '@mui/material';
function App() {
  const user = { username: 'jev', pass: 'guio' };
  const [userIn, setUser] = useState('');
  const [passIn, setPass] = useState(''); const [modalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleProceed = () => {
    window.location = './login';
  };

  useEffect(() => {
    setModalOpen(true);
  }, []);
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const isRightScreen = useMediaQuery('(max-width:900px)');
  const isWholeScreen = useMediaQuery('(max-width:1200px)');
  const login = (e) => {
    e.preventDefault();
    if (userIn === user.username && passIn === user.pass) {

      window.location = './home';
    } else {
      alert('Invalid Account');
    }
  }
  const userInHander = (e) => {
    setUser(e.target.value)
  }
  const passInHander = (e) => {
    setPass(e.target.value)
  }

  return (
    <>
      <Container sx={{ width:'100%', m:0,p:0}}> 
        <Box component={'div'} sx={{ width: '110%',height: '100vh',mt:0,ml:-3 ,display:'block' }}>
          <Button onClick={handleOpen} sx={{ top:'5%',left: '70%', right: '15%',position:'absolute'}} variant="contained" color="primary">View Notice</Button>

          <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-title" variant="h6" component="h2">
                Important Notice:
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                This website is created solely for a school activity as a part of my coursework. It is designed to replicate the layout and design of Frontrow.
              </Typography>
              <Typography sx={{ mt: 2 }}><strong>Please Note:</strong></Typography>
              <ul>
                <li>No data is collected from this site.</li>
                <li>The site only features a static account for demonstration purposes.</li>
                <li>Use the following credentials to log in:</li>
                <ul>
                  <li><strong>Username:</strong> jev</li>
                  <li><strong>Password:</strong> guio</li>
                </ul>
              </ul>
              <Typography sx={{ mt: 2 }}>Thank you for your understanding!</Typography>
              <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">Close</Button>
            </Box>
          </Modal> <div style={{ display: 'flex', height: '100%' ,width:'100%'}}>
            <div style={{ width: '70%', backgroundImage: `url(./${bg})`, backgroundSize: 'cover' }}></div>
            <div style={{ width: '30%', itemAlign: 'center', backgroundColor: 'white' }}>

              <img src={"./" + logo} style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '35%' }}></img>
              <form onSubmit={login} className='login' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '15%' }}>
                <center>

                  <input type='text' onChange={userInHander} placeholder='Username' required></input>
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
        </Box>
      </Container>

    </>
  )
}


export default App
