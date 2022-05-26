import React from 'react';
import {
  Image,
  Text,
  Pressable,
  PressableProps,
  ImageSourcePropType,
} from 'react-native';

import { withTheme, Theme } from '../../../context/ThemeProvider';
import styles from './styles';

interface Props extends PressableProps {
  theme: Theme;
  image: ImageSourcePropType;
  title: string;
  onPress?: () => void;
}

function Option({ theme, onPress, image, title, ...rest }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_secondary },
      ]}
      {...rest}
    >
      <Image source={image} style={styles.image} />
      <Text style={[styles.title, { color: theme.colors.text_on_surface }]}>
        {title}
      </Text>
    </Pressable>
  );
}
export default withTheme(Option);
