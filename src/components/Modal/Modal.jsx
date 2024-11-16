

const Modal = ({ isOpen }) => {
	return (
		<div>
			{isOpen && <p>Modal</p>}
			<button type="button">Close window</button>
		</div>
	)
}

export default Modal
