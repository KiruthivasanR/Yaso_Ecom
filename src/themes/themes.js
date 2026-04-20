/**
 * Theme configuration for Yasodha Dairy.
 * Add new themes here - each theme affects primary, background, buttons, and cards.
 * @see ThemeContext for usage
 */

export const themes = {
  freshDairy: {
    id: 'freshDairy',
    name: 'Fresh Dairy',
    primary: '#1faf63',
    primaryHover: '#27c274',
    secondary: '#ffffff',
    accent: '#e8fff1',
    background: 'radial-gradient(circle at top left, #e8fff1, #f7fffb 40%, #f0f7ff 80%)',
    text: '#1c1c1c',
    muted: '#a0aab5',
    glassBg: 'rgba(232, 255, 241, 0.7)',
    glassBorder: 'rgba(255, 255, 255, 0.7)',
    shadow: '0 18px 40px rgba(11, 88, 52, 0.18)',
    buttonGradient: 'linear-gradient(135deg, #1faf63, #27c274)',
  },
  organicFarm: {
    id: 'organicFarm',
    name: 'Organic Farm',
    primary: '#8B4513',
    primaryHover: '#A0522D',
    secondary: '#FAF0E6',
    accent: '#F5DEB3',
    background: 'radial-gradient(circle at top left, #F5DEB3, #FAF0E6 40%, #FFF8DC 80%)',
    text: '#2c1810',
    muted: '#8B7355',
    glassBg: 'rgba(245, 222, 179, 0.75)',
    glassBorder: 'rgba(250, 240, 230, 0.8)',
    shadow: '0 18px 40px rgba(139, 69, 19, 0.2)',
    buttonGradient: 'linear-gradient(135deg, #8B4513, #A0522D)',
  },
  modernDairy: {
    id: 'modernDairy',
    name: 'Modern Dairy',
    primary: '#2563eb',
    primaryHover: '#3b82f6',
    secondary: '#ffffff',
    accent: '#eff6ff',
    background: 'radial-gradient(circle at top left, #eff6ff, #f8fafc 40%, #f1f5f9 80%)',
    text: '#0f172a',
    muted: '#64748b',
    glassBg: 'rgba(239, 246, 255, 0.8)',
    glassBorder: 'rgba(255, 255, 255, 0.8)',
    shadow: '0 18px 40px rgba(37, 99, 235, 0.15)',
    buttonGradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
  },
  premiumGold: {
    id: 'premiumGold',
    name: 'Premium Gold',
    primary: '#d4af37',
    primaryHover: '#e6c04a',
    secondary: '#1a1a1a',
    accent: '#2d2d2d',
    background: 'radial-gradient(circle at top left, #1a1a1a, #2d2d2d 40%, #1f1f1f 80%)',
    text: '#f5f5f5',
    muted: '#a0a0a0',
    glassBg: 'rgba(45, 45, 45, 0.85)',
    glassBorder: 'rgba(212, 175, 55, 0.3)',
    shadow: '0 18px 40px rgba(0, 0, 0, 0.4)',
    buttonGradient: 'linear-gradient(135deg, #d4af37, #e6c04a)',
  },
};

export const getThemeId = (id) => themes[id] ?? themes.freshDairy;
export default themes;
