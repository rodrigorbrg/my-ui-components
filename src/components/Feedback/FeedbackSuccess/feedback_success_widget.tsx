import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function FeedbackSuccess({ reset }: { reset: () => void }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/success.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{'Agradecemos o feedback!'}</Text>
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.buttonTitle}>{'Quero enviar outro'}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default FeedbackSuccess;
