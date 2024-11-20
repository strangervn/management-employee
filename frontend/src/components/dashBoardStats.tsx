import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

interface DashboardStatsProps {
  title: string;
  value: number | string;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ title, value }) => {
  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardStats;
