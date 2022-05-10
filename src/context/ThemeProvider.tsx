import {
  createTheming,
  type ThemingType,
} from '@callstack/react-theme-provider';
import { theme } from '../theme';

export type Theme = {
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
};

export const { ThemeProvider, withTheme, useTheme }: ThemingType<Theme> =
  createTheming<Theme>(theme);
