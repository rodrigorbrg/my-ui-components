import React from 'react';
import { Text, View } from 'react-native';
const bug = require('../../../assets/bug.png');
const idea = require('../../../assets/idea.png');
const thought = require('../../../assets/thought.png');

import styles from './styles';
import Option from '../Option';
import type { FeedbackType } from '../FeedbackWidget';

interface Props {
  setOptionFeedback: (type: FeedbackType) => void;
}

function FeedbackOptions({ setOptionFeedback }: Props) {
  const onPress = (type: FeedbackType) => {
    setOptionFeedback(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Deixe seu feedback'}</Text>
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
export default FeedbackOptions;
