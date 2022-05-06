import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FeedbackWidget } from 'widget-feedback';

export default function App() {
  return (
    <View style={styles.container}>
      <FeedbackWidget />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
