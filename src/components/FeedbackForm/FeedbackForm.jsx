import { Field, Form, Formik } from 'formik';
import s from "./FeedbackForm.module.css"
import { useId } from 'react';

// Об'єкт початкових значень полів форми
const initialValues = {
	username: "",
	email: "",
	message: "",
	level: "good",
}

const FeedbackForm = () => {

	const nameFieldId = useId();
	const emailFieldId = useId();
	const msgFieldId = useId();
	const levelFieldId = useId();

	const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form className={s.form}>
				<label htmlFor={nameFieldId}>Username</label>
				<Field className={s.input} type="text" name="username" id={nameFieldId} />

				<label htmlFor={emailFieldId}>Email</label>
				<Field className={s.input} type="email" name="email" id={emailFieldId} />

				<label htmlFor={msgFieldId}>Message</label>
				<Field className={s.input} as="textarea" name="message" id={msgFieldId} rows="5" />

				<label htmlFor={levelFieldId}>Service satisfaction level</label>
				<Field className={s.input} as="select" name="level" id={levelFieldId}>
					<option value="good">Good</option>
					<option value="neutral">Neutral</option>
					<option value="bad">Bad</option>
				</Field>

				<button className={s.button} type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default FeedbackForm