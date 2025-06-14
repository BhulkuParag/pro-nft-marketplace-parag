// src/ThemeProvider.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { type Theme } from '@mui/material';

type Mode = 'light' | 'dark';

interface ThemeContextType {
  mode: Mode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#red' },
    secondary: { main: '#fff' },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#141416',
      secondary: '#777E90',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#020110',
    },
    secondary: {
      main: '#1c1c1c',
    },
    background: {
      default: '#141416',
    },
    text: {
      primary: '#fff',
      secondary: '#A49BFF',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

const MuiTheme: React.FC<Props> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Mode | null;
    if (stored === 'light' || stored === 'dark') {
      setMode(stored);
    }
  }, []);

  const toggleTheme = () => {
    const newMode: Mode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  //   const theme = useMemo(
  //     () =>
  //       createTheme({
  //         palette: {
  //           mode,
  //           primary: { main: '#1E40AF' },
  //           secondary: { main: '#F43F5E' },
  //           background: { default: mode === 'dark' ? '#141416' : '#fff' },
  //         },
  //         typography: {
  //           fontFamily: 'Inter, sans-serif',
  //         },
  //       }),
  //     [mode]
  //   );

  const theme: Theme = useMemo(
    () => (mode === 'dark' ? darkTheme : lightTheme),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MuiTheme;
