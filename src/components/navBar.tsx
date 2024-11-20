import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hệ thống quản lý nhân viên
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/login')}>
            Đăng nhập
          </Button>
          <Button color="inherit" onClick={() => navigate('/register')}>
            Đăng ký
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
