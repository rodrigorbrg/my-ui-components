import React from 'react';
import { View } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';

import styles from './styles';

function FeedbackWidget() {
  return (
    <View style={styles.container}>
      <ChatTeardropDots />
    </View>
  );
}
export default FeedbackWidget;
