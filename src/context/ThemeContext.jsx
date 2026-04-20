import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../themes/themes';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(() => {
    try {
      return localStorage.getItem('yasodha-theme') ?? 'freshDairy';
    } catch {
      return 'freshDairy';
    }
  });

  const theme = themes[themeId] ?? themes.freshDairy;

  useEffect(() => {
    try {
      localStorage.setItem('yasodha-theme', themeId);
    } catch {
      /* ignore */
    }

    // Global theme switching should be class-based (no inline CSS variable overrides).
    // premiumGold -> `.gold-theme` (dark), everything else -> light defaults.
    const rootEl = document.documentElement;
    const bodyEl = document.body;
    const applyTo = bodyEl ?? rootEl;

    applyTo.classList.toggle('gold-theme', themeId === 'premiumGold');
  }, [themeId, theme]);

  const value = {
    theme,
    themeId,
    setThemeId,
    themes: Object.entries(themes).map(([id, t]) => ({ id, ...t })),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
