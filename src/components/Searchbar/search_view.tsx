/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput as ReactNativeTextInput,
  View,
} from 'react-native';
import { MagnifyingGlass, ArrowRight } from 'phosphor-react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function Searchbar({
  value,
  onChange,
  placeholder,
  theme,
  mode,
  style,
  textStyle,
}: {
  value: string;
  onChange: (text: string) => void;
  // label: string;
  placeholder?: string;
  theme: Theme;
  mode?: 'flat' | 'outlined';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const onChangeSearch = (query: string) => onChange(query);

  const { colors } = theme;

  const styleButton = useCallback((): StyleProp<ViewStyle> => {
    if (mode === 'flat') {
      return {
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        marginHorizontal: 16,
      };
    } else {
      return {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
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
    <View
      style={[
        styles.container,
        styleButton(),
        {
          borderColor: isFocused ? colors.primary : colors.surface_secondary,
          backgroundColor: colors.background,
        },
        style,
      ]}
    >
      <MagnifyingGlass style={{ margin: 8 }} size={18} color={colors.primary} />
      <ReactNativeTextInput
        value={value}
        onChangeText={onChangeSearch}
        placeholder={placeholder}
        placeholderTextColor={colors.text_on_surface}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.text, textStyle]}
      />
      <ArrowRight style={{ margin: 8 }} size={18} color={colors.primary} />
    </View>
  );
}

export default withTheme(Searchbar);
