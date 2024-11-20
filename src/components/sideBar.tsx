import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, height: '100vh', backgroundColor: '#f4f4f4' }}>
      <List>
        <ListItem button component={Link as React.ElementType} to="/admin/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link as React.ElementType} to="/admin/employee-management">
          <ListItemText primary="Quản lý nhân viên" />
        </ListItem>
        <ListItem button component={Link as React.ElementType} to="/admin/task-management">
          <ListItemText primary="Quản lý công việc" />
        </ListItem>
        <ListItem button component={Link as React.ElementType} to="/admin/salary-management">
          <ListItemText primary="Quản lý lương" />
        </ListItem>
        <ListItem button component={Link as React.ElementType} to="/admin/attendance-management">
          <ListItemText primary="Quản lý chấm công" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
