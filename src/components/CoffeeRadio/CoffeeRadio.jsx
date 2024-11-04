import { useState } from "react";
import s from "./CoffeeRadio.module.css"

const CoffeeRadio = () => {
	const [coffeeSize, setCoffeeSize] = useState("sm");

	const handleSizeChange = (evt) => {
		setCoffeeSize(evt.target.value);
		console.log(evt.target.value);
	}

	return (
		<div className={s.radio}>
			<p>Select coffee size</p>
			<label>
				<input
					type="radio"
					name="coffeeSize"
					value="sm"
					checked={coffeeSize === "sm"} // true or false
					onChange={handleSizeChange}
				/>
				Small
			</label>
			<label>
				<input
					type="radio"
					name="coffeeSize"
					value="md"
					checked={coffeeSize === "md"} // true or false
					onChange={handleSizeChange}
				/>
				Meduim
			</label>
			<label>
				<input
					type="radio"
					name="coffeeSize"
					value="lg"
					checked={coffeeSize === "lg"} // true or false
					onChange={handleSizeChange}
				/>
				Large
			</label>
		</div>
	)
}

export default CoffeeRadio
