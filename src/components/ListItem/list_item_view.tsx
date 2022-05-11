import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MusicNote, ArrowRight } from 'phosphor-react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function ListItem({
  onPress,
  genre,
  // icon,
  theme,
}: {
  onPress: () => void;
  genre: string;
  // icon: Image;
  theme: Theme;
}) {
  const { colors } = theme;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.container,
        {
          backgroundColor: colors.surface_primary,
          borderColor: colors.text_on_surface,
        },
      ]}
    >
      <View
        style={[styles.avatar, { backgroundColor: colors.surface_secondary }]}
      >
        <MusicNote color={colors.primary} size={24} />
      </View>
      <Text style={[styles.genre, { color: colors.text_primary }]}>
        {genre}
      </Text>
      <ArrowRight color={colors.primary_variant} weight={'light'} size={24} />
    </TouchableOpacity>
  );
}

export default withTheme(ListItem);
