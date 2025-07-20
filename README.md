# 📘 HW6: Маршрутизація в React з використанням React Router

Цей проект демонструє створення вебзастосунку на React із реалізацією маршрутизації за допомогою бібліотеки `react-router`.

## ⚙️ Ініціалізація проєкту

1. Створіть новий React-проєкт за допомогою Vite:
npm create vite@latest hw6-react-router-app -- --template react

2. Перейдіть до каталогу проєкту:
cd hw6-react-router-app

3. Встановіть залежності:
npm install
npm install react-router

4. Запустіть проєкт:
npm run dev
Перейдіть у браузері за адресою http://localhost:5173/ (або ту, що вкаже термінал).
```bash

🧩 Структура та функціонал
У src/components створено три компоненти:

Home.jsx – «Головна сторінка»

About.jsx – «Про нас»

Contact.jsx – «Контакти»

У App.jsx реалізовано маршрутизацію через BrowserRouter, Route, NavLink, з виділенням активного пункту меню.

Додано заголовок <h1> з гармонійною стилізацією.

Всі стилі винесено в окремий файл App.css, включаючи респонсивну верстку через @media запити.

## 📂 Структура файлів
|-- hw6-react-router-app
|   |-- index.html
|   |-- package.json
|   |-- src
|   |   |-- App.jsx
|   |   |-- App.css
|   |   |-- components
|   |       |-- Home.jsx
|   |       |-- About.jsx
|   |       |-- Contact.jsx
|   |-- vite.config.js
|-- README.md

```
🌍 Демо-версія
Ви можете переглянути розгорнутий додаток за посиланням:

👉 [Demo на Vercel](https://hw43react-20072025.vercel.app/)
