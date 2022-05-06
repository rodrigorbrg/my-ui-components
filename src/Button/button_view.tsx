import React, { useCallback, useState } from 'react';
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
  const styleButton = useCallback(() => {
    let backgroundColor = 'transparent';
    let borderColor = 'transparent';

    switch (color) {
      case 'primary':
        backgroundColor = theme.colors.brand;
        break;
      case 'secondary':
        backgroundColor = theme.colors.surface_secondary;
        break;
      default:
        backgroundColor = theme.colors.brand;
        break;
    }

    switch (mode) {
      case 'full':
        backgroundColor = backgroundColor;
        borderColor = backgroundColor;
        // setTextColor('#FFF');
        break;
      case 'outlined':
        backgroundColor = 'transparent';
        borderColor = backgroundColor;
        // setTextColor(backgroundColor);
        break;
      case 'text':
        backgroundColor = 'transparent';
        borderColor = '#FFF';
        // setTextColor(backgroundColor);
        break;
      default:
        backgroundColor = backgroundColor;
        borderColor = backgroundColor;
        // setTextColor('#FFF');
        break;
    }

    return {
      backgroundColor,
      borderColor,
      borderRadius: 6,
      flex: 1,
      height: 40,
    };
  }, [color, mode]);

  if (loading) {
    return (
      <View style={[styles.container, styleButton()]}>
        <ActivityIndicator size="small" color={'#FFF'} />
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
