import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType,
} from 'react-native';

import styles from './styles';

interface Props extends TouchableOpacityProps {
  image: ImageSourcePropType;
  title: string;
  onPress?: () => void;
}

function Option({ onPress, image, title, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} {...rest}>
      <Image
        source={image}
        // resizeMode={'center'}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
export default Option;
