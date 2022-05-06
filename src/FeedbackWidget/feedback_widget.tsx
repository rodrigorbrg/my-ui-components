import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';

import styles from './styles';
import { theme } from '../theme';

function FeedbackWidget() {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {}}
      activeOpacity={0.8}
    >
      <ChatTeardropDots
        color={theme.colors.text_on_brand_color}
        weight={'bold'}
        size={24}
      />
    </TouchableOpacity>
  );
}
export default FeedbackWidget;
