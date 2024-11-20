import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface ReportFormProps {
  onSubmit: (report: string) => void;
}

const ReportForm: React.FC<ReportFormProps> = ({ onSubmit }) => {
  const [report, setReport] = useState('');

  const handleSubmit = () => {
    if (report.trim()) {
      onSubmit(report);
      setReport(''); // Clear the form
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label="Nhập báo cáo công việc"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={report}
        onChange={(e) => setReport(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Gửi báo cáo
      </Button>
    </Box>
  );
};

export default ReportForm;
