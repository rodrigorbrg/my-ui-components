import React from 'react';
import { View } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';

import styles from './styles';
import { theme } from '../theme';

function FeedbackWidget() {
  return (
    <View style={styles.container}>
      <ChatTeardropDots color={theme.colors.text_on_brand_color} />
    </View>
  );
}
export default FeedbackWidget;
