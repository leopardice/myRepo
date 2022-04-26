export function convertTemprature(kelvin) {
  return Math.round(kelvin - 273.15);
}

export function convertTime(time) {
  return new Date(time * 1000).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function convertDate(date) {
  return new Date(date * 1000).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
  });
}
