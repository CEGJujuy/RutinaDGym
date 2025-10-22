import type { UserProfile, SupplementRecommendation } from '../types';

export const calculateSupplements = (profile: UserProfile): SupplementRecommendation[] => {
  const { weight, goal } = profile;
  const recommendations: SupplementRecommendation[] = [];

  const proteinMultiplier = goal === 'muscle_gain' ? 2.2 : goal === 'fat_loss' ? 2.0 : 1.8;
  const proteinGrams = Math.round(weight * proteinMultiplier * 10) / 10;

  recommendations.push({
    name: 'Proteína',
    dailyGrams: proteinGrams,
    timing: ['Post-entrenamiento', 'Entre comidas', 'Antes de dormir (opcional)'],
    notes: `Objetivo: ${proteinGrams}g/día (${proteinMultiplier}g/kg). Prioriza fuentes alimentarias, suplementa lo necesario.`
  });

  const creatineBase = 5;
  const creatineLoading = Math.round(weight * 0.3 * 10) / 10;

  recommendations.push({
    name: 'Creatina Monohidrato',
    dailyGrams: creatineBase,
    timing: ['Post-entrenamiento', 'Cualquier momento del día'],
    notes: `Mantenimiento: ${creatineBase}g/día. Opcional fase de carga: ${creatineLoading}g/día por 5-7 días.`
  });

  const hydration = Math.round(weight * 35 / 1000 * 10) / 10;

  recommendations.push({
    name: 'Hidratación',
    dailyGrams: hydration * 1000,
    timing: ['A lo largo del día', 'Durante entrenamiento', 'Post-entrenamiento'],
    notes: `Objetivo: ${hydration}L/día (30-35ml/kg). Aumenta en días de entrenamiento intenso.`
  });

  return recommendations;
};

export const getSupplementDisclaimer = (): string => {
  return 'La información proporcionada es de carácter educativo y no reemplaza el consejo médico profesional. Consulta con un profesional de la salud antes de iniciar cualquier suplementación.';
};
