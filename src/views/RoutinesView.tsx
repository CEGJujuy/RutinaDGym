import { useState } from 'react';
import RoutinePicker from '../components/RoutinePicker';
import DayPlan from '../components/DayPlan';
import type { Routine } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function RoutinesView() {
  const [selectedRoutine, setSelectedRoutine] = useLocalStorage<Routine | null>('selectedRoutine', null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleSelectRoutine = (routine: Routine) => {
    setSelectedRoutine(routine);
    setSelectedDay(0);
    setShowDetails(true);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Rutinas de Entrenamiento
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Selecciona una rutina basada en tus objetivos y disponibilidad
        </p>
      </div>

      {!showDetails && (
        <RoutinePicker
          onSelectRoutine={handleSelectRoutine}
          selectedRoutineId={selectedRoutine?.id}
        />
      )}

      {showDetails && selectedRoutine && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowDetails(false)}
              className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
            >
              ← Volver a rutinas
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedRoutine.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedRoutine.description}
                </p>
              </div>
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-semibold rounded-full">
                {selectedRoutine.daysPerWeek} días/semana
              </span>
            </div>

            {selectedRoutine.style && (
              <div className="mb-6 p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg border-l-4 border-accent-500">
                <p className="text-sm text-accent-700 dark:text-accent-300 italic">
                  {selectedRoutine.style}
                </p>
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Progresión
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {selectedRoutine.progression}
              </p>
            </div>

            {selectedRoutine.notes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Notas Importantes
                </h3>
                <ul className="space-y-2">
                  {selectedRoutine.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="mr-2">✓</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Calendario de Entrenamiento
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-4">
              {selectedRoutine.schedule.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDay(idx)}
                  className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    selectedDay === idx
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-sm">{day.day}</div>
                  <div className="text-xs opacity-75">{day.focus}</div>
                </button>
              ))}
            </div>
          </div>

          {selectedRoutine.schedule[selectedDay] && (
            <DayPlan
              dayWorkout={selectedRoutine.schedule[selectedDay]}
              routineId={selectedRoutine.id}
              dayIndex={selectedDay}
            />
          )}
        </div>
      )}
    </div>
  );
}
