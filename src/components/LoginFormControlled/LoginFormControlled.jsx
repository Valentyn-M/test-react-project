import { useState } from "react";
import s from "./LoginFormControlled.module.css"

const LoginFormControlled = () => {

	const [values, setValues] = useState({
		login: "",
		password: ""
	});

	const handleChange = (evt) => {
		setValues((prevValues) => ({
			...prevValues,
			[evt.target.name]: evt.target.value
		}));
	}

	const handleSumit = (evt) => {
		evt.preventDefault();

		// Значення полів
		console.log(values);

		// Скидаємо значення полів після відправки
		setValues({
			login: "",
			password: ""
		})
	};


	return (
		<form className={s.form} onSubmit={handleSumit}>
			<input className={s.input} type="text" name="login" value={values.login} onChange={handleChange} />
			<input className={s.input} type="password" name="password" value={values.password} onChange={handleChange} />
			<button className={s.button} type="submit">Login</button>
		</form>
	);
};

export default LoginFormControlled
