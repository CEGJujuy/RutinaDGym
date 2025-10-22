import type { Goal } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface HomeProps {
  onNavigate: (view: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [selectedGoal, setSelectedGoal] = useLocalStorage<Goal>('selectedGoal', 'muscle_gain');

  const goals: Array<{ id: Goal; label: string; icon: string; description: string }> = [
    {
      id: 'muscle_gain',
      label: 'Ganar Músculo',
      icon: '💪',
      description: 'Incrementa masa muscular con rutinas de volumen'
    },
    {
      id: 'fat_loss',
      label: 'Pérdida de Grasa',
      icon: '🔥',
      description: 'Reduce grasa corporal manteniendo músculo'
    },
    {
      id: 'maintenance',
      label: 'Mantenimiento',
      icon: '⚖️',
      description: 'Mantén tu forma física actual'
    }
  ];

  const quickLinks = [
    { id: 'muscles', label: 'Grupos Musculares', icon: '💪', color: 'bg-red-500' },
    { id: 'routines', label: 'Rutinas Famosas', icon: '🏆', color: 'bg-blue-500' },
    { id: 'supplements', label: 'Suplementos', icon: '💊', color: 'bg-green-500' }
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          ¿Cuál es tu objetivo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal.id)}
              className={`p-6 rounded-xl transition-all duration-200 text-left ${
                selectedGoal === goal.id
                  ? 'bg-primary-600 text-white shadow-xl scale-105 ring-4 ring-primary-300'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg hover:scale-102'
              }`}
              aria-pressed={selectedGoal === goal.id}
            >
              <div className="text-5xl mb-4">{goal.icon}</div>
              <h3 className="text-xl font-bold mb-2">{goal.label}</h3>
              <p className={`text-sm ${selectedGoal === goal.id ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
                {goal.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Plan del Día</h2>
        <p className="text-lg mb-6">
          ¿Listo para entrenar hoy? Selecciona una rutina para comenzar tu entrenamiento.
        </p>
        <button
          onClick={() => onNavigate('routines')}
          className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Ver Rutinas
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Acceso Rápido
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`${link.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200`}
            >
              <div className="text-5xl mb-4">{link.icon}</div>
              <h3 className="text-xl font-bold">{link.label}</h3>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Bienvenido a FitTracker
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Tu aplicación completa de entrenamiento que funciona 100% en tu navegador.
            Sin necesidad de conexión a internet, sin cuentas, sin suscripciones.
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Rutinas predefinidas inspiradas en métodos comprobados</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Biblioteca completa de ejercicios con técnica y consejos</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Calculadora de suplementos personalizada</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Seguimiento de progreso guardado localmente</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
