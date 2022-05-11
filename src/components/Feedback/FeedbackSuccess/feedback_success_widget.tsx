import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { withTheme, Theme } from '../../../context/ThemeProvider';
import styles from './styles';

function FeedbackSuccess({
  theme,
  reset,
}: {
  theme: Theme;
  reset: () => void;
}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/success.png')}
        style={styles.image}
      />
      <Text style={[styles.title, { color: theme.colors.text_on_background }]}>
        {'Agradecemos o feedback!'}
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: theme.colors.surface_secondary },
        ]}
        onPress={reset}
      >
        <Text
          style={[
            styles.buttonTitle,
            { color: theme.colors.text_on_background },
          ]}
        >
          {'Quero enviar outro'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default withTheme(FeedbackSuccess);
