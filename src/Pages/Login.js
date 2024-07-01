import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate(

    );

    function onLogin() {
        
        navigate("/Home");
    }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TextField id="eemail" label="Email" variant="filled" style={{ marginBottom: '20px', width: '80%' }} />
        <TextField id="pass" label="Password" variant="filled" type="password" style={{ marginBottom: '20px', width: '80%' }} />
        <Button variant="contained" style={{ marginBottom: '20px', width: '80%' }} onClick={onLogin} >Login</Button>
        <Paper elevation={3} style={{ width: '80%' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={"\abc.jpg"} alt="Descriere imagine" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}
