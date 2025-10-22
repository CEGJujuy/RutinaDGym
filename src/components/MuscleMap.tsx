import type { MuscleGroup } from '../types';

interface MuscleMapProps {
  onMuscleSelect: (muscle: MuscleGroup) => void;
  selectedMuscle?: MuscleGroup;
}

const muscleData: Array<{group: MuscleGroup; label: string; color: string}> = [
  { group: 'chest', label: 'Pecho', color: '#ef4444' },
  { group: 'shoulders', label: 'Hombros', color: '#f97316' },
  { group: 'arms', label: 'Brazos', color: '#eab308' },
  { group: 'back', label: 'Espalda', color: '#3b82f6' },
  { group: 'core', label: 'Core', color: '#8b5cf6' },
  { group: 'legs', label: 'Piernas', color: '#10b981' }
];

export default function MuscleMap({ onMuscleSelect, selectedMuscle }: MuscleMapProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        role="img"
        aria-label="Mapa muscular interactivo"
      >
        <g id="chest" onClick={() => onMuscleSelect('chest')} className="cursor-pointer">
          <rect x="330" y="140" width="140" height="80" fill={selectedMuscle === 'chest' ? '#dc2626' : '#ef4444'} opacity="0.7" rx="10" />
          <text x="400" y="185" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Pecho</text>
        </g>

        <g id="shoulders" onClick={() => onMuscleSelect('shoulders')} className="cursor-pointer">
          <rect x="270" y="120" width="50" height="60" fill={selectedMuscle === 'shoulders' ? '#ea580c' : '#f97316'} opacity="0.7" rx="8" />
          <rect x="480" y="120" width="50" height="60" fill={selectedMuscle === 'shoulders' ? '#ea580c' : '#f97316'} opacity="0.7" rx="8" />
          <text x="295" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Hombros</text>
        </g>

        <g id="arms" onClick={() => onMuscleSelect('arms')} className="cursor-pointer">
          <rect x="220" y="180" width="45" height="120" fill={selectedMuscle === 'arms' ? '#ca8a04' : '#eab308'} opacity="0.7" rx="8" />
          <rect x="535" y="180" width="45" height="120" fill={selectedMuscle === 'arms' ? '#ca8a04' : '#eab308'} opacity="0.7" rx="8" />
          <text x="242" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Brazos</text>
        </g>

        <g id="back" onClick={() => onMuscleSelect('back')} className="cursor-pointer">
          <rect x="330" y="230" width="140" height="120" fill={selectedMuscle === 'back' ? '#2563eb' : '#3b82f6'} opacity="0.7" rx="10" />
          <text x="400" y="295" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Espalda</text>
        </g>

        <g id="core" onClick={() => onMuscleSelect('core')} className="cursor-pointer">
          <rect x="350" y="360" width="100" height="80" fill={selectedMuscle === 'core' ? '#7c3aed' : '#8b5cf6'} opacity="0.7" rx="8" />
          <text x="400" y="405" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Core</text>
        </g>

        <g id="legs" onClick={() => onMuscleSelect('legs')} className="cursor-pointer">
          <rect x="340" y="450" width="55" height="130" fill={selectedMuscle === 'legs' ? '#059669' : '#10b981'} opacity="0.7" rx="8" />
          <rect x="405" y="450" width="55" height="130" fill={selectedMuscle === 'legs' ? '#059669' : '#10b981'} opacity="0.7" rx="8" />
          <text x="400" y="520" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Piernas</text>
        </g>
      </svg>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
        {muscleData.map(({ group, label, color }) => (
          <button
            key={group}
            onClick={() => onMuscleSelect(group)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              selectedMuscle === group
                ? 'ring-2 ring-offset-2 scale-105 shadow-lg'
                : 'hover:scale-105 hover:shadow-md'
            }`}
            style={{
              backgroundColor: color,
              color: 'white',
              opacity: selectedMuscle === group ? 1 : 0.85
            }}
            aria-pressed={selectedMuscle === group}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
