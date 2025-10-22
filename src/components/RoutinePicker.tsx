import type { Routine, RoutineType } from '../types';
import { routines } from '../data/routines';

interface RoutinePickerProps {
  onSelectRoutine: (routine: Routine) => void;
  selectedRoutineId?: string;
}

const routineIcons: Record<RoutineType, string> = {
  bro_split: '💪',
  ppl: '🔄',
  full_body: '🎯',
  '5x5': '⚡',
  arnold_inspired: '🏆',
  custom: '✏️'
};

export default function RoutinePicker({ onSelectRoutine, selectedRoutineId }: RoutinePickerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {routines.map((routine) => (
        <div
          key={routine.id}
          onClick={() => onSelectRoutine(routine)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectRoutine(routine);
            }
          }}
          className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden ${
            selectedRoutineId === routine.id ? 'ring-4 ring-primary-500' : ''
          }`}
          role="button"
          tabIndex={0}
          aria-pressed={selectedRoutineId === routine.id}
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{routineIcons[routine.type]}</div>
              <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
                {routine.daysPerWeek} días/sem
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {routine.name}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {routine.description}
            </p>

            {routine.style && (
              <div className="mb-3 px-3 py-2 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                <p className="text-xs text-accent-700 dark:text-accent-300 italic">
                  {routine.style}
                </p>
              </div>
            )}

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                Progresión
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                {routine.progression}
              </p>
            </div>

            {routine.notes.length > 0 && (
              <div className="mt-4">
                <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  {routine.notes.slice(0, 2).map((note, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onSelectRoutine(routine);
              }}
            >
              Ver Detalles
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
