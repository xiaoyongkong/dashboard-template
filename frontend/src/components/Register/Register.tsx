import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Register.scss';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
      // Lógica de registro aqui
    }
  }

  return (
    <div className="register-page">
      <Container>
        <Box className="form-container">
          <Typography variant="h4" gutterBottom>
            Register
          </Typography>

          <form className="form-container--form" onSubmit={handleSubmit}>
            <TextField
              label="Login"
              placeholder="Login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              className="form-container--form__input"
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              className="form-container--form__input"
            />
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              className="form-container--form__input"
            />

            <Button
              className="form-container--form__button"
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Register
            </Button>

            <Link
              component={RouterLink}
              to="/"
              variant="body2"
              className="form-container--form__link"
              sx={{ display: 'block', textAlign: 'center', mt: 2 }}
            >
              Back to Login
            </Link>
          </form>

          {message && (
            <Typography variant="body1" color="error" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Register;
