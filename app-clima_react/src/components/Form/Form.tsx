import { useForm } from "react-hook-form";
import { countries } from "../../data/countries";
import styles from "./Form.module.css";
import type { SearchType } from "../../types";
import { Alert } from "../Alert/Alert";

type FormProps = {
	fetchWeather: (search: SearchType) => Promise<void>;
};

export const Form = ({ fetchWeather }: FormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SearchType>();

	const registerSearch = (search: SearchType) => {
		if (search) {
			fetchWeather(search);
		}

		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(registerSearch)}>
			<div className={styles.field}>
				<label htmlFor="city">Ciudad:</label>
				<input
					type="text"
					id="city"
					placeholder="Ciudad"
					{...register("city", {
						required: "La ciudad es requerida",
					})}
				/>

				{errors.city && <Alert>{errors.city?.message}</Alert>}
			</div>

			<div className={styles.field}>
				<label htmlFor="country">Pais:</label>
				<select
					id="country"
					{...register("country", {
						required: "El país es requerido",
					})}>
					<option value="">Seleccione un país: </option>
					{countries.map((country) => (
						<option key={country.code} value={country.code}>
							- {country.name}
						</option>
					))}
				</select>

				{errors.country && <Alert>{errors.country?.message}</Alert>}
			</div>

			<input type="submit" value="Consultar Clima" className={styles.submit} />
		</form>
	);
};
