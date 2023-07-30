import React, { createContext, useContext, useState } from 'react';
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { Switch } from '@material-ui/core';

// Create ThemeContext
const ThemeContext = createContext();

// Load the custom font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// Create provider for ThemeContext
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Create theme based on the value of darkMode
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: { main: "#800000" }, // maroon red
      secondary: { main: "#FFD700" }, // gold yellow
    },
    typography: {
      fontFamily: '"Source Sans Pro", "Helvetica", "Arial", sans-serif',
      fontSize: 14,
    },
    overrides: {
        MuiButton: {
          root: {
            color: 'white',
            '&:hover': {
              backgroundColor: '#f50057',
            },
          },
        },
        MuiAppBar: {
          colorPrimary: {
            backgroundColor: '#b71c1c', // Warna latar belakang AppBar yang lebih gelap
            color: '#ffffff',
          },
        },
        MuiTextField: { // Styling untuk TextField
          root: {
            '& label.Mui-focused': { color: '#b71c1c', }, // Warna label saat TextField difokuskan
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': { borderColor: '#b71c1c', }, // Warna border saat TextField difokuskan
            },
          },
        },
      },

  });

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Create ThemeSwitch component
export const ThemeSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Switch checked={darkMode} onChange={toggleDarkMode} />
  );
};
