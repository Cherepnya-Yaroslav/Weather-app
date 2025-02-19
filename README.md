## 🌤 **Weather App**
**Простое погодное приложение**, которое позволяет пользователям искать погоду по городу или автоматически определять местоположение и получать прогноз.

### 🚀 **Технологии**
- **HTML** – структура приложения
- **CSS** – стилизация и анимации
- **JavaScript** – логика работы
- **[OpenWeatherMap API](https://openweathermap.org/)** – получение данных о погоде
- **[OpenStreetMap (Nominatim API)](https://nominatim.org/)** – определение города по геолокации

---

## 🎯 **Функциональность**
✔ Ввод города и получение прогноза погоды  
✔ Определение местоположения пользователя и отображение погоды для него  
✔ Отображение **температуры, влажности, скорости ветра**  
✔ **Анимация загрузки** при получении данных  
✔ **Обработчик ошибок** (если введён неправильный город)

---

## 🛠 **Как запустить проект?**
1. **Склонируй репозиторий:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```
2. **Запусти локальный сервер (опционально):**
   ```bash
   live-server
   ```
3. **Открой `index.html` в браузере**

---

## 🔑 **Используемые API**

### 1️⃣ **OpenWeatherMap (погода)**
Используется **API OpenWeatherMap**, который возвращает данные о погоде по названию города.  
Пример запроса:
```bash
https://api.openweathermap.org/data/2.5/weather?units=metric&q=moscow&appid=YOUR_API_KEY
```

### 2️⃣ **OpenStreetMap (определение города по координатам)**
Используется **Nominatim API** (OpenStreetMap) для получения названия города по широте и долготе.  
Пример запроса:
```bash
https://nominatim.openstreetmap.org/reverse?format=json&lat=55.75&lon=37.61&zoom=10&addressdetails=1
```

---

## 🎨 **Анимации**
Приложение использует **плавные CSS-анимации** для переходов между состояниями:

- **Появление/исчезновение блоков** (`opacity`, `transform`)
- **Анимация загрузки** (`loading-img` → вращающийся индикатор)
- **Плавное отображение погоды после загрузки**

Пример CSS-анимации:
```css
.weather, .error, .loading-img {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    display: none;
}
.show {
    opacity: 1;
    transform: scale(1);
    display: block;
}
```

---

## ⚙ **Логика работы скриптов**
1️⃣ **Запрос API** при вводе города или определении геолокации  
2️⃣ **Показ анимации загрузки** (`loading-img`)  
3️⃣ **Обработка данных API**  
4️⃣ **Скрытие загрузки и плавное отображение погоды**  
5️⃣ **Обработчик ошибок** (если город не найден)



---

## 📝 **TODO / Возможные улучшения**
🔹 Добавить переключение между °C и °F  
🔹 Сделать прогноз на несколько дней  
🔹 Улучшить дизайн и добавить больше анимаций

---

## 👨‍💻 **Автор**
**[Cherepnya-Yaroslav]**  
✉ **Контакты:** [herepnyayar@gmail.com]
