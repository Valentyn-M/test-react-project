import { useId } from "react";

const LangSwitcher = ({ value, onSelect }) => {
	const selectId = useId();

	// Перенесено в основний компонент App для пiдняття стану, щоб отримати його в батьківському компоненті App
	// const [lang, setLang] = useState("uk");

	const handleChange = (evt) => {
		onSelect(evt.target.value);
		console.log(evt.target.value);
	}

	return (
		<div>
			<select id={selectId} value={value} onChange={handleChange}>
				<option value="en">English</option>
				<option value="uk">Ukrainian</option>
				<option value="pl">Polish</option>
			</select>
		</div>
	);
}

export default LangSwitcher
