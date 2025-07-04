# 🏠 Мини-CRM для управления объявлениями о недвижимости

Приложение для добавления, редактирования и удаления объявлений о недвижимости с использованием стека React + MobX + Node.js + PostgreSQL.

---

## 📆 Стек технологий

* **Frontend:**

  * React
  * MobX
  * Vite
  * mobx-react-lite
  * ReactDOM

* **Backend:**

  * Node.js
  * Express
  * PostgreSQL
  * Knex.js

---

## 📁 Структура проекта

```
project-root/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── backend/
│   ├── Controllers/
│   ├── Routes/
│   ├── Service/
│   ├── migrations/
│   ├── reposio/
│   ├── src/
│   ├── db.js
│   ├── knexfile.js
│   ├── .env
│   └── package.json
```

---

## ⚙️ Установка и запуск проекта

### 1. Клонирование репозитория

```bash
git clone https://github.com/GrigorjanArsen/Esoft-practice.git
cd ./Esoft-practice
```

### 2. Установка зависимостей

#### Frontend
    
```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

---

### 3. Настройка базы данных

* Установи PostgreSQL и создай базу данных (можно через pgAdmin).
* Заполни `.env` файл в `backend/`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=твой_пользователь
DB_PASSWORD=твой_пароль
DB_NAME=имя_бд
```

* Применение миграций:

```bash
npx knex migrate:latest --knexfile knexfile.js
```

---

### 4. Запуск проекта

#### Запуск backend:

```bash
cd backend
npm run dev
```

#### Запуск frontend:

```bash
cd frontend
npm run dev
```

---

## 🚀 Возможности

* 📄 Добавление, редактирование и удаление объявлений.
* 🔍 Фильтрация по городу и типу.
* ✅ Подтверждение при удалении.
* 🧐 Состояние управляется через MobX.
* ⚙️ Backend API на Express.
* 🗄️ Хранение данных в PostgreSQL.

---

## 📬 Автор

* GitHub: [GrigorjanArsen](https://github.com/GrigorjanArsen)

---

## 📝 Лицензия

Проект создан в образовательных целях. Использование по своему усмотрению.
