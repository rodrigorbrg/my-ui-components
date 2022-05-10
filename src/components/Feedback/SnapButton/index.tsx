import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';

import { withTheme, Theme } from '../../../context/ThemeProvider';
import styles from './styles';

interface Props {
  theme: Theme;
  screenshot?: string | null;
  setScreenshot: (base64: string | undefined) => void;
}

function SnapButton({ theme, screenshot, setScreenshot }: Props) {
  const snap = async () => {
    if (!screenshot) {
      const base64 = await captureScreen({
        format: 'jpg',
        quality: 0.8,
        result: 'data-uri',
      });
      setScreenshot(base64);
    } else {
      setScreenshot(undefined);
    }
  };
  return (
    <TouchableOpacity
      onPress={snap}
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_secondary },
      ]}
    >
      <Image
        source={{
          uri: `${screenshot}`,
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
export default withTheme(SnapButton);
