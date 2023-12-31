const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => updateData(data))
}

const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('input_city').value;
    getWeatherData(inputCity);
})

const updateData = data => {
    document.getElementById('show_city').innerText = data.name || "Unknown Location";
    document.getElementById('show_temperature').innerText = data.main.temp;
    document.getElementById('weather_status').innerText = data.weather[0].main;
    document.getElementById('show_humanity').innerText = data.main.humidity;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('input_city').value = '';
}

getWeatherData('Dhaka');