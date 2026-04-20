import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = ({ className = '' }) => {
  const { themeId, setThemeId } = useTheme();
  const options = [
    { id: 'freshDairy', name: 'Light' },
    { id: 'premiumGold', name: ' Dark' },
  ];

  return (
    <div className={`theme-switcher ${className}`}>
      <span className="theme-switcher-label">Theme</span>
      <div className="theme-switcher-buttons">
        {options.map((t) => (
          <motion.button
            key={t.id}
            type="button"
            className={`theme-btn ${themeId === t.id ? 'theme-btn-active' : ''}`}
            onClick={() => setThemeId(t.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Switch to ${t.name} theme`}
          >
            <span className="theme-btn-swatch" aria-hidden />
            <span className="theme-btn-name">{t.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
