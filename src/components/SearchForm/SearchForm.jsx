import s from "./SearchForm.module.css"

const SearchForm = ({ onSearch }) => {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.target;
		const topic = form.elements.searchQuery.value;

		// Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції.
		if (topic.trim() === "") {
			alert("Please enter search term!")
			return;
		}
		// У протилежному випадку викликаємо пропс і передаємо йому значення поля
		onSearch(topic);

		form.reset();
	};

	return (
		<form className={s.form} onSubmit={handleSubmit}>
			<input className={s.input} type="text" name="searchQuery" placeholder="Search articles..." />
			<button className={s.btn}>Search</button>
		</form>
	);
}

export default SearchForm
