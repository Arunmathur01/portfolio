import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      <div className="theme-icon">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </div>
    </button>
  );
};

export default ThemeToggle;