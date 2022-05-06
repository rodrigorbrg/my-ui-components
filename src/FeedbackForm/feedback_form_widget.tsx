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
  const [screenshot, setScreenshot] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setFeedback(value);
  };

  const onPrintScreen = (base64: string) => {
    setScreenshot(base64);
  };

  const submit = async () => {
    const body = {
      comment: feedback,
      type: typeFeedBack,
      screenshot,
    };
    setLoading(true);
    try {
      await fetch('http://localhost:3001/feedback', {
        method: 'POST',
        body: JSON.stringify(body),
        // mode: 'no-cors',
      });
    } catch (e) {
      console.log(e);
    }
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
        <View style={styles.titleContainer}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
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
        <SnapButton screenshot={screenshot} setScreenshot={onPrintScreen} />
        <Button onPress={submit} loading={loading} disabled={false}>
          Enviar feedback
        </Button>
      </View>
    </View>
  );
}
export default FeedbackForm;
