import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';

import { withTheme, Theme } from '../../context/ThemeProvider';
import styles from './styles';

function AnimatedLoading({ theme, size }: { theme: Theme; size: number }) {
  const progress = useRef(new Animated.Value(0.2)).current; // useSharedValue(0)
  const scale = useRef(new Animated.Value(1)).current;

  const { colors } = theme;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, {
            speed: 60,
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            speed: 60,
            toValue: 0.8,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            speed: 60,
            toValue: 0.6,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            speed: 60,
            toValue: 0.4,
            useNativeDriver: true,
          }),
          Animated.spring(progress, {
            speed: 60,
            toValue: 0.2,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
          Animated.spring(scale, { toValue: 1.4, useNativeDriver: true }),
          Animated.spring(scale, { toValue: 1.6, useNativeDriver: true }),
          Animated.spring(scale, { toValue: 2, useNativeDriver: true }),
        ]),
      ]),
      { iterations: -1 }
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { backgroundColor: colors.primary, width: size, height: size },
          {
            borderRadius: /* progress.value * SIZE / 2 */ progress.interpolate({
              inputRange: [0.2, 0.4, 0.6, 0.8, 1],
              outputRange: [size / 2, size / 3, size / 4, size / 5, size / 6],
            }),
            // borderRadius: Animated.multiply(progress, SIZE / 2),
            opacity: progress,
            transform: [
              { scale },
              {
                rotate: /* progress.value * 2 * Math.PI */ progress.interpolate(
                  {
                    inputRange: [1.0, 1.4, 1.6, 2],
                    outputRange: [`30deg`, `60deg`, `90deg`, `120deg`],
                  }
                ),
              },
              // {
              //   rotate: Animated.multiply(progress, 2 * Math.PI),
              // },
            ],
          },
        ]}
      />
    </View>
  );
}

export default withTheme(AnimatedLoading);
