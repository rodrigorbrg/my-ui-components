import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Pressable,
  ActivityIndicator,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function Button({
  onPress,
  children,
  color,
  mode,
  theme,
  style,
  loading,
  disabled,
}: {
  onPress: () => void;
  children: string;
  color?: 'primary' | 'secondary';
  mode?: 'full' | 'outlined' | 'text';
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
}) {
  const [textColor, setTextColor] = useState('#FFF');
  const [backgroundColor, setBackgroundColor] = useState(theme.colors.primary);
  const [borderColor, setBorderColor] = useState(theme.colors.primary);
  const [disableOpacity, setDisableOpacity] = useState(
    disabled ? { opacity: 0.5 } : { opacity: 1 }
  );
  const { colors } = theme;

  useEffect(() => {
    if (disabled) {
      setDisableOpacity({ opacity: 0.5 });
    } else {
      setDisableOpacity({ opacity: 1 });
    }
  }, [disabled]);

  useEffect(() => {
    let colorButton = colors.primary;
    switch (color) {
      case 'primary':
        colorButton = colors.primary;
        setBackgroundColor(colorButton);
        break;
      case 'secondary':
        colorButton = colors.surface_secondary;
        setBackgroundColor(colorButton);
        break;
      default:
        colorButton = colors.primary;
        setBackgroundColor(colorButton);
        break;
    }

    switch (mode) {
      case 'full':
        setBackgroundColor(colorButton);
        setBorderColor(colorButton);
        setTextColor('#FFF');
        break;
      case 'outlined':
        setBackgroundColor('transparent');
        setBorderColor(colorButton);
        setTextColor(colorButton);
        break;
      case 'text':
        setBackgroundColor('transparent');
        setBorderColor('transparent');
        setTextColor(colorButton);
        break;
      default:
        setBackgroundColor(colorButton);
        setBorderColor(colorButton);
        setTextColor('#FFF');
        break;
    }
  }, [color, mode, colors]);

  const styleButton = useCallback(
    (pressed: boolean = false) => {
      return {
        backgroundColor,
        borderColor,
        borderRadius: 6,
        borderWidth: 1,
        height: 40,
        opacity: pressed ? 0.7 : disableOpacity.opacity,
      };
    },
    [backgroundColor, borderColor, disableOpacity]
  );

  if (loading) {
    return (
      <View style={[styleButton(), styles.container, style]}>
        <ActivityIndicator size="small" color={textColor} />
      </View>
    );
  }

  return (
    <Pressable
      style={({ pressed }) => [
        disableOpacity,
        styleButton(pressed),
        styles.container,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </Pressable>
  );
}

export default withTheme(Button);
