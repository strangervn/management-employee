import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import Sidebar from '../../components/sideBar';
import Navbar from '../../components/navBar';

const TaskReport = () => {
  const [report, setReport] = useState('');

  const handleReportSubmit = () => {
    console.log('Báo cáo:', report);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Container>
          <Typography variant="h4" gutterBottom>
            Báo cáo công việc
          </Typography>
          <Box>
            <TextField
              label="Nhập báo cáo"
              multiline
              rows={6}
              variant="outlined"
              fullWidth
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />
            <Button variant="contained" sx={{ marginTop: 2 }} onClick={handleReportSubmit}>
              Gửi báo cáo
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default TaskReport;
