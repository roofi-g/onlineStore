# Интернет-магазин

Интернет-магазин на React с фильтрацией товаров, поиском и корзиной. Используется `json-server` для имитации backend-API.

## Возможности

- Просмотр каталога товаров
- Фильтрация и сортировка
- Добавление и удаление товара из корзины
- Динамическое обновление цен при изменении количества товаров
- Сохранение значения фильтрации и сортировки при обновлении страницы

## Особенности

- Хранение состояния через Redux
- Локальный сервер данных через json-server

## Технологии

- Язык программирования: TypeScript
- Библиотека: React
- State-management: Redux Toolkit / RTK Query
- Сервер: json-server
- Стили: Tailwind
- Сборщик проекта: Vite

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
        { "id": 101, "name": "Топ", "price": 5000, "calcDiscount": 25, "image": "/images/top.jpeg", "category_id": [1, 11], "create_at": "2025-10-09", "sizes": ["L"], "isHot": false},
        { "id": 102, "name": "Брюки", "price": 7000, "calcDiscount": 15, "image": "/images/trousers.png", "category_id": [1, 13], "create_at": "2025-10-10", "sizes": ["M", "L"], "isHot": true }
      ],
      "catalog": [
        { "id": 1, "name": "Одежда", "parentId": null },
        { "id": 13, "name": "Брюки", "parentId": 1 }
      ],
      "cart": [
         {
            "id": "3lqJXTZ9_TI",
            "productId": "104",
            "size": "M",
            "price": 3000,
            "discount": 25,
            "quantity": 1
         },
      ]
    }
 ```
## Структура проекта по архитектуре FSD (Feature-Sliced-Design)

  ```
server/                    
├── db.json       
|
vite-frontend/
├── src/
│   ├── app/     
│   │   ├── providers/
│   │   ├── store/         
│   │   └── main.tsx
|   |
│   ├── entities/
│   │   ├── cart
│   │   │   ├── api/    
│   │   │   ├── lib/          
│   │   │   ├── model/
│   │   │   ├── ui/
│   │   │   └── index.ts
│   │   ├── catalog
│   │   └── product
|   |
│   ├── features/
│   │   ├── catalog
│   │   │   ├── filter/    
│   │   │   ├── pagination/          
│   │   │   ├── search/
│   │   │   └── sort/
│   │   └── cart
|   |
│   ├── pages/
│   │   ├── home
│   │   │   └── HomePage.ts
│   │   ├── cart
│   │   └── catalog
|   |
│   ├── shared/
│   │   ├── model/       
│   │   └── ui/
|   |
│   └── widgets/
│   │   ├── cart/  
│   │   ├── header/       
│   │   └── footer/
|   |
├── public/
│   └── images/
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

Руфина - разработчик проекта <br />
Email: roofi.g@yandex.ru
