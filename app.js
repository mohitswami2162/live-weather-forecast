//58ea91047fec1d48330407c04f55f39e
//api.openweathermap.org/data/2.5/weather?q=dubai&appid=58ea91047fec1d48330407c04f55f39e

const weatherApi = {
  key: "58ea91047fec1d48330407c04f55f39e",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchBox = document.querySelector(".search-bar");
const searchButton = document.querySelector(".button");
searchBox.addEventListener("keypress", press);
searchButton.addEventListener("click", search);

function press(event) {
  if(event.keyCode == 13){
  getWeather(searchBox.value);
  document.querySelector(".weather").style.display = "block";
}
}

function search() {
  getWeather(searchBox.value);
  document.querySelector(".weather").style.display = "block";
}


function getWeather(city){
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
  .then(weather => {
    return weather.json();
  }).then(showWeather);
}


function showWeather(weather) {
        console.log(weather);
        let city = document.querySelector(".city");
        city.innerText = `Weather in ${weather.name}, ${weather.sys.country}`;

        let temp = document.querySelector(".temp");
        temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

        let icon = document.querySelector(".icon");
        icon.src = "http://openweathermap.org/img/wn/"+`${weather.weather[0].icon}`+"@2x.png";

        let weatherType = document.querySelector(".description");
        weatherType.innerText = `${weather.weather[0].main}`;

        let humidity = document.querySelector(".humidity");
        humidity.innerText = `Humidity: ${weather.main.humidity}%`;

        let wind = document.querySelector(".wind");
        wind.innerText = `Wind: ${weather.wind.speed} km/h`;


        if (weatherType.textContent == 'Clouds') {
          document.body.style.backgroundImage = "url('images/clouds.jpg')"
        }

        if (weatherType.textContent == 'Clear') {
          document.body.style.backgroundImage = "url('images/clear.jpg')"
        }

        if (weatherType.textContent == 'Thunderstorm') {
          document.body.style.backgroundImage = "url('images/thunder.jpg')"
        }

        if (weatherType.textContent == 'Drizzle') {
          document.body.style.backgroundImage = "url('images/drizzle.jpg')"
        }

        if (weatherType.textContent == 'Rain') {
          document.body.style.backgroundImage = "url('images/rain.jpg')"
        }

        if (weatherType.textContent == 'Snow') {
          document.body.style.backgroundImage = "url('images/snow.jpg')"
        }

        if (weatherType.textContent == 'Tornado') {
          document.body.style.backgroundImage = "url('images/tornado.jpg')"
        }

        if (weatherType.textContent == 'Mist') {
          document.body.style.backgroundImage = "url('images/mist.jpg')"
        }

        if (weatherType.textContent == 'Sand') {
          document.body.style.backgroundImage = "url('images/mist.jpg')"
        }

        if (weatherType.textContent == 'Ash') {
          document.body.style.backgroundImage = "url('images/mist.jpg')"
        }

        if (weatherType.textContent == 'Squall') {
          document.body.style.backgroundImage = "url('images/mist.jpg')"
        }

        if (weatherType.textContent == 'Fog') {
          document.body.style.backgroundImage = "url('images/fog.jpg')"
        }

        if (weatherType.textContent == 'Smoke') {
          document.body.style.backgroundImage = "url('images/fog.jpg')"
        }

        if (weatherType.textContent == 'Haze') {
          document.body.style.backgroundImage = "url('images/fog.jpg')"
        }

        if (weatherType.textContent == 'Dust') {
          document.body.style.backgroundImage = "url('images/fog.jpg')"
        }



}
