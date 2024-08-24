import axios from "axios"; // abstraccion de FetchAPI
import { SearchType } from "../types";

export default function useWeather() {
	const fetchWeather = async (search: SearchType) => {
		const appId = import.meta.env.VITE_API_KEY;

		try {
			const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;

			const { data } = await axios(geoUrl); // se puede especificar el method o no, por defecto es GET

			const lat = data[0].lat;
			const lon = data[0].lon;

			const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

			const { data: weather } = await axios(weatherUrl);
			console.log(weather);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		fetchWeather,
	};
}
