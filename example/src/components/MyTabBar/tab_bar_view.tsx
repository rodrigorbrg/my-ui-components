import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Theme, withTheme } from 'widget-feedback';

import styles from './styles';

type TabBarProps = BottomTabBarProps & { theme: Theme };

function MyTabBar({ theme, state, descriptors, navigation }: TabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const { tabBarIcon } = options;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const colorIcon = isFocused
          ? theme.colors.text_primary
          : theme.colors.text_on_surface;

        const styleTab =
          index === 0
            ? styles.firstTab
            : index === state.routes.length - 1
            ? styles.lastTab
            : styles.middle;
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={0.9}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={[
              styles.tab,
              { backgroundColor: theme.colors.primary },
              styleTab,
            ]}
          >
            {tabBarIcon &&
              tabBarIcon({
                color: colorIcon,
                size: 22,
                focused: isFocused,
              })}
            <Text
              style={[
                styles.label,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  color: isFocused
                    ? theme.colors.text_primary
                    : theme.colors.text_on_surface,
                },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default withTheme(MyTabBar);
