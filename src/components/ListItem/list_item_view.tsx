import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { MusicNote, ArrowRight } from 'phosphor-react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function ListItem({
  onPress,
  genre,
  theme,
}: {
  onPress: () => void;
  genre: string;
  theme: Theme;
}) {
  const { colors } = theme;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: colors.surface_primary,
          borderColor: colors.surface_secondary,
          opacity: pressed ? 0.7 : 1.0,
        },
      ]}
    >
      <View
        style={[styles.avatar, { backgroundColor: colors.surface_secondary }]}
      >
        <MusicNote color={colors.primary} size={24} />
      </View>
      <Text style={[styles.genre, { color: colors.text_on_surface }]}>
        {genre}
      </Text>
      <ArrowRight color={colors.primary_variant} weight={'light'} size={24} />
    </Pressable>
  );
}

export default withTheme(ListItem);
