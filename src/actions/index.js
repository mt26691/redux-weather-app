const API_KEY = '9d11c30aca1aeac7c4570f623c1db6e1';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url =`${ROOT_URL}&q=${city},us`;

    return {
        type: FETCH_WEATHER
    };
}