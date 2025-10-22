import { useState } from 'react';
import type { UserProfile, Goal } from '../types';
import { calculateSupplements, getSupplementDisclaimer } from '../utils/supplements';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function SupplementsCalculator() {
  const [profile, setProfile] = useLocalStorage<UserProfile | null>('userProfile', null);
  const [showResults, setShowResults] = useState(false);

  const [formData, setFormData] = useState<UserProfile>(
    profile || {
      gender: 'male',
      weight: 70,
      height: 170,
      age: 25,
      activityLevel: 'intermediate',
      goal: 'muscle_gain'
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    setShowResults(true);
  };

  const handleChange = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const recommendations = profile ? calculateSupplements(profile) : [];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Calculadora de Suplementos
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Sexo
              </label>
              <select
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Edad (años)
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleChange('age', parseInt(e.target.value))}
                min="15"
                max="100"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Peso (kg)
              </label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => handleChange('weight', parseFloat(e.target.value))}
                min="40"
                max="200"
                step="0.1"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Estatura (cm)
              </label>
              <input
                type="number"
                value={formData.height}
                onChange={(e) => handleChange('height', parseInt(e.target.value))}
                min="140"
                max="230"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Nivel de Experiencia
              </label>
              <select
                value={formData.activityLevel}
                onChange={(e) => handleChange('activityLevel', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="beginner">Principiante</option>
                <option value="intermediate">Intermedio</option>
                <option value="advanced">Avanzado</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Objetivo
              </label>
              <select
                value={formData.goal}
                onChange={(e) => handleChange('goal', e.target.value as Goal)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                <option value="muscle_gain">Ganar Músculo</option>
                <option value="fat_loss">Pérdida de Grasa</option>
                <option value="maintenance">Mantenimiento</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Calcular Recomendaciones
          </button>
        </form>
      </div>

      {showResults && recommendations.length > 0 && (
        <>
          <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-500 rounded-xl p-4 mb-6">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              ⚠️ {getSupplementDisclaimer()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-primary-200 dark:border-primary-800"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {rec.name}
                </h3>

                <div className="mb-4">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {rec.dailyGrams < 10 ? rec.dailyGrams : Math.round(rec.dailyGrams)}
                    <span className="text-2xl ml-1">{rec.dailyGrams < 10 ? 'g' : rec.name === 'Hidratación' ? 'ml' : 'g'}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">por día</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Momento de toma
                  </h4>
                  <ul className="space-y-1">
                    {rec.timing.map((time, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="mr-2">•</span>
                        <span>{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {rec.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
