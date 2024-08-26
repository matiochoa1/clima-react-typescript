import styles from "./App.module.css";
import { Alert } from "./components/Alert/Alert";
import { Form } from "./components/Form/Form";
import { Spinner } from "./components/Spinner/Spinner";
import { WeatherDetail } from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {
	const { weather, fetchWeather, weatherHasData, loading, notFound } =
		useWeather();

	return (
		<>
			<h1 className={styles.title}>Buscador de Clima</h1>

			<div className={styles.container}>
				<Form fetchWeather={fetchWeather} />
				{loading && <Spinner />}
				{weatherHasData && <WeatherDetail weather={weather} />}
				{notFound && <Alert>No se encontró la ciudad</Alert>}
			</div>
		</>
	);
}

export default App;
