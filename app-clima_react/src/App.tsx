import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { Spinner } from "./components/Spinner/Spinner";
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
	const { weather, fetchWeather, weatherHasData, loading } = useWeather();

	return (
		<>
			<h1 className={styles.title}>Buscador de Clima</h1>

			<div className={styles.container}>
				<Form fetchWeather={fetchWeather} />
				{loading && <Spinner />}
				{weatherHasData && <WeatherDetail weather={weather} />}
			</div>
		</>
	);
}

export default App;
