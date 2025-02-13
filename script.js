const apiKey = "ee8aec5438b85f81a428d68d05edfc82";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-img");
const loadingImg = document.querySelector(".loading-img");
const weatherDiv = document.querySelector(".weather");
const errorDiv = document.querySelector(".error");

function showElement(element) {
    element.classList.add("show");
}

function hideElement(element) {
    element.classList.remove("show");
}

async function checkWeather(city) {
    showElement(loadingImg);
    hideElement(weatherDiv);
    hideElement(errorDiv);

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        hideElement(loadingImg);
        showElement(errorDiv);
    } else {
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

        var icon = data.weather[0].main;
        weatherIcon.src = "images/" + icon + ".png";

        setTimeout(() => {
            hideElement(loadingImg);
            showElement(weatherIcon);
            showElement(weatherDiv);
        }, 500);
    }
}

function getCityFromCoords() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Геолокация не поддерживается вашим браузером.");
    }
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    showElement(loadingImg);

    console.log(`Широта: ${latitude}, Долгота: ${longitude}`);

    // Запрашиваем город через OpenStreetMap API
    fetchCityFromCoords(latitude, longitude);
}

function error() {
    console.log("Не удалось получить местоположение.");
}

function fetchCityFromCoords(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.address) {
                const city = data.address.city || data.address.town || data.address.village || "Город не найден";
                console.log("Определенный город:", city);

                localStorage.setItem("userCity", city);

                setTimeout(() => {
                    checkWeather(city);
                }, 500);
            } else {
                console.log("Не удалось определить город.");
            }
        })
        .catch(error => console.error("Ошибка при определении города:", error));
}

getCityFromCoords();

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
