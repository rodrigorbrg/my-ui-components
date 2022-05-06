import React, { useCallback } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

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
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  mode?: 'full' | 'outlined' | 'text';
  loading?: boolean;
  disabled?: boolean;
}) {
  const styleButton = useCallback(() => {
    let backgroundColor = 'transparent';
    let borderColor = 'transparent';
    let textColor: string | null = null;

    switch (color) {
      case 'primary':
        backgroundColor = '#FF0000';
        break;
      case 'secondary':
        backgroundColor = '#00FF00';
        break;
      default:
        backgroundColor = '#00FF00';
        break;
    }

    switch (mode) {
      case 'full':
        backgroundColor = backgroundColor;
        borderColor = backgroundColor;
        textColor = '#FFF';
        break;
      case 'outlined':
        backgroundColor = 'transparent';
        borderColor = backgroundColor;
        textColor = backgroundColor;
        break;
      case 'text':
        backgroundColor = 'transparent';
        borderColor = '#FFF';
        textColor = backgroundColor;
        break;
      default:
        backgroundColor = backgroundColor;
        borderColor = backgroundColor;
        textColor = '#FFF';
        break;
    }

    //const childrenWithProps =
    React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        if (child?.props.style) {
          return React.cloneElement(child, {
            style: [...child?.props?.style, { color: textColor }],
          });
        } else {
          return React.cloneElement(child, {
            style: { color: textColor },
          });
        }
      }
      return child;
    });

    return {
      backgroundColor,
      borderColor,
      borderRadius: 6,
    };
  }, [children, color, mode]);

  if (loading) {
    return (
      <View style={[styles.container]}>
        <ActivityIndicator size="small" color={''} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styleButton()}
        onPress={onPress}
        disabled={disabled}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}
