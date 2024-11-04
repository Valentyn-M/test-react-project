import { useState } from "react";
import s from "./SearchBar.module.css"

const SearchBar = () => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (evt) => {
		setInputValue(evt.target.value);
	};

	return (
		<div className={s.search}>
			<input className={s.input} type="text" value={inputValue} onChange={handleChange} />
			<p>{inputValue}</p>
		</div>
	);
}

export default SearchBar;
