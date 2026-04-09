# Мастер-класс по Искусственному Интеллекту

Красивый сайт с конспектами мастер-класса по ИИ, созданный с использованием React, TypeScript и Vite.

## 🚀 Развертывание на Vercel

### Подготовка проекта:

1. **Убедитесь, что все файлы в репозитории:**
   - `src/` - исходный код
   - `public/` - статические файлы (картинки, favicon)
   - `package.json` - зависимости
   - `vercel.json` - конфигурация для Vercel
   - `vite.config.ts` - конфигурация Vite

2. **Проверьте, что картинки находятся в папке `public/`:**
   - `memory1.png`
   - `memory2.png`

### Развертывание:

1. Подключите GitHub репозиторий к Vercel
2. Vercel автоматически обнаружит конфигурацию из `vercel.json`
3. Сайт будет доступен по сгенерированному URL

### Возможные проблемы и решения:

- **Ошибка сборки:** Убедитесь, что все зависимости установлены (`npm install`)
- **Картинки не загружаются:** Проверьте, что файлы находятся в папке `public/`
- **Пути к файлам:** Используйте `/filename` для файлов из `public/`

## 🛠 Технологии

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
