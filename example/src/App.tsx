import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, Theme } from 'widget-feedback';

import Navigator from './navigation/Navigator';

const theme: Theme = {
  colors: {
    primary: '#29b6f6',
    primary_variant: '#4FC2F7',
    secondary: '#F66A29',
    secondary_variant: '#F77E49',

    background: '#FFF',

    surface_primary: '#F9F9F9',
    surface_secondary: '#E8E8E8',
    //  surface_primary: '#18181B',
    //  surface_secondary: '#27272A',
    error: '#E53935',

    text_on_brand_color: '#fff',
    text_primary: '#fff',
    text_secondary: '#A1A1AA',
    text_on_background: '#222',
    text_on_surface: '#444',
    text_on_error: '#FFFFFF',

    stroke: '#52525B',
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}
