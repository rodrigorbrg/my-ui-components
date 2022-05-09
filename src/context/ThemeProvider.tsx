import React from 'react';

import { theme } from '../theme';

export interface Theme {
  colors: {
    brand: string;
    background: string;
    surface_primary: string;
    surface_secondary: string;
    text_primary: string;
    text_secondary: string;
    text_on_brand_color: string;
    stroke: string;
  };
}
// export interface ThemeContextInterface {
//   theme: Theme;
//   setTheme: React.Dispatch<React.SetStateAction<Theme>>;
// }

const ThemeContext = React.createContext<Theme | undefined>(theme);

const ThemeProvider = ({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) => {
  // const [theme, setTheme] = useState<Theme>(defaultTheme);

  // const defaultValue: ThemeContextInterface = useMemo(
  //   () => ({
  //     theme,
  //     setTheme,
  //   }),
  //   [theme, setTheme]
  // );

  return (
    <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>
  );
};

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useProposal must be used within a ThemeProvider`);
  }
  return context;
}

export { ThemeProvider, useTheme };
