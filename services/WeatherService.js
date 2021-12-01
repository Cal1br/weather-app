import config from './config.json';

export const getDataForLocation = (location) => {
    return async dispatch => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${config.openWeatherKey}`
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    }
}