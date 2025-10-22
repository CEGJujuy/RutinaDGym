# 💪 FitTracker - Tu Entrenador Personal en el Navegador

Aplicación web progresiva (PWA) de entrenamiento físico que funciona 100% en el navegador, sin necesidad de backend, base de datos externa ni conexión a internet. Todos los datos se almacenan localmente en tu dispositivo.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6.svg?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.15-38B2AC.svg?logo=tailwind-css)

## 🎯 Características Principales

### 📊 Dashboard Interactivo
- **Selector de Objetivos**: Elige entre ganar músculo, pérdida de grasa o mantenimiento
- **Plan del Día**: Visualización del entrenamiento diario con progreso en tiempo real
- **Accesos Rápidos**: Navegación intuitiva a todas las secciones de la aplicación

### 💪 Grupos Musculares
- **Mapa Muscular Interactivo**: SVG con zonas clicables para cada grupo muscular
- **6 Grupos Principales**: Pecho, Espalda, Piernas, Hombros, Brazos y Core
- **28 Ejercicios Detallados**: Cada ejercicio incluye:
  - Ilustración SVG
  - Descripción y técnica correcta
  - Series, repeticiones y tiempo de descanso recomendados
  - Errores comunes a evitar
  - Variantes y alternativas
  - Tempo de ejecución (cuando aplica)

### 📋 Rutinas Predefinidas
Rutinas basadas en métodos comprobados y estilos de entrenamiento populares:

1. **Bro Split (5 días)**: División clásica de un músculo por día
2. **Push/Pull/Legs (6 días)**: División por patrones de movimiento
3. **Full Body (3 días)**: Cuerpo completo, ideal para principiantes
4. **Programa 5x5**: Enfocado en fuerza con series de 5 repeticiones
5. **Estilo Arnold Schwarzenegger**: Alto volumen inspirado en la era dorada del culturismo

**Características de las rutinas:**
- Calendario semanal con ejercicios específicos
- Sistema de progresión detallado
- Notas de seguridad y recomendaciones
- Tracking de ejercicios completados con checkboxes
- Barra de progreso visual por sesión
- Historial guardado en localStorage

### 💊 Calculadora de Suplementos
Recomendaciones personalizadas basadas en tu perfil:

- **Perfil Personalizado**:
  - Sexo, peso, altura, edad
  - Nivel de experiencia (principiante, intermedio, avanzado)
  - Objetivo fitness

- **Recomendaciones**:
  - **Proteína**: 1.6-2.2 g/kg según objetivo
  - **Creatina**: 3-5g/día (con opción de fase de carga 0.3g/kg)
  - **Hidratación**: 30-35 ml/kg/día

- Horarios sugeridos de toma
- Disclaimer médico incluido

### ⚙️ Configuración
- **Modo Oscuro**: Toggle con persistencia en localStorage
- **Idioma**: Español/Inglés (preparado)
- **Unidades**: Sistema métrico o imperial
- **Notificaciones**: Preparado para recordatorios (próximamente)

## 🚀 Tecnologías Utilizadas

