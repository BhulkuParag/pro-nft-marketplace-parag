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
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomPalette {
    lightPurple: string;
    white: string;
    lightBlue: string;
    lightTableHeading: string;
    tableHeading: string;
    whiteLight: string;
    borderblack01: string;
    // borderlight01: string;
    filterBthBg: string;
    black02: string;
    grey01: string;
    blackLight: string;
    primaryLight: string;
    primaryLight100: string;
    primaryContainer: string;
    lightContainer: string;
    red: string;
    green: string;
    greyDark: string;
    secondaryDark: string;
    primaryDark: string;
    primaryDark01: string;
    whiteLightO1: string;
    ButtonPrimary: string;
    lightGrey: string;
    purple01: string;
    coral: string;
    oxblood: string;
    yellow: string;
    Boarder02: string;
    ButtonHover: string;
    wallet: string;
  }

  interface Palette {
    custom: CustomPalette;
  }

  interface PaletteOptions {
    custom?: Partial<CustomPalette>;
  }

  interface Theme {
    radius: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };

    fontSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
  }

  interface ThemeOptions {
    radius?: Theme['radius'];
    // shadows?: Theme['shadows'];
    fontSize?: Theme['fontSize'];
  }
}

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
    primary: { main: '#dfdfdf' },
    secondary: { main: '#fff' },
    background: {
      default: '#f2f2f2',
    },
    custom: {
      lightPurple: '#7367f0',
      white: '#ffff',
      lightBlue: '#1C1C1C',
      lightTableHeading: '#e2e2e2',
      whiteLight: '#303030',
      borderblack01: '#E6E8EC',
      black02: '#1D1B20',
      grey01: '#79747E',
      blackLight: '#F2F2F2',
      secondaryDark: '#FFFFFF',
      primaryLight: '#777E90',
      primaryLight100: '#D2CDFF',
      primaryContainer: '#21005D',
      lightContainer: '#E6E0E9',
      filterBthBg: '#E0DFF3',
      red: '#E30051',
      green: '#0A9068',
      whiteLightO1: '#141416',
      // primary: '#4836FF',
      // whiteLightO1: '#E7E0EC',
      ButtonPrimary: '#4836FF',
      lightGrey: '#9DA1AF',
      purple01: '#50008E',
      coral: '#F2B8B5',
      oxblood: '#601410',
      yellow: '#FFC155',
      Boarder02: '#777E90',
      ButtonHover: '#ffff',
      wallet: '#EDEBFF'
    },
    text: {
      primary: '#141416',
      secondary: '#777E90',
    },
  },

  radius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  fontSize: {
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#777E90',
          backgroundColor: '#FFFFFF',
          minHeight: '48px',
          '&.Mui-selected': {
            color: '#141416',
            // backgroundColor: '#F2F2F2',
          },
          '&:hover': {
            color: '#141416',
            // backgroundColor: '#E6E8EC',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          minHeight: '48px',
          '& .MuiTabs-indicator': {
            backgroundColor: '#A49BFF',
          },
          '& .MuiTabs-flexContainer': {
            backgroundColor: '#FFFFFF',
            height: '100%',
          },
        },
      },
    },
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
    custom: {
      tableHeading: '#343d55',
      // borderBlack: '#353945',
      grey01: '#CAC4D0',
      greyDark: '#36343B',
      borderblack01: '#353945',
      black02: '#49454F',
      blackLight: '#141416',
      secondaryDark: '#1C1C1C',
      primaryLight: '#A49BFF',
      primaryLight100: '#A49BFF',
      primaryDark: '#4130EA',
      filterBthBg: '#19182E',
      // primaryDark01: '#A49BFF33',
      primaryDark01: '#A49BFF',
      red: '#FE749B',
      green: '#10DAB6',
      whiteLightO1: '#E7E0EC',
      ButtonPrimary: '#4836FF',
      lightGrey: '#9DA1AF',
      purple01: '#50008E',
      coral: '#F2B8B5',
      oxblood: '#601410',
      yellow: '#FFC155',
      Boarder02: '#e6e8ec',
      ButtonHover: '#ffff',
      wallet: '#373549',
    },

    text: {
      primary: '#fff',
      secondary: '#A49BFF',
    },
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  fontSize: {
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#9DA1AF',
          backgroundColor: '#1C1C1C',
          minHeight: '48px',
          // padding: '12px 24px',
          '&.Mui-selected': {
            color: '#FFFFFF',
            // backgroundColor: '#353945',
          },
          '&:hover': {
            color: '#A49BFF',
            // backgroundColor: '#353945',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#1C1C1C',
          minHeight: '48px',
          '& .MuiTabs-indicator': {
            backgroundColor: '#A49BFF',
          },
          '& .MuiTabs-flexContainer': {
            backgroundColor: '#1C1C1C',
            height: '100%',
          },
        },
      },
    },
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
        {/* <CssBaseline /> */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MuiTheme;
