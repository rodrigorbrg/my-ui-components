import React, { useCallback, useRef, useMemo, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import FeedbackOptions from '../FeedbackOptions';
import FeedbackForm from '../FeedbackForm';
import { feedbackTypes } from '../utils/feedbackTypes';
import { theme } from '../theme';
import styles from './styles';

export type FeedbackType = 'BUG' | 'IDEA' | 'OTHER' | null;

function FeedbackWidget() {
  const sheetRef = useRef<BottomSheet>(null);
  const [typeFeedBack, setTypeFeedback] = useState<FeedbackType>(null);
  const [done, setDone] = useState(false);

  // variables
  const snapPoints = useMemo(() => [1, 280], []);

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

  if (done) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.handle}
      >
        {!typeFeedBack ? (
          <FeedbackOptions setOptionFeedback={setOptionFeedback} />
        ) : (
          <FeedbackForm
            typeFeedBack={typeFeedBack}
            image={feedbackTypes[typeFeedBack].image}
            title={feedbackTypes[typeFeedBack].title}
            resetFeedback={resetFeedback}
          />
        )}
      </BottomSheet>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSheetOpen}
        activeOpacity={0.8}
      >
        <ChatTeardropDots
          color={theme.colors.text_on_brand_color}
          weight={'bold'}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}

export default gestureHandlerRootHOC(FeedbackWidget);
