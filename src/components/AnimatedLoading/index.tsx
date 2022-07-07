import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function AnimatedLoading({ theme, size }: { theme: Theme; size: number }) {
  const progress = useRef(new Animated.Value(1)).current; // useSharedValue(0)
  const scale = useRef(new Animated.Value(1)).current;

  const { colors } = theme;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, {
            speed: 10,
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            speed: 10,
            toValue: 2,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            speed: 10,
            toValue: 3,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            speed: 10,
            toValue: 4,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            speed: 10,
            toValue: 5,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.spring(scale, {
            speed: 5,
            toValue: 2,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            speed: 5,
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            speed: 5,
            toValue: 2,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            speed: 5,
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(scale, {
            speed: 5,
            toValue: 0,
            useNativeDriver: true,
          }),
        ]),
      ]),
      { iterations: -1 }
    ).start();
  }, [progress, scale]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { backgroundColor: colors.primary, width: size, height: size },
          {
            borderRadius: /* progress.value * SIZE / 2 */ progress.interpolate({
              inputRange: [1, 2, 3, 4, 5],
              outputRange: [size / 6, size / 6, size / 6, size / 4, size / 2],
            }),
            // opacity: progress,
            transform: [
              { scale },
              {
                rotate: /* progress.value * 2 * Math.PI */ progress.interpolate(
                  {
                    inputRange: [1, 2, 3, 4, 5],
                    outputRange: [
                      '30deg',
                      '360deg',
                      '640deg',
                      '360deg',
                      '30deg',
                    ],
                  }
                ),
              },
            ],
          },
        ]}
      />
    </View>
  );
}

export default withTheme(AnimatedLoading);
