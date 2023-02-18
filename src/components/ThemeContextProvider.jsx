import React, {
    createContext,
    useCallback,
    useEffect,
    useState,
  } from 'react';

  import ThemeContext from '../context/ThemeContext';
  
  // Creamos contexto del Theme


export const ThemeContextProvider = ({ children }) => {
  // Definimos el control que haremos sobre los datos del Provider
  const [theme, setTheme] = useState(
    // Inicializamos el state de forma lazy para leer localStorage primero
    () => localStorage.getItem("theme") || "dark"
  );

  const toggleTheme = useCallback(() => {
    console.log('desde el themeContextProvi')
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  // Cada vez que theme cambie, lo guardo actualizado en localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
