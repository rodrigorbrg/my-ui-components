import React from 'react';
import { Text, View } from 'react-native';
const bug = require('../../../assets/bug.png');
const idea = require('../../../assets/idea.png');
const thought = require('../../../assets/thought.png');

import Option from '../Option';
import type { FeedbackType } from '../FeedbackWidget';
import { withTheme, Theme } from '../../../context/ThemeProvider';
import styles from './styles';

interface Props {
  theme: Theme;
  setOptionFeedback: (type: FeedbackType) => void;
}

function FeedbackOptions({ theme, setOptionFeedback }: Props) {
  const onPress = (type: FeedbackType) => {
    setOptionFeedback(type);
  };

  return (
    <View style={{ backgroundColor: theme.colors.surface_primary }}>
      <Text style={[styles.title, { color: theme.colors.text_on_surface }]}>
        {'Deixe seu feedback'}
      </Text>
      <View style={styles.feedbackTypes}>
        <Option
          onPress={() => {
            onPress('BUG');
          }}
          image={bug}
          title="Problema"
        />
        <Option
          onPress={() => {
            onPress('IDEA');
          }}
          image={idea}
          title="Ideia"
        />
        <Option
          onPress={() => {
            onPress('OTHER');
          }}
          image={thought}
          title="Outro"
        />
      </View>
    </View>
  );
}
export default withTheme(FeedbackOptions);
