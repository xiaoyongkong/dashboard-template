import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-page">
      <Container>
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1">
            Welcome to your dashboard!
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default Dashboard;
