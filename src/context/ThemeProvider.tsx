import {
  createTheming,
  type ThemingType,
} from '@callstack/react-theme-provider';
import { theme } from '../theme';

export type Theme = {
  colors: {
    primary: string;
    primary_variant: string;
    secondary: string;
    secondary_variant: string;
    background: string;
    surface_primary: string;
    surface_secondary: string;
    error: string;
    text_primary: string;
    text_secondary: string;
    text_on_background: string;
    text_on_surface: string;
    text_on_brand_color: string;
    text_on_error: string;
    stroke: string;
  };
};

export const { ThemeProvider, withTheme, useTheme }: ThemingType<Theme> =
  createTheming<Theme>(theme);
