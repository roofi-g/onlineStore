# Интернет-магазин

Интернет-магазин на React с фильтрацией товаров, поиском и корзиной. Используется `json-server` для имитации backend-API.

## Возможности

- Просмотр каталога товаров
- Фильтрация и сортировка
- Хранение состояния через Redux
- Локальный сервер данных через json-server

## Технологии

- React
- Redux Toolkit
- TypeScript
- json-server
- Tailwind
- Vite

## Установка и запуск

### 1. Клонировать репозиторий
   ```bash
    git clone https://github.com/roofi-g/onlineStore.git
    cd vite-frontend
   ```
### 2. Установить зависимости
   ```bash
   npm install
   ```
### 3. Запустить frontend
   ```bash
   npm run dev
   ```
### 4. Запустить сервер данных (json-server)
   ```bash
   npm run server
   ```
## Конфигурация API

Frontend ожидает, что сервер запущен на:
```
   http://localhost:3005/
   ```
Пример структуры db.json:
```json
   {
      "products": [
        { "id": 101, "name": "Топ", "price": 5000, "discount": 25, "image": "/images/top.jpeg", "category_id": [1, 11], "create_at": "2025-10-09", "sizes": ["L"], "isHot": false},
        { "id": 102, "name": "Брюки", "price": 7000, "discount": 15, "image": "/images/trousers.png", "category_id": [1, 13], "create_at": "2025-10-10", "sizes": ["M", "L"], "isHot": true }
      ],
      "catalog": [
        { "id": 1, "name": "Одежда", "parentId": null },
        { "id": 2, "name": "Обувь", "parentId": null }
      ],
      "cart": [],
    }
 ```
## Структура проекта

  ```
server/                    
├── db.json       
vite-frontend/
├── src/
│   ├── components/              
│   │   └── header/
│   ├── features/
│   │   ├── catalog
│   │   │   ├── components/    
│   │   │   ├── filter/          
│   │   │   ├── hooks/
│   │   │   ├── sort/
│   │   │   └── utils/
│   │   └── products
│   ├── pages/
│   ├── routes/
│   ├── store/
│   └── types/
├── public/
│   ├── images/
├── package.json
├── README.md
└── .gitignore
```

## Скрипты
  ```bash
npm run dev         # Запуск Vite
npm run server      # Запуск json-server
npm run build       # Сборка проекта
   ```


## Стиль коммитов (Conventional Commits)

	•	feat: — новая функциональность
	•	fix: — исправление ошибки
	•	docs: — изменение документации
	•	refactor: — изменение кода без изменения функционала
	•	build: — зависимости / конфигурации сборки
	•	chore: — рутинные изменения без изменения функционала

  Пример:
  ```bash
   git commit -m 'feat: a hook for sorting products'
   ```

## Автор

Руфина
Email: roofi.g@yandex.ru
