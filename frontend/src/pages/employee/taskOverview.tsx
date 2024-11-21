import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { getTasks } from '../../api/taskService';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

const TaskOverview = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Công việc của tôi
          </Typography>
          <Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tên công việc</TableCell>
                  <TableCell>Mô tả</TableCell>
                  <TableCell>Ngày bắt đầu</TableCell>
                  <TableCell>Ngày kết thúc</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task: any) => (
                  <TableRow key={task._id}>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.startDate}</TableCell>
                    <TableCell>{task.endDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default TaskOverview;
