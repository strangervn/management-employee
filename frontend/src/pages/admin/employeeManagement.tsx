import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { getEmployees } from '../../api/employeeService';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    fetchEmployees();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Quản lý nhân viên
          </Typography>
          <Box>
            <Button variant="contained" sx={{ marginBottom: 2 }}>
              Thêm nhân viên
            </Button>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Tên</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Chức vụ</TableCell>
                  <TableCell>Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee: any) => (
                  <TableRow key={employee._id}>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.position}</TableCell>
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

export default EmployeeManagement;
