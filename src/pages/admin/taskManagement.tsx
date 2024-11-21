import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { getTasks } from '../../api/taskService';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

const TaskManagement = () => {
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
            Quản lý công việc
          </Typography>
          <Box>
            <Button variant="contained" sx={{ marginBottom: 2 }}>
              Thêm công việc
            </Button>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tên công việc</TableCell>
                  <TableCell>Mô tả</TableCell>
                  <TableCell>Ngày bắt đầu</TableCell>
                  <TableCell>Ngày kết thúc</TableCell>
                  <TableCell>Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task: any) => (
                  <TableRow key={task._id}>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell>{task.startDate}</TableCell>
                    <TableCell>{task.endDate}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small">
                        Sửa
                      </Button>
                    </TableCell>
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

export default TaskManagement;
