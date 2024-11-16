import { useToggle } from "../../hooks/useToggle";
import Modal from "../Modal/Modal";

const MyComponent = () => {
	const { isOpen, open, close } = useToggle(true);

	return (
		<>
			<button onClick={open}>Open modal</button>
			<Modal isOpen={isOpen} onClose={close} />
		</>
	);
};

export default MyComponent
