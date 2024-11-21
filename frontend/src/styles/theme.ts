import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF', // Màu chính
    },
    secondary: {
      main: '#FF6347', // Màu phụ
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
