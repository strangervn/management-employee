import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 2,
        bgcolor: 'primary.main',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © 2024 Hệ thống quản lý nhân viên. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
