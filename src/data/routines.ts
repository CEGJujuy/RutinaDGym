import type { Routine } from '../types';

export const routines: Routine[] = [
  {
    id: 'bro_split',
    name: 'Bro Split (5 días)',
    type: 'bro_split',
    description: 'División clásica de un músculo por día para máximo volumen',
    daysPerWeek: 5,
    schedule: [
      {
        day: 'Lunes',
        focus: 'Pecho',
        exercises: [
          { exerciseId: 'bench_press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'incline_press', sets: 3, reps: '10-12', restSeconds: 75 },
          { exerciseId: 'dumbbell_flyes', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'pushups', sets: 3, reps: 'al fallo', restSeconds: 60 }
        ]
      },
      {
        day: 'Martes',
        focus: 'Espalda',
        exercises: [
          { exerciseId: 'deadlift', sets: 4, reps: '5-8', restSeconds: 120 },
          { exerciseId: 'pull_ups', sets: 4, reps: '6-10', restSeconds: 90 },
          { exerciseId: 'barbell_row', sets: 4, reps: '8-12', restSeconds: 75 },
          { exerciseId: 'lat_pulldown', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 'Miércoles',
        focus: 'Hombros',
        exercises: [
          { exerciseId: 'overhead_press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'lateral_raise', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'front_raise', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'rear_delt_fly', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 'Jueves',
        focus: 'Brazos',
        exercises: [
          { exerciseId: 'barbell_curl', sets: 4, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'tricep_dips', sets: 4, reps: '8-12', restSeconds: 75 },
          { exerciseId: 'hammer_curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'tricep_extension', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 'Viernes',
        focus: 'Piernas',
        exercises: [
          { exerciseId: 'squat', sets: 4, reps: '8-12', restSeconds: 120 },
          { exerciseId: 'leg_press', sets: 3, reps: '10-15', restSeconds: 90 },
          { exerciseId: 'leg_curl', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'calf_raise', sets: 4, reps: '15-20', restSeconds: 45 }
        ]
      }
    ],
    progression: 'Incrementa peso +2.5% cuando logres la parte alta del rango de repeticiones',
    notes: [
      'Ideal para intermedios y avanzados',
      'Permite alto volumen por grupo muscular',
      'Requiere buena recuperación',
      'Fin de semana: descanso o cardio ligero'
    ]
  },
  {
    id: 'ppl',
    name: 'Push/Pull/Legs',
    type: 'ppl',
    description: 'División por patrones de movimiento, ideal para frecuencia 2x por semana',
    daysPerWeek: 6,
    schedule: [
      {
        day: 'Día 1',
        focus: 'Push (Empuje)',
        exercises: [
          { exerciseId: 'bench_press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'overhead_press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'incline_press', sets: 3, reps: '10-12', restSeconds: 75 },
          { exerciseId: 'lateral_raise', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'tricep_extension', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 'Día 2',
        focus: 'Pull (Tracción)',
        exercises: [
          { exerciseId: 'deadlift', sets: 3, reps: '5-8', restSeconds: 120 },
          { exerciseId: 'pull_ups', sets: 4, reps: '6-10', restSeconds: 90 },
          { exerciseId: 'barbell_row', sets: 4, reps: '8-12', restSeconds: 75 },
          { exerciseId: 'barbell_curl', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'hammer_curl', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 'Día 3',
        focus: 'Legs (Piernas)',
        exercises: [
          { exerciseId: 'squat', sets: 4, reps: '8-12', restSeconds: 120 },
          { exerciseId: 'leg_press', sets: 3, reps: '10-15', restSeconds: 90 },
          { exerciseId: 'leg_curl', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'calf_raise', sets: 4, reps: '15-20', restSeconds: 45 },
          { exerciseId: 'plank', sets: 3, reps: '45-60s', restSeconds: 60 }
        ]
      },
      {
        day: 'Día 4',
        focus: 'Push (Empuje)',
        exercises: [
          { exerciseId: 'incline_press', sets: 4, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'overhead_press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'dumbbell_flyes', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'front_raise', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'tricep_dips', sets: 3, reps: '8-12', restSeconds: 75 }
        ]
      },
      {
        day: 'Día 5',
        focus: 'Pull (Tracción)',
        exercises: [
          { exerciseId: 'barbell_row', sets: 4, reps: '8-12', restSeconds: 75 },
          { exerciseId: 'lat_pulldown', sets: 4, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'pull_ups', sets: 3, reps: 'al fallo', restSeconds: 90 },
          { exerciseId: 'rear_delt_fly', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'barbell_curl', sets: 3, reps: '10-12', restSeconds: 60 }
        ]
      },
      {
        day: 'Día 6',
        focus: 'Legs (Piernas)',
        exercises: [
          { exerciseId: 'deadlift', sets: 3, reps: '5-8', restSeconds: 120 },
          { exerciseId: 'squat', sets: 3, reps: '10-12', restSeconds: 120 },
          { exerciseId: 'leg_press', sets: 3, reps: '12-15', restSeconds: 90 },
          { exerciseId: 'calf_raise', sets: 4, reps: '15-20', restSeconds: 45 },
          { exerciseId: 'leg_raises', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      }
    ],
    progression: 'Incrementa peso +2.5kg cuando completes todas las series en el rango alto',
    notes: [
      'Excelente para intermedios',
      'Frecuencia 2x por semana por músculo',
      'Un día de descanso por semana',
      'Permite buen balance volumen/recuperación'
    ]
  },
  {
    id: 'full_body',
    name: 'Full Body (3 días)',
    type: 'full_body',
    description: 'Cuerpo completo cada sesión, ideal para principiantes y mantenimiento',
    daysPerWeek: 3,
    schedule: [
      {
        day: 'Lunes',
        focus: 'Cuerpo Completo A',
        exercises: [
          { exerciseId: 'squat', sets: 3, reps: '8-10', restSeconds: 120 },
          { exerciseId: 'bench_press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'barbell_row', sets: 3, reps: '8-10', restSeconds: 75 },
          { exerciseId: 'overhead_press', sets: 2, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'plank', sets: 3, reps: '45s', restSeconds: 60 }
        ]
      },
      {
        day: 'Miércoles',
        focus: 'Cuerpo Completo B',
        exercises: [
          { exerciseId: 'deadlift', sets: 3, reps: '5-8', restSeconds: 120 },
          { exerciseId: 'incline_press', sets: 3, reps: '10-12', restSeconds: 75 },
          { exerciseId: 'pull_ups', sets: 3, reps: '6-10', restSeconds: 90 },
          { exerciseId: 'lateral_raise', sets: 3, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'crunches', sets: 3, reps: '15-20', restSeconds: 45 }
        ]
      },
      {
        day: 'Viernes',
        focus: 'Cuerpo Completo C',
        exercises: [
          { exerciseId: 'leg_press', sets: 3, reps: '10-12', restSeconds: 90 },
          { exerciseId: 'bench_press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'lat_pulldown', sets: 3, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'overhead_press', sets: 3, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'leg_raises', sets: 3, reps: '12-15', restSeconds: 60 }
        ]
      }
    ],
    progression: 'Incrementa peso +2.5kg cada 2 semanas manteniendo la forma correcta',
    notes: [
      'Perfecto para principiantes',
      'Menos tiempo en el gimnasio',
      'Buena frecuencia por músculo (3x/semana)',
      'Énfasis en movimientos compuestos'
    ]
  },
  {
    id: '5x5',
    name: 'Programa 5x5',
    type: '5x5',
    description: 'Fuerza y tamaño con series de 5 repeticiones en ejercicios básicos',
    daysPerWeek: 3,
    schedule: [
      {
        day: 'Día A',
        focus: 'Fuerza A',
        exercises: [
          { exerciseId: 'squat', sets: 5, reps: '5', restSeconds: 180 },
          { exerciseId: 'bench_press', sets: 5, reps: '5', restSeconds: 180 },
          { exerciseId: 'barbell_row', sets: 5, reps: '5', restSeconds: 180 }
        ]
      },
      {
        day: 'Día B',
        focus: 'Fuerza B',
        exercises: [
          { exerciseId: 'squat', sets: 5, reps: '5', restSeconds: 180 },
          { exerciseId: 'overhead_press', sets: 5, reps: '5', restSeconds: 180 },
          { exerciseId: 'deadlift', sets: 1, reps: '5', restSeconds: 240 }
        ]
      },
      {
        day: 'Día A',
        focus: 'Fuerza A',
        exercises: [
          { exerciseId: 'squat', sets: 5, reps: '5', restSeconds: 180 },
          { exerciseId: 'bench_press', sets: 5, reps: '5', restSeconds: 180 },
          { exerciseId: 'barbell_row', sets: 5, reps: '5', restSeconds: 180 }
        ]
      }
    ],
    progression: 'Incrementa +2.5kg cada sesión. Si fallas, repite el peso. Tres fallos seguidos: reduce 10%',
    notes: [
      'Alterna A-B-A una semana, B-A-B la siguiente',
      'Enfoque en fuerza',
      'Simple pero muy efectivo',
      'No añadas ejercicios adicionales al inicio'
    ]
  },
  {
    id: 'arnold_inspired',
    name: 'Estilo Arnold Schwarzenegger',
    type: 'arnold_inspired',
    description: 'Volumen alto inspirado en el estilo clásico de culturismo de Arnold',
    daysPerWeek: 6,
    style: 'Inspirado en métodos de entrenamiento de la era dorada del culturismo',
    schedule: [
      {
        day: 'Lunes',
        focus: 'Pecho y Espalda',
        exercises: [
          { exerciseId: 'bench_press', sets: 5, reps: '8-10', restSeconds: 75, notes: 'Superserie con Barbell Row' },
          { exerciseId: 'barbell_row', sets: 5, reps: '8-10', restSeconds: 75 },
          { exerciseId: 'incline_press', sets: 4, reps: '10-12', restSeconds: 60, notes: 'Superserie con Pull-ups' },
          { exerciseId: 'pull_ups', sets: 4, reps: '8-10', restSeconds: 60 },
          { exerciseId: 'dumbbell_flyes', sets: 4, reps: '12', restSeconds: 60, notes: 'Superserie con Lat Pulldown' },
          { exerciseId: 'lat_pulldown', sets: 4, reps: '12', restSeconds: 60 }
        ]
      },
      {
        day: 'Martes',
        focus: 'Hombros y Brazos',
        exercises: [
          { exerciseId: 'overhead_press', sets: 5, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'lateral_raise', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'barbell_curl', sets: 5, reps: '8-10', restSeconds: 60, notes: 'Superserie con Tricep Dips' },
          { exerciseId: 'tricep_dips', sets: 5, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'hammer_curl', sets: 4, reps: '10-12', restSeconds: 60 },
          { exerciseId: 'tricep_extension', sets: 4, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 'Miércoles',
        focus: 'Piernas',
        exercises: [
          { exerciseId: 'squat', sets: 5, reps: '8-10', restSeconds: 120 },
          { exerciseId: 'leg_press', sets: 4, reps: '12-15', restSeconds: 90 },
          { exerciseId: 'leg_curl', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'deadlift', sets: 3, reps: '8-10', restSeconds: 120 },
          { exerciseId: 'calf_raise', sets: 5, reps: '15-20', restSeconds: 45 }
        ]
      },
      {
        day: 'Jueves',
        focus: 'Pecho y Espalda',
        exercises: [
          { exerciseId: 'incline_press', sets: 5, reps: '8-10', restSeconds: 75, notes: 'Superserie con Barbell Row' },
          { exerciseId: 'barbell_row', sets: 5, reps: '8-10', restSeconds: 75 },
          { exerciseId: 'bench_press', sets: 4, reps: '10-12', restSeconds: 60, notes: 'Superserie con Pull-ups' },
          { exerciseId: 'pull_ups', sets: 4, reps: '8-10', restSeconds: 60 },
          { exerciseId: 'pushups', sets: 4, reps: 'al fallo', restSeconds: 60, notes: 'Superserie con Lat Pulldown' },
          { exerciseId: 'lat_pulldown', sets: 4, reps: '12', restSeconds: 60 }
        ]
      },
      {
        day: 'Viernes',
        focus: 'Hombros y Brazos',
        exercises: [
          { exerciseId: 'overhead_press', sets: 5, reps: '8-10', restSeconds: 90 },
          { exerciseId: 'front_raise', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'rear_delt_fly', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'barbell_curl', sets: 5, reps: '8-10', restSeconds: 60 },
          { exerciseId: 'tricep_extension', sets: 5, reps: '12-15', restSeconds: 60 }
        ]
      },
      {
        day: 'Sábado',
        focus: 'Piernas',
        exercises: [
          { exerciseId: 'deadlift', sets: 4, reps: '6-8', restSeconds: 120 },
          { exerciseId: 'squat', sets: 4, reps: '10-12', restSeconds: 120 },
          { exerciseId: 'leg_press', sets: 4, reps: '15-20', restSeconds: 90 },
          { exerciseId: 'leg_curl', sets: 4, reps: '12-15', restSeconds: 60 },
          { exerciseId: 'calf_raise', sets: 5, reps: '20-25', restSeconds: 45 }
        ]
      }
    ],
    progression: 'Incrementa peso gradualmente. Enfócate en la conexión mente-músculo y contracción máxima',
    notes: [
      'Alto volumen - requiere experiencia',
      'Uso extensivo de superseries',
      'Frecuencia 2x por semana por músculo',
      'Énfasis en la forma y contracción',
      'Inspirado en técnicas clásicas, no programa oficial'
    ]
  }
];

export const getRoutineById = (id: string): Routine | undefined => {
  return routines.find(r => r.id === id);
};
