import React, { useCallback, useRef, useMemo, useState } from 'react';
import { View, Pressable } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import FeedbackOptions from '../FeedbackOptions';
import FeedbackForm from '../FeedbackForm';
import FeedbackSuccess from '../FeedbackSuccess';
import { feedbackTypes } from '../../../utils/feedbackTypes';

import { withTheme, Theme } from '../../../context/ThemeProvider';
import styles from './styles';

export type FeedbackType = 'BUG' | 'IDEA' | 'OTHER' | null;

export interface FeedbackWidgetProps {
  theme: Theme;
  submitCallback?: (body: any) => Promise<void>;
  children: React.ReactNode | React.ReactNode[];
}
export interface FeedbackBody {
  comment: string;
  type: FeedbackType;
  screenshot?: string | undefined;
}

function FeedbackWidget({
  theme,
  submitCallback,
  children,
}: FeedbackWidgetProps) {
  const sheetRef = useRef<BottomSheet>(null);
  const [typeFeedBack, setTypeFeedback] = useState<FeedbackType>(null);
  const [done, setDone] = useState(false);
  const { colors } = theme;

  // variables
  const snapPoints = useMemo(() => [1, 270], []);

  const handleSheetOpen = useCallback(() => {
    sheetRef.current?.expand();
  }, []);

  const resetFeedback = () => {
    setDone(false);
    setTypeFeedback(null);
  };

  const setOptionFeedback = (type: FeedbackType) => {
    setTypeFeedback(type);
  };

  return (
    <View style={styles.container}>
      {children}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: colors.primary,
            opacity: pressed ? 0.7 : 1.0,
          },
        ]}
        onPress={handleSheetOpen}
      >
        <ChatTeardropDots
          color={colors.text_on_brand_color}
          weight={'bold'}
          size={24}
        />
      </Pressable>
      <BottomSheet
        index={0}
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={[
          styles.modal,
          { backgroundColor: colors.surface_primary },
        ]}
        handleIndicatorStyle={[
          styles.handle,
          { backgroundColor: colors.text_secondary },
        ]}
      >
        {!typeFeedBack ? (
          <FeedbackOptions setOptionFeedback={setOptionFeedback} />
        ) : done ? (
          <FeedbackSuccess reset={resetFeedback} />
        ) : (
          <FeedbackForm
            typeFeedBack={typeFeedBack}
            image={feedbackTypes[typeFeedBack].image}
            title={feedbackTypes[typeFeedBack].title}
            reset={resetFeedback}
            submitCallback={submitCallback}
            setDone={(send: boolean) => {
              setDone(send);
            }}
          />
        )}
      </BottomSheet>
    </View>
  );
}

export default gestureHandlerRootHOC(withTheme(FeedbackWidget));
