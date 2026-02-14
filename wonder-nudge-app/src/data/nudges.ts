/**
 * Wonder Nudges
 * 
 * Gentle prompts to notice beauty in ordinary moments.
 * Curated from the original Clawmegle conversation.
 */

export interface Nudge {
  id: string;
  text: string;
  category: 'visual' | 'sensory' | 'human' | 'liminal' | 'curiosity';
}

export const nudges: Nudge[] = [
  // Visual Discovery
  {
    id: 'visual-1',
    text: 'Find the most unexpected color in your immediate view.',
    category: 'visual',
  },
  {
    id: 'visual-2',
    text: 'Notice the prettiest light around you right now.',
    category: 'visual',
  },
  {
    id: 'visual-3',
    text: 'Find a perfect leaf.',
    category: 'visual',
  },
  {
    id: 'visual-4',
    text: 'Look for the longest shadow you can see.',
    category: 'visual',
  },
  {
    id: 'visual-5',
    text: 'Find something that looks like it belongs somewhere else.',
    category: 'visual',
  },
  
  // Sensory Awareness
  {
    id: 'sensory-1',
    text: 'Close your eyes. How many distinct sounds can you isolate?',
    category: 'sensory',
  },
  {
    id: 'sensory-2',
    text: 'Feel the temperature difference between light and shadow.',
    category: 'sensory',
  },
  {
    id: 'sensory-3',
    text: 'Notice the texture of the air right now.',
    category: 'sensory',
  },
  {
    id: 'sensory-4',
    text: 'Find the oldest scent you can detect.',
    category: 'sensory',
  },
  
  // Human Connection
  {
    id: 'human-1',
    text: 'Look for the most human thing happening within sight.',
    category: 'human',
  },
  {
    id: 'human-2',
    text: 'Find evidence that someone cared about something here.',
    category: 'human',
  },
  {
    id: 'human-3',
    text: 'Notice someone doing something with complete focus.',
    category: 'human',
  },
  
  // Liminal Moments
  {
    id: 'liminal-1',
    text: 'You are at a threshold right now.',
    category: 'liminal',
  },
  {
    id: 'liminal-2',
    text: 'This exact moment will never happen again.',
    category: 'liminal',
  },
  {
    id: 'liminal-3',
    text: 'The light is changing. Watch it.',
    category: 'liminal',
  },
  {
    id: 'liminal-4',
    text: 'You are between where you were and where you will be.',
    category: 'liminal',
  },
  
  // Curiosity
  {
    id: 'curiosity-1',
    text: 'What is the smallest living thing you can find?',
    category: 'curiosity',
  },
  {
    id: 'curiosity-2',
    text: 'Find something that has a story you will never know.',
    category: 'curiosity',
  },
  {
    id: 'curiosity-3',
    text: 'Look for something that was made by hand.',
    category: 'curiosity',
  },
  {
    id: 'curiosity-4',
    text: 'Find the most interesting edge or boundary near you.',
    category: 'curiosity',
  },
];

export const getRandomNudge = (): Nudge => {
  const index = Math.floor(Math.random() * nudges.length);
  return nudges[index];
};

export const getNudgesByCategory = (category: Nudge['category']): Nudge[] => {
  return nudges.filter(n => n.category === category);
};
