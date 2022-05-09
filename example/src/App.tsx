import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';

import { FeedbackWidget, FeedbackBody, Button } from 'widget-feedback';

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

  return (
    <View style={styles.container}>
      <FeedbackWidget submitCallback={submit}>
        <Button style={styles.button}>{'Button 1'}</Button>
        <Button>{'Button 2'}</Button>
      </FeedbackWidget>
    </View>
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
