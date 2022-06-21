import { format } from 'date-fns';

export function convertTemperature(kelvin) {
  return Math.round(kelvin - 273.15);
}

export function convertTime(time) {
  return format(new Date(time * 1000), 'kk:mm');
}

export function convertDate(date) {
  return format(new Date(date * 1000), 'd LLL');
}

export function addDataToLocalStorage(key, data) {
  const dataJSON = JSON.stringify([...data]);
  localStorage.setItem(key, dataJSON);
}

export function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
