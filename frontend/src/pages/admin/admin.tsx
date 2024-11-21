import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import DashboardStats from '../../components/dashBoardStats';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <DashboardStats title="Số nhân viên" value={50} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DashboardStats title="Công việc đang thực hiện" value={10} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DashboardStats title="Số lượng báo cáo" value={20} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AdminDashboard;
