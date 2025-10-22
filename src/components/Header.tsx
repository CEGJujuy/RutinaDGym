import { useDarkMode } from '../hooks/useDarkMode';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const navItems = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'muscles', label: 'Músculos', icon: '💪' },
    { id: 'routines', label: 'Rutinas', icon: '📋' },
    { id: 'supplements', label: 'Suplementos', icon: '💊' },
    { id: 'settings', label: 'Ajustes', icon: '⚙️' }
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              FitTracker
            </h1>
          </div>

          <nav className="hidden md:flex space-x-1" role="navigation" aria-label="Navegación principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentView === item.id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                aria-current={currentView === item.id ? 'page' : undefined}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Alternar modo oscuro"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <nav className="md:hidden pb-3 flex overflow-x-auto space-x-2" role="navigation" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                currentView === item.id
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700'
              }`}
              aria-current={currentView === item.id ? 'page' : undefined}
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
