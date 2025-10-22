import Header from './components/Header';
import Home from './views/Home';
import MusclesView from './views/MusclesView';
import RoutinesView from './views/RoutinesView';
import SupplementsView from './views/SupplementsView';
import SettingsView from './views/SettingsView';
import { useLocalStorage } from './hooks/useLocalStorage';

type View = 'home' | 'muscles' | 'routines' | 'supplements' | 'settings';

function App() {
  const [currentView, setCurrentView] = useLocalStorage<View>('currentView', 'home');

  const handleNavigate = (view: string) => {
    setCurrentView(view as View);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'muscles':
        return <MusclesView />;
      case 'routines':
        return <RoutinesView />;
      case 'supplements':
        return <SupplementsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            FitTracker - Tu entrenador personal en el navegador | Todos los datos se guardan localmente
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
