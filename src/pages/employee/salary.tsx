import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { getSalaries } from '../../api/salaryService';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

// Define the type for salary data
interface Salary {
  amount: number;  // Assuming 'amount' is a number, change if needed
}

const Salary = () => {
  // Initialize the salary state with the correct type
  const [salary, setSalary] = useState<Salary | null>(null); // You can initialize as null or a default salary object

  useEffect(() => {
    const fetchSalary = async () => {
      const data = await getSalaries();
      setSalary(data);
    };

    fetchSalary();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Lương của tôi
          </Typography>
          {salary ? (
            <Box>
              <Typography variant="h6">Lương tháng này: {salary.amount}</Typography>
            </Box>
          ) : (
            <Typography variant="h6">Đang tải...</Typography>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Salary;
