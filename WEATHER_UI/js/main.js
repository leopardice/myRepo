import {
  UI_ELEMENTS,
  showWeather,
  showInfoSection,
  makeBtnSectionBackgroundBlack,
  makeLikeImgBlack,
  makeLikeImgWhite,
  showForecast,
} from "./view.js";

import { convertTime, convertDate, convertTemprature } from "./helpers.js";

import { format } from "date-fns";

UI_ELEMENTS.SEARCH_BTN.addEventListener("click", getWeather);

UI_ELEMENTS.BUTTON_NOW_SECTION.addEventListener("click", function () {
  showInfoSection("now");
  makeBtnSectionBackgroundBlack("now");
});

UI_ELEMENTS.BUTTON_DETAILS_SECTION.addEventListener("click", function () {
  showInfoSection("details");
  makeBtnSectionBackgroundBlack("details");
});

UI_ELEMENTS.BUTTON_FORECAST_SECTION.addEventListener("click", function () {
  showInfoSection("forecast");
  makeBtnSectionBackgroundBlack("forecast");
});

UI_ELEMENTS.LIKE_BUTTON.addEventListener("click", addFavoriteCity);

const now = new Date();
console.log(now);

const favoriteCitiesSet = new Set();

function showCitiesFromLocalStorage() {
  const citiesArr = JSON.parse(localStorage.getItem("favoriteCities"));

  for (let cityName of citiesArr) {
    if (cityName) favoriteCitiesSet.add(cityName);
  }

  for (let cityName of favoriteCitiesSet) {
    createListItemForCity(cityName);
  }
}

const SERVER_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_INFO = "/weather";
const FORECAST_INFO = "/forecast";
const API_KEY = "f660a2fb1e4bad108d6160b7f58c555f";

function showCurrentCityFromLocalStorage() {
  const currentCity = localStorage.getItem("currentCity");
  UI_ELEMENTS.SEARCH_FIELD.value = currentCity;
  getWeather();
}

showCurrentCityFromLocalStorage();
showCitiesFromLocalStorage();

export async function getWeather() {
  const formValue = UI_ELEMENTS.SEARCH_FIELD.value;
  const cityName = formValue || this.textContent;
  UI_ELEMENTS.SEARCH_FIELD.value = "";
  const url = `${SERVER_URL}${WEATHER_INFO}?q=${cityName}&appid=${API_KEY}`;

  UI_ELEMENTS.SEARCH_FORM.onsubmit = function () {
    return false;
  };
  try {
    let response = await fetch(url);
    let result = await response.json();
    let json = await result;

    function Weather() {
      this.name = json.name;
      this.temprature = convertTemprature(json.main.temp);
      this.feelsLike = convertTemprature(json.main.feels_like);
      this.weatherDescription = json.weather[0].main;
      this.sunriseTime = convertTime(json.sys.sunrise);
      this.sunsetTime = convertTime(json.sys.sunset);
      this.icon = json.weather[0].icon;
    }
    const weatherObject = new Weather();
    showWeather(weatherObject);
    getForecast(cityName);
    localStorage.setItem("currentCity", cityName);
  } catch (err) {
    alert(err);
    UI_ELEMENTS.SEARCH_FIELD.value = "";
  }
}

async function getForecast(cityName) {
  const url = `${SERVER_URL}${FORECAST_INFO}?q=${cityName}&appid=${API_KEY}`;

  let response = await fetch(url);
  let result = await response.json();
  let json = await result;

  const forecastArray = json.list;
  showForecast(forecastArray);
}

function addFavoriteCity() {
  const cityName = UI_ELEMENTS.CITY_NAME_ELEMENTS[0].textContent;
  const isCityinSet = favoriteCitiesSet.has(cityName);

  if (isCityinSet) {
    removeCity(cityName);
    makeLikeImgWhite();
  } else {
    favoriteCitiesSet.add(cityName);
    createListItemForCity(cityName);
    makeLikeImgBlack();
  }

  localStorage.setItem(
    "favoriteCities",
    JSON.stringify([...favoriteCitiesSet])
  );
}

function removeCity(cityName) {
  favoriteCitiesSet.delete(cityName);

  const citiesListItems = document.querySelectorAll(".list-item");

  const ListItem = Array.from(citiesListItems).find(
    (item) => item.textContent === cityName
  );

  ListItem.remove();
  makeLikeImgWhite();
}
