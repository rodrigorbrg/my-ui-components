import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';

import {
  ThemeProvider,
  Theme,
  FeedbackWidget,
  FeedbackBody,
  Button,
} from 'widget-feedback';

export default function App() {
  const submit = async (body: FeedbackBody) => {
    const defaultHeader = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const appAPI = axios.create({
      baseURL: 'https://widget-feedback-server-production-6d50.up.railway.app',
      timeout: 60000,
    });
    try {
      await appAPI.post('/feedback', body, defaultHeader); // await fetch('http://localhost:3333/feedback', {
    } catch (e) {
      console.log(e);
    }
  };

  const theme: Theme = {
    colors: {
      brand: '#825700',
      background: '#09090A',

      surface_primary: '#18181B',
      surface_secondary: '#27272A',

      text_primary: '#F4F4F5',
      text_secondary: '#A1A1AA',
      text_on_brand_color: '#FFFFFF',

      stroke: '#52525B',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <FeedbackWidget submitCallback={submit}>
          <Button onPress={() => {}} style={styles.button}>
            {'Button 1'}
          </Button>
        </FeedbackWidget>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  button: {
    // alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 8,
    marginHorizontal: 20,
  },
});
