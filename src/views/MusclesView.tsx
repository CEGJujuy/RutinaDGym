import { useState } from 'react';
import MuscleMap from '../components/MuscleMap';
import ExerciseCard from '../components/ExerciseCard';
import type { MuscleGroup, Exercise } from '../types';
import { getExercisesByMuscle } from '../data/exercises';

export default function MusclesView() {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | undefined>(undefined);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | undefined>(undefined);

  const exercises = selectedMuscle ? getExercisesByMuscle(selectedMuscle) : [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Grupos Musculares
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Selecciona un grupo muscular para ver ejercicios específicos
        </p>
      </div>

      <MuscleMap
        onMuscleSelect={setSelectedMuscle}
        selectedMuscle={selectedMuscle}
      />

      {selectedMuscle && exercises.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
            Ejercicios para {selectedMuscle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                onSelect={() => setSelectedExercise(exercise)}
                showDetails={false}
              />
            ))}
          </div>
        </div>
      )}

      {selectedExercise && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedExercise(undefined)}>
          <div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exercise-modal-title"
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
              <h2 id="exercise-modal-title" className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedExercise.name}
              </h2>
              <button
                onClick={() => setSelectedExercise(undefined)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <ExerciseCard exercise={selectedExercise} showDetails={true} />
            </div>
          </div>
        </div>
      )}

      {!selectedMuscle && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 dark:text-gray-400">
            👆 Selecciona un grupo muscular para comenzar
          </p>
        </div>
      )}
    </div>
  );
}
