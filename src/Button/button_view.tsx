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
    switch (color) {
      case 'primary':
        setBackgroundColor(theme.colors.brand);
        break;
      case 'secondary':
        setBackgroundColor(theme.colors.surface_secondary);
        break;
      default:
        setBackgroundColor(theme.colors.brand);
        break;
    }

    switch (mode) {
      case 'full':
        setBackgroundColor(backgroundColor);
        setborderColor(backgroundColor);
        setTextColor('#FFF');
        break;
      case 'outlined':
        setBackgroundColor('transparent');
        setborderColor(backgroundColor);
        setTextColor(backgroundColor);
        break;
      case 'text':
        setBackgroundColor('transparent');
        setborderColor('#FFF');
        setTextColor(backgroundColor);
        break;
      default:
        setBackgroundColor(backgroundColor);
        setTextColor(backgroundColor);
        setTextColor('#FFF');
        break;
    }
  }, [backgroundColor, color, mode]);

  const styleButton = useCallback(() => {
    return {
      backgroundColor,
      borderColor,
      borderRadius: 6,
      flex: 1,
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
