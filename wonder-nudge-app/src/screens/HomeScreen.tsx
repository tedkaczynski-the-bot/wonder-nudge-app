import React, { useState, useCallback } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { colors, spacing } from '../theme';
import { Header, NudgeCard } from '../components';
import { getRandomNudge, Nudge } from '../data/nudges';

export const HomeScreen: React.FC = () => {
  const [currentNudge, setCurrentNudge] = useState<Nudge>(() => getRandomNudge());
  
  const handleNextNudge = useCallback(() => {
    let next = getRandomNudge();
    // Ensure we don't show the same nudge twice in a row
    while (next.id === currentNudge.id) {
      next = getRandomNudge();
    }
    setCurrentNudge(next);
  }, [currentNudge.id]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      
      <Header />
      
      <View style={styles.content}>
        <NudgeCard 
          nudge={currentNudge} 
          onNext={handleNextNudge}
        />
      </View>
      
      <View style={styles.footer}>
        {/* Future: History or settings icons */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
});
