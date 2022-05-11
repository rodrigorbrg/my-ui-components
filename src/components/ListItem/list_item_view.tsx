import React from 'react';
import { Text, View } from 'react-native';
import { MusicNote, ArrowRight } from 'phosphor-react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function ListItem({
  genre,
  // icon,
  theme,
}: {
  genre: string;
  // icon: Image;
  theme: Theme;
}) {
  const { colors } = theme;
  return (
    <View style={[styles.container, { borderColor: colors.text_secondary }]}>
      <View
        style={[styles.avatar, { backgroundColor: colors.text_on_brand_color }]}
      >
        <MusicNote color={colors.primary} size={24} />
      </View>
      <Text style={[styles.genre, { color: colors.text_primary }]}>
        {genre}
      </Text>
      <ArrowRight
        color={colors.text_on_brand_color}
        weight={'bold'}
        size={24}
      />
    </View>
  );
}

export default withTheme(ListItem);
