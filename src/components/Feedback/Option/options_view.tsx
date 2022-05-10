import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType,
} from 'react-native';

import { withTheme, Theme } from '../../../context/ThemeProvider';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  theme: Theme;
  image: ImageSourcePropType;
  title: string;
  onPress?: () => void;
}

function Option({ theme, onPress, image, title, ...rest }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_secondary },
      ]}
      {...rest}
    >
      <Image source={image} style={styles.image} />
      <Text style={[styles.title, { color: theme.colors.text_primary }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default withTheme(Option);
