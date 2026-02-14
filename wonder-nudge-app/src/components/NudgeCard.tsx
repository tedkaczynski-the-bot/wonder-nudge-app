import React from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { colors, typography, spacing } from '../theme';
import type { Nudge } from '../data/nudges';

interface NudgeCardProps {
  nudge: Nudge;
  onNext?: () => void;
}

export const NudgeCard: React.FC<NudgeCardProps> = ({ nudge, onNext }) => {
  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  
  const handleNext = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
    
    setTimeout(() => onNext?.(), 200);
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>
          {nudge.category}
        </Text>
      </View>
      
      <Text style={styles.nudgeText}>
        {nudge.text}
      </Text>
      
      <Pressable 
        onPress={handleNext}
        style={({ pressed }) => [
          styles.nextButton,
          pressed && styles.nextButtonPressed,
        ]}
      >
        <Text style={styles.nextButtonText}>another</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  categoryContainer: {
    marginBottom: spacing.lg,
  },
  category: {
    ...typography.heading,
    color: colors.text.muted,
  },
  nudgeText: {
    ...typography.nudge,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.xxxl,
  },
  nextButton: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.atmosphere.cloud,
  },
  nextButtonPressed: {
    backgroundColor: colors.backgroundDim,
  },
  nextButtonText: {
    ...typography.action,
    color: colors.text.secondary,
  },
});
