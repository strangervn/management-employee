import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { getAttendance } from '../../api/attendanceService';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      const data = await getAttendance();
      setAttendance(data);
    };

    fetchAttendance();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Chấm công
          </Typography>
          <Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Ngày</TableCell>
                  <TableCell>Trạng thái</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attendance.map((attend: any) => (
                  <TableRow key={attend._id}>
                    <TableCell>{attend.date}</TableCell>
                    <TableCell>{attend.status ? 'Có mặt' : 'Vắng mặt'}</TableCell>
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

export default Attendance;
