import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => null,
});

export default ThemeContext