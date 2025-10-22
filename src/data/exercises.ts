import type { Exercise, MuscleGroup } from '../types';

export const exercises: Exercise[] = [
  {
    id: 'bench_press',
    name: 'Press de Banca',
    muscleGroup: 'chest',
    description: 'Ejercicio fundamental para el desarrollo del pecho',
    technique: 'Acostado en banco plano, baja la barra hasta el pecho medio y empuja hacia arriba manteniendo los omóplatos retraídos.',
    sets: 4,
    reps: '8-12',
    restSeconds: 90,
    tempo: '2-0-2-0',
    commonMistakes: [
      'Rebotar la barra en el pecho',
      'Arquear excesivamente la espalda',
      'No mantener los pies firmes en el suelo'
    ],
    variations: ['Press inclinado', 'Press declinado', 'Press con mancuernas']
  },
  {
    id: 'incline_press',
    name: 'Press Inclinado',
    muscleGroup: 'chest',
    description: 'Enfatiza la parte superior del pecho',
    technique: 'En banco inclinado 30-45°, baja la barra o mancuernas hacia la parte superior del pecho.',
    sets: 3,
    reps: '10-12',
    restSeconds: 75,
    commonMistakes: ['Inclinación excesiva del banco', 'Perder tensión en la parte superior'],
    variations: ['Con mancuernas', 'En máquina Smith']
  },
  {
    id: 'dumbbell_flyes',
    name: 'Aperturas con Mancuernas',
    muscleGroup: 'chest',
    description: 'Aislamiento del pecho con énfasis en el estiramiento',
    technique: 'Con brazos ligeramente flexionados, abre las mancuernas en arco amplio y contrae en el centro.',
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    commonMistakes: ['Bajar demasiado', 'Doblar excesivamente los codos'],
    variations: ['En banco inclinado', 'En polea']
  },
  {
    id: 'pushups',
    name: 'Flexiones',
    muscleGroup: 'chest',
    description: 'Ejercicio con peso corporal para pecho, hombros y tríceps',
    technique: 'Cuerpo recto, baja hasta que el pecho casi toque el suelo, empuja hacia arriba.',
    sets: 3,
    reps: '15-20',
    restSeconds: 60,
    commonMistakes: ['Caderas caídas', 'Rango incompleto'],
    variations: ['Declinadas', 'Diamante', 'Con palmada']
  },
  {
    id: 'deadlift',
    name: 'Peso Muerto',
    muscleGroup: 'back',
    description: 'Rey de los ejercicios para espalda y cadena posterior',
    technique: 'Pies al ancho de caderas, agarra la barra, mantén espalda recta y empuja con las piernas mientras extiendes la cadera.',
    sets: 4,
    reps: '5-8',
    restSeconds: 120,
    tempo: '1-0-2-0',
    commonMistakes: [
      'Redondear la espalda baja',
      'Tirar solo con los brazos',
      'No bloquear la cadera al final'
    ],
    variations: ['Rumano', 'Sumo', 'Con barra hexagonal']
  },
  {
    id: 'pull_ups',
    name: 'Dominadas',
    muscleGroup: 'back',
    description: 'Ejercicio compuesto para desarrollo de espalda y brazos',
    technique: 'Agarre prono más ancho que hombros, tira hasta que la barbilla supere la barra, baja controlado.',
    sets: 4,
    reps: '6-10',
    restSeconds: 90,
    commonMistakes: ['Usar impulso', 'Rango incompleto', 'No retraer escápulas'],
    variations: ['Supinas', 'Neutras', 'Lastradas']
  },
  {
    id: 'barbell_row',
    name: 'Remo con Barra',
    muscleGroup: 'back',
    description: 'Desarrollo de grosor en la espalda media',
    technique: 'Inclinado 45°, tira la barra hacia el abdomen bajo, aprieta omóplatos en la contracción.',
    sets: 4,
    reps: '8-12',
    restSeconds: 75,
    commonMistakes: ['Usar demasiado impulso', 'No mantener postura'],
    variations: ['Pendlay', 'Con mancuernas', 'En máquina']
  },
  {
    id: 'lat_pulldown',
    name: 'Jalón al Pecho',
    muscleGroup: 'back',
    description: 'Desarrollo de anchura de la espalda',
    technique: 'Agarre ancho, tira la barra hacia la parte superior del pecho, mantén el pecho hacia afuera.',
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    commonMistakes: ['Inclinarse demasiado atrás', 'Usar brazos en lugar de espalda'],
    variations: ['Agarre cerrado', 'Agarre neutral', 'A la nuca (avanzado)']
  },
  {
    id: 'squat',
    name: 'Sentadilla',
    muscleGroup: 'legs',
    description: 'Ejercicio fundamental para desarrollo de piernas',
    technique: 'Barra en trapecios, pies al ancho de hombros, baja hasta paralelo o más, empuja a través de talones.',
    sets: 4,
    reps: '8-12',
    restSeconds: 120,
    tempo: '2-0-1-0',
    commonMistakes: [
      'Rodillas hacia dentro',
      'No llegar a paralelo',
      'Despegar talones del suelo'
    ],
    variations: ['Frontal', 'Búlgara', 'Con mancuernas']
  },
  {
    id: 'leg_press',
    name: 'Prensa de Piernas',
    muscleGroup: 'legs',
    description: 'Ejercicio para cuádriceps con menor estrés en la espalda',
    technique: 'Pies al ancho de hombros en plataforma, baja controlado hasta 90° en rodillas, empuja.',
    sets: 3,
    reps: '10-15',
    restSeconds: 90,
    commonMistakes: ['Bloquear rodillas', 'Despegar glúteos del respaldo'],
    variations: ['Pies altos (glúteos)', 'Pies bajos (cuádriceps)', 'Una pierna']
  },
  {
    id: 'leg_curl',
    name: 'Curl Femoral',
    muscleGroup: 'legs',
    description: 'Aislamiento de isquiotibiales',
    technique: 'Acostado o sentado, flexiona las rodillas contra la resistencia, baja controlado.',
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    commonMistakes: ['Usar impulso', 'Arquear espalda'],
    variations: ['Acostado', 'Sentado', 'De pie']
  },
  {
    id: 'calf_raise',
    name: 'Elevación de Pantorrillas',
    muscleGroup: 'legs',
    description: 'Desarrollo de gemelos',
    technique: 'De pie con peso, eleva talones lo más alto posible, pausa arriba, baja controlado.',
    sets: 4,
    reps: '15-20',
    restSeconds: 45,
    commonMistakes: ['Rango parcial', 'Rebotar'],
    variations: ['Sentado', 'En prensa', 'Una pierna']
  },
  {
    id: 'overhead_press',
    name: 'Press Militar',
    muscleGroup: 'shoulders',
    description: 'Ejercicio principal para desarrollo de hombros',
    technique: 'De pie o sentado, empuja la barra desde los hombros por encima de la cabeza hasta extensión completa.',
    sets: 4,
    reps: '8-10',
    restSeconds: 90,
    tempo: '1-0-2-0',
    commonMistakes: [
      'Arquear excesivamente la espalda',
      'No lograr extensión completa',
      'Empujar hacia adelante en lugar de arriba'
    ],
    variations: ['Con mancuernas', 'Arnold press', 'Sentado']
  },
  {
    id: 'lateral_raise',
    name: 'Elevaciones Laterales',
    muscleGroup: 'shoulders',
    description: 'Aislamiento del deltoides lateral',
    technique: 'Brazos ligeramente flexionados, eleva mancuernas lateralmente hasta la altura de hombros.',
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    commonMistakes: ['Usar demasiado peso', 'Balanceo excesivo', 'Subir por encima de hombros'],
    variations: ['En polea', 'Inclinado', 'Con disco']
  },
  {
    id: 'front_raise',
    name: 'Elevaciones Frontales',
    muscleGroup: 'shoulders',
    description: 'Enfatiza el deltoides anterior',
    technique: 'Eleva mancuernas o barra al frente hasta altura de ojos, baja controlado.',
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    commonMistakes: ['Usar impulso', 'Elevar demasiado alto'],
    variations: ['Con barra', 'Alternadas', 'Con disco']
  },
  {
    id: 'rear_delt_fly',
    name: 'Pájaros para Deltoides Posterior',
    muscleGroup: 'shoulders',
    description: 'Aislamiento del deltoides posterior',
    technique: 'Inclinado o en banco, abre brazos en arco lateral manteniendo codos ligeramente flexionados.',
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    commonMistakes: ['Usar trapecios', 'Peso excesivo'],
    variations: ['En polea', 'En máquina', 'De pie']
  },
  {
    id: 'barbell_curl',
    name: 'Curl con Barra',
    muscleGroup: 'arms',
    description: 'Ejercicio principal para bíceps',
    technique: 'Codos pegados al torso, flexiona la barra hacia los hombros, baja controlado.',
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    commonMistakes: ['Balanceo del cuerpo', 'Mover los codos'],
    variations: ['Barra Z', 'Con mancuernas', '21s']
  },
  {
    id: 'hammer_curl',
    name: 'Curl Martillo',
    muscleGroup: 'arms',
    description: 'Desarrollo de bíceps y braquial',
    technique: 'Agarre neutral (palmas enfrentadas), flexiona mancuernas sin rotar las muñecas.',
    sets: 3,
    reps: '10-12',
    restSeconds: 60,
    commonMistakes: ['Rotar muñecas', 'Usar impulso'],
    variations: ['Alternado', 'En polea', 'En banco inclinado']
  },
  {
    id: 'tricep_dips',
    name: 'Fondos en Paralelas',
    muscleGroup: 'arms',
    description: 'Ejercicio compuesto para tríceps',
    technique: 'En barras paralelas, baja hasta 90° en codos, empuja hasta extensión completa.',
    sets: 3,
    reps: '8-12',
    restSeconds: 75,
    commonMistakes: ['Bajar demasiado', 'No extender completamente'],
    variations: ['Lastradas', 'En banco', 'Entre bancos']
  },
  {
    id: 'tricep_extension',
    name: 'Extensión de Tríceps',
    muscleGroup: 'arms',
    description: 'Aislamiento de tríceps',
    technique: 'Codos fijos arriba, extiende mancuerna o barra detrás de la cabeza.',
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    commonMistakes: ['Mover los codos', 'Arquear espalda'],
    variations: ['Con polea', 'Acostado (skullcrushers)', 'Con mancuerna']
  },
  {
    id: 'plank',
    name: 'Plancha',
    muscleGroup: 'core',
    description: 'Ejercicio isométrico para core completo',
    technique: 'Posición de flexión sobre antebrazos, mantén cuerpo recto, contrae abdomen.',
    sets: 3,
    reps: '30-60s',
    restSeconds: 60,
    commonMistakes: ['Caderas caídas', 'Glúteos arriba', 'No respirar'],
    variations: ['Lateral', 'Con elevación de pierna', 'RKC']
  },
  {
    id: 'crunches',
    name: 'Abdominales Crunch',
    muscleGroup: 'core',
    description: 'Aislamiento del recto abdominal',
    technique: 'Acostado, manos en pecho o cabeza, eleva hombros del suelo contrayendo abdomen.',
    sets: 3,
    reps: '15-20',
    restSeconds: 45,
    commonMistakes: ['Tirar del cuello', 'Usar impulso'],
    variations: ['En polea', 'En fitball', 'Bicicleta']
  },
  {
    id: 'leg_raises',
    name: 'Elevaciones de Piernas',
    muscleGroup: 'core',
    description: 'Enfatiza el abdomen inferior',
    technique: 'Colgado o acostado, eleva piernas rectas hasta 90°, baja controlado.',
    sets: 3,
    reps: '12-15',
    restSeconds: 60,
    commonMistakes: ['Usar impulso', 'Arquear espalda'],
    variations: ['Colgado', 'En banco declinado', 'Con flexión de rodillas']
  },
  {
    id: 'russian_twist',
    name: 'Giros Rusos',
    muscleGroup: 'core',
    description: 'Trabajo de oblicuos y rotación',
    technique: 'Sentado con pies elevados, rota torso de lado a lado tocando el suelo con peso.',
    sets: 3,
    reps: '20-30',
    restSeconds: 45,
    commonMistakes: ['Mover solo los brazos', 'Velocidad excesiva'],
    variations: ['Con disco', 'Con medicina ball', 'Pies en suelo']
  }
];

export const getExercisesByMuscle = (muscleGroup: MuscleGroup): Exercise[] => {
  return exercises.filter(ex => ex.muscleGroup === muscleGroup);
};

export const getExerciseById = (id: string): Exercise | undefined => {
  return exercises.find(ex => ex.id === id);
};
