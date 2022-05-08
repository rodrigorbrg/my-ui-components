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
import axios from 'axios';

import type { FeedbackType } from '../FeedbackWidget';
import Button from '../Button';
import SnapButton from '../SnapButton';
import styles from './styles';
import { theme } from '../theme';

interface Props {
  image: ImageSourcePropType;
  title: string;
  typeFeedBack: FeedbackType;
  reset: () => void;
  setDone: (send: boolean) => void;
}

function FeedbackForm({ image, title, typeFeedBack, reset, setDone }: Props) {
  const [feedback, setFeedback] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setFeedback(value);
  };

  const onPrintScreen = (base64: string | null) => {
    setScreenshot(base64);
  };

  const submit = async () => {
    const body = {
      comment: feedback,
      type: typeFeedBack,
      screenshot,
    };
    const defaultHeader = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const appAPI = axios.create({
      baseURL: 'https://widget-feedback-server-production-6d50.up.railway.app',
      timeout: 60000,
    });
    setLoading(true);
    try {
      await appAPI.post('/feedback', body, defaultHeader); // await fetch('http://localhost:3333/feedback', {
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
    setDone(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.arrow} onPress={reset}>
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
        multiline={true}
        numberOfLines={5}
        placeholderTextColor={theme.colors.text_secondary}
        value={feedback}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[
          styles.form,
          {
            borderColor: isFocused ? theme.colors.brand : theme.colors.stroke,
          },
        ]}
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
