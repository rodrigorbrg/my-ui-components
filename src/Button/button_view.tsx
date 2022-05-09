import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { theme } from '../theme';
import styles from './styles';

export default function Button({
  onPress,
  children,
  color,
  mode,
  style,
  loading,
  disabled,
}: {
  onPress?: () => void;
  children: string;
  color?: 'primary' | 'secondary';
  mode?: 'full' | 'outlined' | 'text';
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
}) {
  const [textColor, setTextColor] = useState('#FFF');
  const [backgroundColor, setBackgroundColor] = useState(theme.colors.brand);
  const [borderColor, setBorderColor] = useState(theme.colors.brand);
  const [opacity, setOpacity] = useState(
    disabled ? { opacity: 0.5 } : { opacity: 1 }
  );

  useEffect(() => {
    if (disabled) {
      setOpacity({ opacity: 1 });
    } else {
      setOpacity({ opacity: 0.5 });
    }
  }, [disabled]);

  useEffect(() => {
    let colorButton = theme.colors.brand;
    switch (color) {
      case 'primary':
        colorButton = theme.colors.brand;
        setBackgroundColor(colorButton);
        break;
      case 'secondary':
        colorButton = theme.colors.surface_secondary;
        setBackgroundColor(colorButton);
        break;
      default:
        colorButton = theme.colors.brand;
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
  }, [color, mode]);

  const styleButton = useCallback(() => {
    return {
      backgroundColor,
      borderColor,
      borderRadius: 6,
      borderWidth: 1,
      height: 40,
    };
  }, [backgroundColor, borderColor]);

  if (loading) {
    return (
      <View style={[styleButton(), styles.container, style]}>
        <ActivityIndicator size="small" color={textColor} />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styleButton(), styles.container, style, opacity]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}
