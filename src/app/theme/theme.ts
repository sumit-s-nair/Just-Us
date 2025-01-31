import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#939AFF',  // Accent Blue for buttons and highlights
    },
    background: {
      default: '#121B22',  // Dark Gray for the main background
      paper: '#1F2C34',    // Dark Charcoal for chat bubbles and cards
    },
    text: {
      primary: '#EDEDED',  // Light Gray for main text
      secondary: '#8696A0', // Muted Gray for secondary text
    },
    info: {
      main: '#2D3E50',    // Muted Blue for sent message bubbles
    },
    error: {
      main: '#F35B5B',    // Coral Red for errors
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
