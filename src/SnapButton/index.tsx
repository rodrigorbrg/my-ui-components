import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Camera } from 'phosphor-react-native';

import styles from './styles';
import { theme } from '../theme';

interface Props {
  screenshot: string;
  setScreenshot: () => void;
}

function SnapButton({ screenshot, setScreenshot }: Props) {
  const snap = () => {
    setScreenshot();
  };
  return (
    <TouchableOpacity onPress={snap} style={styles.container}>
      <Image
        source={{
          uri: `data:image/png;base64,${screenshot}`,
        }}
        style={styles.image}
      />
      <Camera
        color={theme.colors.text_primary}
        size={24}
        style={styles.camera}
      />
    </TouchableOpacity>
  );
}
export default SnapButton;
