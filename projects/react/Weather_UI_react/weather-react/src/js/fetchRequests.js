import { convertDate, convertTemperature, convertTime } from "./helpers";

const SERVER_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_INFO = "/weather";
const FORECAST_INFO = "/forecast";
const API_KEY = "f660a2fb1e4bad108d6160b7f58c555f";

export async function getWeather(locationName) {
  const url = `${SERVER_URL}${WEATHER_INFO}?q=${locationName}&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) throw new Error("Bad request");

  const result = await response.json();

  function WeatherInfo() {
    this.name = result.name;
    this.temperature = convertTemperature(result.main.temp);
    this.feelsLike = convertTemperature(result.main.feels_like);
    this.weatherDescription = result.weather[0].main;
    this.sunriseTime = convertTime(result.sys.sunrise);
    this.sunsetTime = convertTime(result.sys.sunset);
    this.icon = result.weather[0].icon;
  }

  return new WeatherInfo();
}

export async function getForecast(locationName) {
  const url = `${SERVER_URL}${FORECAST_INFO}?q=${locationName}&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) throw new Error("Bad request");

  const result = await response.json();
  const forecastArray = result.list;

  const forecastInfo = forecastArray.map((item) => {
    const forecastObject = {
      id: Math.random().toString(),
      date: convertDate(item.dt),
      time: convertTime(item.dt),
      temperature: convertTemperature(item.main.temp),
      weatherDescription: item.weather[0].main,
      feelsLike: convertTemperature(item.main.feels_like),
      iconId: item.weather[0].icon,
    };
    return forecastObject;
  });
  return forecastInfo;
}
