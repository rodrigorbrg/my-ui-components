import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';

import { FeedbackWidget, FeedbackBody } from 'widget-feedback';

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
      <FeedbackWidget submitCallback={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
