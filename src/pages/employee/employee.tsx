import React from 'react';
import { Container, Typography } from '@mui/material';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

const EmployeeDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Employee Dashboard
          </Typography>
          <Typography>
            Chào mừng bạn đến với bảng điều khiển nhân viên.
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
