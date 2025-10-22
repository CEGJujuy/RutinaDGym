import type { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  onSelect?: () => void;
  showDetails?: boolean;
}

export default function ExerciseCard({ exercise, onSelect, showDetails = false }: ExerciseCardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden ${onSelect ? 'cursor-pointer' : ''}`}
      onClick={onSelect}
      role={onSelect ? 'button' : 'article'}
      tabIndex={onSelect ? 0 : undefined}
      onKeyDown={(e) => {
        if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-label={`Ejercicio: ${exercise.name}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {exercise.name}
          </h3>
          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
            {exercise.muscleGroup}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {exercise.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-4 text-center">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{exercise.sets}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Series</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{exercise.reps}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Reps</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{exercise.restSeconds}s</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Descanso</div>
          </div>
        </div>

        {showDetails && (
          <>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Técnica</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{exercise.technique}</p>
            </div>

            {exercise.tempo && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tempo</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{exercise.tempo}</p>
              </div>
            )}

            {exercise.commonMistakes.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Errores Comunes
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {exercise.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exercise.variations.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Variantes</h4>
                <div className="flex flex-wrap gap-2">
                  {exercise.variations.map((variation, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {variation}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
