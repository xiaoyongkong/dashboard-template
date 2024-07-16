import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Login.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previna o comportamento padrão do formulário
    console.log("a");
  }

  return (
    <div className="login-container">
      <Container>
        <Box sx={{ mt: 8 }} className="login-box">
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>

          <form className="login-box--form" onSubmit={handleSubmit}>
            <TextField
              label="Login"
              placeholder="Login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              className="login-box--form__input"
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              className="login-box--form__input"
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 2 }}>
              <Link component={RouterLink} to="/register" variant="body2" className="login-box--form__link">
                Registrar
              </Link>
              <Link component={RouterLink} to="/forgot-password" variant="body2" className="login-box--form__link">
                Esqueci minha senha
              </Link>
            </Box>

            <Button
              className="login-box--form__button"
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 2 }}
            >
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
    </div>
  );
}

export default Login;