- **Frontend Framework**: React 19.1.1
- **Lenguaje**: TypeScript 5.9.3
- **Estilos**: TailwindCSS 4.1.15
- **Build Tool**: Vite 7.1.7
- **Linting**: ESLint 9.36.0
- **Almacenamiento**: localStorage API
- **Diseño**: Responsive (Mobile-first)

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── DayPlan.tsx     # Plan de entrenamiento diario
│   ├── ExerciseCard.tsx # Tarjeta de ejercicio
│   ├── Header.tsx      # Cabecera con navegación
│   ├── MuscleMap.tsx   # Mapa muscular interactivo
│   ├── RoutinePicker.tsx # Selector de rutinas
│   ├── Settings.tsx    # Panel de configuración
│   └── SupplementsCalculator.tsx # Calculadora
├── data/               # Datos estáticos
│   ├── exercises.ts    # Base de datos de ejercicios
│   └── routines.ts     # Rutinas predefinidas
├── hooks/              # Custom React Hooks
│   ├── useDarkMode.ts  # Hook para modo oscuro
│   └── useLocalStorage.ts # Hook para localStorage
├── types/              # Definiciones TypeScript
│   └── index.ts        # Interfaces y tipos
├── utils/              # Utilidades
│   └── supplements.ts  # Cálculos de suplementos
├── views/              # Vistas principales
│   ├── Home.tsx        # Dashboard principal
│   ├── MusclesView.tsx # Vista de músculos
│   ├── RoutinesView.tsx # Vista de rutinas
│   ├── SupplementsView.tsx # Vista de suplementos
│   └── SettingsView.tsx # Vista de configuración
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd fittracker

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run lint` - Ejecuta el linter
- `npm run preview` - Previsualiza el build de producción

## ✨ Características de Accesibilidad

- Etiquetas ARIA en todos los componentes interactivos
- Navegación completa por teclado
- Contraste AA cumplido
- Roles semánticos apropiados
- Focus visible en elementos interactivos
- Textos alternativos en elementos visuales

## 🎨 Diseño y UX

- **Interfaz Limpia**: Diseño moderno y minimalista
- **Colores Energéticos**: Paleta de azules y rojos con acentos
- **Responsive**: Funciona perfectamente en móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones y micro-interacciones
- **Modo Oscuro**: Protección visual para uso nocturno
- **Iconografía**: Emojis y SVGs para mejor comprensión visual

## 💾 Almacenamiento Local

Todos los datos se guardan en localStorage:
- Rutina seleccionada
- Perfil de usuario
- Configuración de la aplicación
- Historial de entrenamientos completados
- Progreso diario

**Privacidad**: Ningún dato sale de tu dispositivo. Sin servidores, sin tracking, sin cookies de terceros.

## 🔒 Seguridad y Privacidad

- ✅ Sin backend
- ✅ Sin base de datos externa
- ✅ Sin cookies de terceros
- ✅ Sin tracking
- ✅ 100% en el navegador
- ✅ Datos encriptados en localStorage

## 📱 Progressive Web App (Opcional)

La aplicación está preparada para funcionar como PWA:
- Instalable en dispositivos móviles
- Funciona sin conexión (después de la primera carga)
- Actualizaciones automáticas en segundo plano

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Desarrollador

**César Eduardo González**
- **Profesión**: Analista en Sistemas
- **Email**: gonzalezeduardo_31@hotmail.com
- **Celular**: +54 3884858907
- **LinkedIn**: [Perfil Profesional](https://linkedin.com)

---

## 🙏 Agradecimientos

- Inspirado en metodologías de entrenamiento de culturistas clásicos
- Datos de ejercicios basados en literatura científica del fitness
- Recomendaciones de suplementos según estudios publicados

## 📚 Referencias

- Creatina: [Examine.com Research](https://examine.com/supplements/creatine/)
- Proteína: Directrices de ISSN (International Society of Sports Nutrition)
- Rutinas: Basadas en programas probados por atletas profesionales

---

**Nota**: La información proporcionada es de carácter educativo y no reemplaza el consejo médico profesional. Consulta con un profesional de la salud antes de iniciar cualquier programa de entrenamiento o suplementación.

## 🔄 Actualizaciones Futuras

- [ ] Modo PWA completo con service worker
- [ ] Exportación de datos a PDF/PNG
- [ ] Gráficos de progreso a largo plazo
- [ ] Constructor de rutinas personalizadas con drag & drop
- [ ] Más idiomas (inglés, portugués)
- [ ] Calculadora de calorías y macros
- [ ] Timer integrado para descansos
- [ ] Notificaciones web para recordatorios

---

**¿Te gusta FitTracker?** Dale una ⭐ al repositorio y comparte con tus amigos fitness.
