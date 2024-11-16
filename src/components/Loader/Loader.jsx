import { SyncLoader } from "react-spinners";

const override = {
	margin: "20px 0",
};

const Loader = () => {
	return (
		<SyncLoader
			color={"green"}
			loading={true}
			cssOverride={override}
			speedMultiplier={0.9}
			margin={10}
			size={20}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	)
}

export default Loader
