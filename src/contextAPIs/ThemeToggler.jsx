import React, { createContext, useState, useEffect } from 'react';

export const ThemeConverter = createContext();

const ThemeToggler = ({ children }) => {
  // Initialize theme from localStorage, default to true (light mode)
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') !== 'dark'; // Returns true for 'light' and false for 'dark'
  });

  useEffect(() => {
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  const handleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <ThemeConverter.Provider value={{ isLight, handleTheme }}>
      {children}
    </ThemeConverter.Provider>
  );
};

export default ThemeToggler;
