import React, { useCallback, useState } from 'react';
import {
  StyleProp,
  TextStyle,
  TextInput as ReactNativeTextInput,
} from 'react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function TextInput({
  value,
  onChangeText,
  // label,
  placeholder,
  theme,
  mode,
  style,
  multiline,
  numberOfLines,
}: {
  value: string;
  onChangeText: (text: string) => void;
  // label: string;
  placeholder?: string;
  theme: Theme;
  mode?: 'flat' | 'outlined';
  style?: StyleProp<TextStyle>;
  multiline?: boolean;
  numberOfLines?: number;
}) {
  const [isFocused, setIsFocused] = useState(false);

  const { colors } = theme;

  const styleButton = useCallback((): StyleProp<TextStyle> => {
    if (mode === 'outlined') {
      return {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        marginHorizontal: 16,
      };
    } else {
      return {
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        marginHorizontal: 16,
      };
    }
  }, [mode]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <ReactNativeTextInput
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      placeholderTextColor={colors.text_secondary}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={[
        styles.text,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderColor: isFocused ? colors.primary : colors.stroke,
          color: colors.text_primary,
          textAlignVertical: multiline ? 'top' : 'center',
        },
        styleButton(),
        style,
      ]}
    />
  );
}

export default withTheme(TextInput);
