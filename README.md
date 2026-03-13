# SmartEdu Assistant — Frontend

**SmartEdu Assistant** — это веб-инструмент для автоматизации проверки заданий по программированию. Фронтенд-часть приложения предоставляет удобный интерфейс для преподавателей: загрузка работ студентов, просмотр результатов тестирования, проверка на плагиат, выставление оценок и ведение журнала.

## Технологии

- React
- TypeScript
- React Router
- Axios
- Material UI
- ESLint + Prettier
- Stylelint
- Husky + lint-staged (pre-commit хуки)

## Требования

- Node.js 16+
- npm

## Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/SmartEdu-Assistant/Frontend.git

# Перейти в папку фронтенда
cd SmartEdu-Assistant/Frontend

# Установить зависимости
npm install

# Создать файл .env
cp .env.example .env

# Открыть .env и указать URL бэкенда
# REACT_APP_API_URL=http://localhost:8000

# Запустить
npm start
