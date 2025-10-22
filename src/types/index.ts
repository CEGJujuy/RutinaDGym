export type MuscleGroup = 'chest' | 'back' | 'legs' | 'shoulders' | 'arms' | 'core';

export type Goal = 'muscle_gain' | 'fat_loss' | 'maintenance';

export type RoutineType = 'bro_split' | 'ppl' | 'full_body' | '5x5' | 'arnold_inspired' | 'custom';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  description: string;
  technique: string;
  sets: number;
  reps: string;
  restSeconds: number;
  tempo?: string;
  commonMistakes: string[];
  variations: string[];
  svgPath?: string;
}

export interface DayWorkout {
  day: string;
  focus: string;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: string;
    restSeconds: number;
    notes?: string;
  }[];
}

export interface Routine {
  id: string;
  name: string;
  type: RoutineType;
  description: string;
  daysPerWeek: number;
  schedule: DayWorkout[];
  progression: string;
  notes: string[];
  style?: string;
}

export interface UserProfile {
  gender: 'male' | 'female' | 'other';
  weight: number;
  height: number;
  age: number;
  activityLevel: 'beginner' | 'intermediate' | 'advanced';
  goal: Goal;
}

export interface SupplementRecommendation {
  name: string;
  dailyGrams: number;
  timing: string[];
  notes: string;
}

export interface Settings {
  darkMode: boolean;
  language: 'es' | 'en';
  units: 'metric' | 'imperial';
  notifications: boolean;
}

export interface WorkoutHistory {
  date: string;
  routineId: string;
  dayIndex: number;
  completedExercises: string[];
}
