import { countries } from "../../data/countries";
import styles from "./Form.module.css";

export const Form = () => {
	return (
		<form className={styles.form}>
			<div className={styles.field}>
				<label htmlFor="city">Ciudad:</label>
				<input type="text" id="city" name="city" placeholder="Ciudad" />
			</div>

			<div className={styles.field}>
				<label htmlFor="country">Pais:</label>
				<select>
					<option value="">Seleccione un país:</option>
					{countries.map((country) => (
						<option key={country.code} value={country.code}>
							- {country.name}
						</option>
					))}
				</select>
			</div>

			<input type="submit" value="Consultar Clima" className={styles.submit} />
		</form>
	);
};
