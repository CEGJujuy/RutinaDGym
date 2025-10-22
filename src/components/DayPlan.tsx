import type { DayWorkout } from '../types';
import { getExerciseById } from '../data/exercises';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface DayPlanProps {
  dayWorkout: DayWorkout;
  routineId: string;
  dayIndex: number;
}

export default function DayPlan({ dayWorkout, routineId, dayIndex }: DayPlanProps) {
  const [completedExercises, setCompletedExercises] = useLocalStorage<Record<string, string[]>>(
    'completedExercises',
    {}
  );

  const todayKey = `${routineId}-${dayIndex}-${new Date().toISOString().split('T')[0]}`;
  const todayCompleted = completedExercises[todayKey] || [];

  const toggleExercise = (exerciseId: string) => {
    setCompletedExercises((prev) => {
      const updated = { ...prev };
      const current = updated[todayKey] || [];

      if (current.includes(exerciseId)) {
        updated[todayKey] = current.filter(id => id !== exerciseId);
      } else {
        updated[todayKey] = [...current, exerciseId];
      }

      return updated;
    });
  };

  const completionPercentage = Math.round((todayCompleted.length / dayWorkout.exercises.length) * 100);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {dayWorkout.day}
            </h2>
            <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
              {dayWorkout.focus}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {completionPercentage}%
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {todayCompleted.length}/{dayWorkout.exercises.length} completados
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-full transition-all duration-500 rounded-full"
            style={{ width: `${completionPercentage}%` }}
            role="progressbar"
            aria-valuenow={completionPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      <div className="space-y-4">
        {dayWorkout.exercises.map((exerciseData, idx) => {
          const exercise = getExerciseById(exerciseData.exerciseId);
          if (!exercise) return null;

          const isCompleted = todayCompleted.includes(exerciseData.exerciseId);

          return (
            <div
              key={`${exerciseData.exerciseId}-${idx}`}
              className={`border-2 rounded-lg p-4 transition-all duration-200 ${
                isCompleted
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <button
                      onClick={() => toggleExercise(exerciseData.exerciseId)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        isCompleted
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 dark:border-gray-600 hover:border-primary-500'
                      }`}
                      aria-label={`Marcar ${exercise.name} como ${isCompleted ? 'no completado' : 'completado'}`}
                    >
                      {isCompleted && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <h3 className={`text-lg font-bold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-900 dark:text-white'}`}>
                      {idx + 1}. {exercise.name}
                    </h3>
                  </div>

                  <div className="ml-9 grid grid-cols-3 gap-3 mb-2">
                    <div className="text-sm">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {exerciseData.sets} series
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {exerciseData.reps} reps
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {exerciseData.restSeconds}s descanso
                      </span>
                    </div>
                  </div>

                  {exerciseData.notes && (
                    <div className="ml-9 mt-2">
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        💡 {exerciseData.notes}
                      </p>
                    </div>
                  )}

                  <div className="ml-9 mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {exercise.technique}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {completionPercentage === 100 && (
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-lg text-center">
          <p className="text-lg font-bold text-green-800 dark:text-green-200">
            🎉 ¡Entrenamiento completado! Excelente trabajo
          </p>
        </div>
      )}
    </div>
  );
}
