import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Login.scss';

const Login: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("a")
  }

  return (
    <Container>
      <Box sx={{ mt: 8 }} className='login-box'>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <form className="login-box--form" onSubmit={handleSubmit}>
          <TextField
            label="Login"
            placeholder="Login"
            value={username}
            className="login-box--form__input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            placeholder="senha"
            value={password}
            className="login-box--form__input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="login-box--form__button" variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </form>

        {message && (
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}

      </Box>
    </Container>
  )

}

export default Login;