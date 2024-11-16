import s from "./Error.module.css"

const Error = ({ errorMessage }) => {
	return (
		<div className={s.error}>
			<p>Whoops, something went wrong! Please try reloading this page!</p>
			<p>{errorMessage}</p>
		</div>
	)
}

export default Error
