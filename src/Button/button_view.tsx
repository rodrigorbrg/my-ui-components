import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator, Text } from 'react-native';

import { theme } from '../theme';
import styles from './styles';

export default function Button({
  onPress,
  children,
  color,
  mode,
  loading,
  disabled,
}: {
  onPress?: () => void;
  children: string;
  color?: 'primary' | 'secondary';
  mode?: 'full' | 'outlined' | 'text';
  loading?: boolean;
  disabled?: boolean;
}) {
  const [textColor, setTextColor] = useState('#FFF');
  const [backgroundColor, setBackgroundColor] = useState(theme.colors.brand);
  const [borderColor, setborderColor] = useState(theme.colors.brand);

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
        setborderColor(colorButton);
        setTextColor('#FFF');
        break;
      case 'outlined':
        setBackgroundColor('transparent');
        setborderColor(colorButton);
        setTextColor(colorButton);
        break;
      case 'text':
        setBackgroundColor('transparent');
        setborderColor('transparent');
        setTextColor(colorButton);
        break;
      default:
        setBackgroundColor(colorButton);
        setTextColor(colorButton);
        setTextColor('#FFF');
        break;
    }
  }, [backgroundColor, color, mode]);

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
      <View style={[styles.container, styleButton()]}>
        <ActivityIndicator size="small" color={textColor} />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.container, styleButton()]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}
