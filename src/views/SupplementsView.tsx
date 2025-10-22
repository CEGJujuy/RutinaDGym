import SupplementsCalculator from '../components/SupplementsCalculator';

export default function SupplementsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Calculadora de Suplementos
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Obtén recomendaciones personalizadas basadas en tu perfil
        </p>
      </div>

      <SupplementsCalculator />

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Información sobre Suplementos
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="text-2xl mr-2">🥤</span>
              Proteína en Polvo
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              La proteína en polvo es un suplemento conveniente para alcanzar tus requerimientos diarios.
              Prioriza fuentes alimentarias como carne, pescado, huevos y lácteos. Usa suplementos solo
              para complementar cuando sea necesario.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="text-2xl mr-2">⚡</span>
              Creatina Monohidrato
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Uno de los suplementos más estudiados y efectivos. Mejora el rendimiento en ejercicios de
              alta intensidad y puede ayudar en la ganancia muscular. La dosis de mantenimiento es 3-5g/día.
              La fase de carga es opcional y consiste en 0.3g/kg durante 5-7 días.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <span className="text-2xl mr-2">💧</span>
              Hidratación
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mantener una hidratación adecuada es fundamental para el rendimiento y la recuperación.
              Apunta a 30-35ml por kg de peso corporal. Aumenta la ingesta en días de entrenamiento
              intenso o en climas cálidos.
            </p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
              💡 Consejo
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-300">
              Los suplementos son exactamente eso: suplementos. No reemplazan una dieta balanceada,
              entrenamiento consistente y descanso adecuado. Enfócate primero en los fundamentos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
