import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';

import styles from './styles';
import { theme } from '../theme';

interface Props {
  screenshot?: string | null;
  setScreenshot: (base64: string | null) => void;
}

function SnapButton({ screenshot, setScreenshot }: Props) {
  const snap = async () => {
    if (!screenshot) {
      const base64 = await captureScreen({
        format: 'jpg',
        quality: 0.8,
        result: 'data-uri',
      });
      setScreenshot(base64);
    } else {
      setScreenshot(null);
    }
  };
  return (
    <TouchableOpacity onPress={snap} style={styles.container}>
      <Image
        source={{
          uri: `data:image/png;base64,${screenshot}`,
        }}
        style={styles.container}
      />
      {!screenshot ? (
        <Camera
          color={theme.colors.text_primary}
          size={24}
          style={styles.camera}
        />
      ) : (
        <Trash
          color={theme.colors.text_primary}
          size={24}
          style={styles.trash}
        />
      )}
    </TouchableOpacity>
  );
}
export default SnapButton;
