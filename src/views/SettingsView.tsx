import Settings from '../components/Settings';

export default function SettingsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Configuración
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Personaliza tu experiencia en FitTracker
        </p>
      </div>

      <Settings />
    </div>
  );
}
