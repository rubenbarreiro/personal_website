import { createTheme } from '@mui/material/styles';

const sharedTypography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
};

const sharedComponents = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
      },
    },
  },
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#eef1f6',
    },
    info: {
      main: '#1976d2',
    },
    background: {
      default: '#dbe1e9',
      paper: '#f5f5f5',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: sharedTypography,
  components: sharedComponents,
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0f3460',
    },
    secondary: {
      main: '#16213e',
    },
    info: {
      main: '#90caf9',
    },
    background: {
      default: '#0a0a0a',
      paper: '#16213e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: sharedTypography,
  components: sharedComponents,
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type ThemeMode = keyof typeof themes;

export default darkTheme;
