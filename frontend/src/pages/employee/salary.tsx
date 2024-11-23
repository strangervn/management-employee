import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { getSalaries } from '../../api/salaryService'; // Giả sử API này trả về danh sách hoặc một đối tượng
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

// Define the type for salary data
interface Salary {
  amount: number;  // Assuming 'amount' is a number, change if needed
}

const Salary = () => {
  // Initialize the salary state with the correct type
  const [salary, setSalary] = useState<Salary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSalary = async () => {
      try {
        const data = await getSalaries(); // Lấy dữ liệu từ API
        if (data && Array.isArray(data)) {
          // Nếu API trả về mảng, bạn cần chọn phần tử đầu tiên (hoặc bạn có thể xử lý tùy theo yêu cầu)
          setSalary(data[0]); // Lấy phần tử đầu tiên nếu dữ liệu trả về là mảng
        } else {
          setSalary(data); // Nếu API trả về một đối tượng duy nhất
        }
        setLoading(false);
      } catch (err) {
        setError('Không thể tải dữ liệu lương');
        setLoading(false);
      }
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
          {loading ? (
            <Typography variant="h6">Đang tải...</Typography>
          ) : error ? (
            <Typography variant="h6" color="error">{error}</Typography>
          ) : salary ? (
            <Box>
              <Typography variant="h6">Lương tháng này: {salary.amount} VND</Typography>
            </Box>
          ) : (
            <Typography variant="h6">Không có thông tin lương.</Typography>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Salary;
