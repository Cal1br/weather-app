import config from "./config.json";

export const getDataForLocation = (location) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&appid=${config.openWeatherKey}&units=metric&exclude=minutely`
  )
    .then((answer) => answer.json())
    .then((data) => data);
};
export const transformToHourAndMinutes = (milis) => {
  const time = new Date(milis * 1000);
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const minutes =
    time.getMinutes() / 10 > 0 ? "" + time.getMinutes() : time.getMinutes();
  return hours + ":" + minutes;
};
