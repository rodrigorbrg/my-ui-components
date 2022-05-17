import React from 'react';
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function Avatar({
  img,
  label,
  onPress,
  theme,
}: {
  img?: ImageSourcePropType;
  label?: string;
  onPress: () => void;
  theme: Theme;
}) {
  const { colors } = theme;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {img ? (
        <Image
          source={img}
          style={[styles.avatar, { borderColor: colors.surface_secondary }]}
        />
      ) : (
        <View
          style={[
            styles.avatar,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              height: 40,
              width: 40,
              backgroundColor: colors.surface_secondary,
            },
          ]}
        />
      )}
      {label && (
        <Text
          style={[
            styles.label,
            {
              color: colors.text_on_background,
            },
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default withTheme(Avatar);
