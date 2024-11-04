import { useId } from "react";
import s from "./LoginForm.module.css"

const LoginForm = ({ onLogin }) => {

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const form = evt.target;
		const { login, password } = form.elements;

		// Викликаємо пропс onLogin
		onLogin({
			login: login.value,
			password: password.value,
		});

		// Скидаємо значення полів після відправки
		form.reset();
	};

	const loginId = useId();
	const passwordId = useId();

	return (
		<form className={s.form} onSubmit={handleSubmit} >
			<label htmlFor={loginId}>Login</label>
			<input className={s.input} type="text" name="login" id={loginId} />

			<label htmlFor={passwordId}>Password</label>
			<input className={s.input} type="password" name="password" id={passwordId} />

			<button className={s.button} type="submit">Login</button>
		</form>
	);
};

export default LoginForm
