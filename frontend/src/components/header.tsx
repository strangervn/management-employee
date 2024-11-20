import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';

interface HeaderProps {
  title: string;
  breadcrumbs?: { label: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, breadcrumbs = [] }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {breadcrumbs.length > 0 && (
        <Breadcrumbs aria-label="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <Link key={index} underline="hover" color="inherit" href={breadcrumb.path}>
              {breadcrumb.label}
            </Link>
          ))}
          <Typography color="text.primary">{title}</Typography>
        </Breadcrumbs>
      )}
    </Box>
  );
};

export default Header;
