import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

interface TaskCardProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  onViewDetails?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, startDate, endDate, onViewDetails }) => {
  return (
    <Card sx={{ boxShadow: 2, borderRadius: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            <strong>Ngày bắt đầu:</strong> {startDate}
          </Typography>
          <Typography variant="body2">
            <strong>Ngày kết thúc:</strong> {endDate}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" onClick={onViewDetails}>
          Xem chi tiết
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
