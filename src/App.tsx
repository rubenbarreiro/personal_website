import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themes, ThemeMode } from './theme';
import Main from './components/Main';

const themeStorageKey = 'themeMode';

function getInitialMode(): ThemeMode {
  const savedMode = localStorage.getItem(themeStorageKey);
  return savedMode === 'light' ? 'light' : 'dark';
}

function App() {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    localStorage.setItem(themeStorageKey, mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={themes[mode]}>
      <CssBaseline />
      <Main mode={mode} onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
