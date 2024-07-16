import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import theme from './theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
