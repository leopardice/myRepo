import { convertTime, convertDate, convertTemprature } from "./helpers.js";

export const UI_ELEMENTS = {
  SEARCH_FORM: document.querySelector(".search-form"),
  SEARCH_FIELD: document.querySelector(".search-field"),
  SEARCH_BTN: document.querySelector(".search-icon"),
  NOW_SECTION: document.querySelector(".now-section"),
  TEMPRATURE_NUMBERS: document.querySelectorAll(".temprature-number"),
  BUTTON_NOW_SECTION: document.querySelector(".now-btn"),
  BUTTON_DETAILS_SECTION: document.querySelector(".details-btn"),
  BUTTON_FORECAST_SECTION: document.querySelector(".forecast-btn"),
  DETAILS_SECTION: document.querySelector(".details-section"),
  FEELS_LIKE_TEMPRATURE: document.querySelector(".feels-like"),
  WEATHER_DESCRIPTION: document.querySelector(".weather-description"),
  CITY_NAME_ELEMENTS: document.querySelectorAll(".city-name"),
  LIKE_BUTTON: document.querySelector(".like-img"),
  CITIES_LIST: document.querySelector(".cities-list"),
  SUNRISE_TIME: document.querySelector(".sunrise-time"),
  SUNSET_TIME: document.querySelector(".sunset-time"),
  WEATHER_IMAGE: document.querySelector(".weather-img"),
  FORECAST_SECTION: document.querySelector(".forecast-section"),
  FORECAST_LIST: document.querySelector(".forecast-list"),
  FORECAST_LIST_ITEM: document.querySelector(".forecast-list-item"),
};

export function showWeather(weatherObject) {
  updateCityNameElements(weatherObject.name);
  showTempratureElements(weatherObject.temprature);

  UI_ELEMENTS.FEELS_LIKE_TEMPRATURE.textContent = weatherObject.feelsLike;
  UI_ELEMENTS.WEATHER_DESCRIPTION.textContent =
    weatherObject.weatherDescription;
  UI_ELEMENTS.SUNRISE_TIME.textContent = weatherObject.sunriseTime;
  UI_ELEMENTS.SUNSET_TIME.textContent = weatherObject.sunsetTime;
  changeWeatherImage(
    weatherObject.weatherDescription,
    UI_ELEMENTS.WEATHER_IMAGE
  );
}

function showTempratureElements(temprature) {
  for (let number of UI_ELEMENTS.TEMPRATURE_NUMBERS) {
    number.textContent = temprature;
  }
}

const updateCityNameElements = (cityName) => {
  let cityNameUpdated = "";
  for (let i = 0; i < cityName.length; i++) {
    let char;
    if (i === 0) {
      char = cityName[i].toUpperCase();
      cityNameUpdated += char;
    } else {
      char = cityName[i].toLowerCase();
      cityNameUpdated += char;
    }
  }

  for (let name of UI_ELEMENTS.CITY_NAME_ELEMENTS) {
    name.textContent = cityNameUpdated;
  }
};

function changeWeatherImage(weather, element) {
  switch (weather) {
    case "Rain":
      element.src = "./img/rain.svg";
      break;
    case "Clear":
      element.src = "./img/sun.svg";
      break;
    case "Clouds":
      element.src = "./img/cloud.svg";
      break;
    case "Mist":
      element.src = "./img/mist.svg";
      break;
  }
}

export function makeLikeImgBlack() {
  UI_ELEMENTS.LIKE_BUTTON.classList.add("like-img-background-black");
}

export function makeLikeImgWhite() {
  UI_ELEMENTS.LIKE_BUTTON.classList.remove("like-img-background-black");
}

export function showInfoSection(sectionName) {
  switch (sectionName) {
    case "now":
      UI_ELEMENTS.NOW_SECTION.classList.remove("hidden");
      UI_ELEMENTS.DETAILS_SECTION.classList.add("hidden");
      UI_ELEMENTS.FORECAST_SECTION.classList.add("hidden");
      break;
    case "details":
      UI_ELEMENTS.NOW_SECTION.classList.add("hidden");
      UI_ELEMENTS.DETAILS_SECTION.classList.remove("hidden");
      UI_ELEMENTS.FORECAST_SECTION.classList.add("hidden");
      break;
    case "forecast":
      UI_ELEMENTS.NOW_SECTION.classList.add("hidden");
      UI_ELEMENTS.DETAILS_SECTION.classList.add("hidden");
      UI_ELEMENTS.FORECAST_SECTION.classList.remove("hidden");
      break;
  }
}

export function makeBtnSectionBackgroundBlack(sectionName) {
  switch (sectionName) {
    case "now":
      UI_ELEMENTS.BUTTON_NOW_SECTION.classList.add("btn-black-background");
      UI_ELEMENTS.BUTTON_DETAILS_SECTION.classList.remove(
        "btn-black-background"
      );
      UI_ELEMENTS.BUTTON_FORECAST_SECTION.classList.remove(
        "btn-black-background"
      );
      break;
    case "details":
      UI_ELEMENTS.BUTTON_DETAILS_SECTION.classList.add("btn-black-background");
      UI_ELEMENTS.BUTTON_NOW_SECTION.classList.remove("btn-black-background");
      UI_ELEMENTS.BUTTON_FORECAST_SECTION.classList.remove(
        "btn-black-background"
      );
      break;
    case "forecast":
      UI_ELEMENTS.BUTTON_FORECAST_SECTION.classList.add("btn-black-background");
      UI_ELEMENTS.BUTTON_NOW_SECTION.classList.remove("btn-black-background");
      UI_ELEMENTS.BUTTON_DETAILS_SECTION.classList.remove(
        "btn-black-background"
      );
      break;
  }
}

export function showForecast(forecastArray) {
  UI_ELEMENTS.FORECAST_LIST.innerHTML = "";
  forecastArray.forEach(function (item) {
    let {
      dt: date,
      main: { temp: temprature },
      main: { feels_like: feelsLike },
    } = item;

    const weatherDescription = item.weather[0].main;
    const convertedTemprature = convertTemprature(temprature);
    const convertedFeelsLike = convertTemprature(feelsLike);
    const convertedTime = convertTime(date);
    const convertedDate = convertDate(date);

    UI_ELEMENTS.FORECAST_LIST.innerHTML += `<li class="forecast-list-item flex-column">
    <div class="date-time-line flex-row">
    <p class="forecast-date-1">${convertedDate}</p>
    <p class="forecast-time-1">${convertedTime}</p>
  </div>
  <div class="temrature-forecast-line flex-row">
    <div class="temprature-forecast flex-row">Temprature: <p class="temprature-forecast-number-1">${convertedTemprature}</p>°</div>
    <p class="forecast-weather-1">${weatherDescription}</p>
  </div>
  <div class="feels-like-img-line flex-row">
    <div class="feels-like-forecast-1 flex-row">Feels like: <p class="feels-like-forecast-number-1">${convertedFeelsLike}</p>°</div>
    <img class="forecast-img-1" src="img/rain.svg">
  </div>
</li>`;
  });
}

// export function createListItemForCity(cityName) {
//   const li = document.createElement("li");
//   li.classList.add("list-item");
//   li.textContent = cityName;
//   li.addEventListener("click", getWeather);
//   UI_ELEMENTS.CITIES_LIST.append(li);
// }
