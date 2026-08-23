import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { ThemeMode } from '../../theme';

interface ThemeToggleProps {
  mode: ThemeMode;
  onToggle: () => void;
}

export default function ThemeToggle({ mode, onToggle }: ThemeToggleProps) {
  return (
    <Box sx={{ mt: 'auto', pt: 3, display: 'flex', justifyContent: 'center' }}>
      <FormControlLabel
        control={<Switch color="info" checked={mode === 'dark'} onChange={onToggle} />}
        label="Dark mode"
      />
    </Box>
  );
}
