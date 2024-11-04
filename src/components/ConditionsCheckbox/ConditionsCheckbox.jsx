import { useState } from "react"
import s from "./ConditionsCheckbox.module.css"

const ConditionsCheckbox = () => {
	const [hasAccepted, setHasAccepted] = useState(false);

	const handleChange = (evt) => {
		setHasAccepted(evt.target.checked); // true or false
	}

	return (
		<div className={s.checkbox}>
			<label>
				<input type="checkbox" name="terms" checked={hasAccepted} onChange={handleChange} />
				I accept terms and conditions
			</label>
			<button className={s.button} type="button" disabled={!hasAccepted}>Proceed</button>
		</div >
	)
}

export default ConditionsCheckbox
