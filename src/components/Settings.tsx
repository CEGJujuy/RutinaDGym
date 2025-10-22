import { useDarkMode } from '../hooks/useDarkMode';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Settings as SettingsType } from '../types';

export default function Settings() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [settings, setSettings] = useLocalStorage<SettingsType>('settings', {
    darkMode: false,
    language: 'es',
    units: 'metric',
    notifications: false
  });

  const handleToggle = (key: keyof SettingsType) => {
    if (key === 'darkMode') {
      toggleDarkMode();
      setSettings(prev => ({ ...prev, darkMode: !prev.darkMode }));
    } else if (key === 'notifications') {
      setSettings(prev => ({ ...prev, notifications: !prev.notifications }));
    }
  };

  const handleChange = (key: keyof SettingsType, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Configuración
        </h2>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Modo Oscuro
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Activa el tema oscuro para reducir la fatiga visual
              </p>
            </div>
            <button
              onClick={() => handleToggle('darkMode')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                darkMode ? 'bg-primary-600' : 'bg-gray-200'
              }`}
              role="switch"
              aria-checked={darkMode}
              aria-label="Alternar modo oscuro"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Idioma
            </h3>
            <select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Unidades
            </h3>
            <select
              value={settings.units}
              onChange={(e) => handleChange('units', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
            >
              <option value="metric">Métrico (kg, cm)</option>
              <option value="imperial">Imperial (lb, in)</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Notificaciones
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Recordatorios de entrenamiento (próximamente)
              </p>
            </div>
            <button
              onClick={() => handleToggle('notifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                settings.notifications ? 'bg-primary-600' : 'bg-gray-200'
              }`}
              role="switch"
              aria-checked={settings.notifications}
              aria-label="Alternar notificaciones"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Acerca de
          </h3>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>
              <strong>Versión:</strong> 1.0.0
            </p>
            <p>
              <strong>Almacenamiento:</strong> 100% local en tu navegador
            </p>
            <p className="text-xs mt-4">
              Todos tus datos se guardan únicamente en tu dispositivo. Ninguna información es enviada a servidores externos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
