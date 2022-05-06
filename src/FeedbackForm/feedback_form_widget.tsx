import React, { useState } from 'react';
import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Image,
  ImageSourcePropType,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';

import type { FeedbackType } from '../FeedbackWidget';
import Button from '../Button';
import SnapButton from '../SnapButton';
import styles from './styles';
import { theme } from '../theme';

interface Props {
  image: ImageSourcePropType;
  title: string;
  typeFeedBack: FeedbackType;
  resetFeedback: () => void;
}

function FeedbackForm({ image, title, typeFeedBack, resetFeedback }: Props) {
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setFeedback(value);
  };

  const submit = async () => {
    const body = {
      comment: feedback,
      type: typeFeedBack,
      // screenshot: screenShot,
    };
    setLoading(true);
    await fetch('http://localhost:3001/feedback', {
      method: 'POST',
      body: JSON.stringify(body),
      // mode: 'no-cors',
    });
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrow} onPress={resetFeedback}>
          <ArrowLeft
            color={theme.colors.text_secondary}
            size={24}
            weight={'bold'}
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Image source={image} style={styles.image} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View />
      </View>
      <TextInput
        numberOfLines={5}
        value={feedback}
        onChange={onChange}
        style={styles.form}
      />
      <View style={styles.footer}>
        <SnapButton
          screenshot={'123'}
          setScreenshot={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Button onPress={submit} loading={loading} disabled={false}>
          <Text>Enviar feedback</Text>
        </Button>
      </View>
    </View>
  );
}
export default FeedbackForm;
