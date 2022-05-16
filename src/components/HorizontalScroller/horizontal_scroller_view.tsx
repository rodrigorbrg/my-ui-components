import React from 'react';
import {
  Animated,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './styles';

function HorizontalScroller({
  items,
  renderItens,
  style,
}: {
  items: any;
  renderItens: (info: ListRenderItemInfo<any>) => React.ReactElement;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Animated.FlatList
      keyExtractor={(item) => {
        return item.key;
      }}
      horizontal={true}
      snapToAlignment={'center'}
      style={[styles.container, style]}
      contentContainerStyle={styles.contentContainer}
      data={items}
      renderItem={renderItens}
    />
  );
}

export default HorizontalScroller;
