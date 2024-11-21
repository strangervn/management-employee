import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import { getSalaries } from '../../api/salaryService';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

const SalaryManagement = () => {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    const fetchSalaries = async () => {
      const data = await getSalaries();
      setSalaries(data);
    };

    fetchSalaries();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Quản lý lương
          </Typography>
          <Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tên nhân viên</TableCell>
                  <TableCell>Lương</TableCell>
                  <TableCell>Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salaries.map((salary: any) => (
                  <TableRow key={salary._id}>
                    <TableCell>{salary.employeeName}</TableCell>
                    <TableCell>{salary.amount}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small">
                        Cập nhật
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

export default SalaryManagement;
