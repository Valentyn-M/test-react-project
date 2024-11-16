import { forwardRef, useEffect, useRef, useState } from "react";
import s from "./App.module.css"
import ArticleList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
// 1c. Імпортуємо HTTP-функцію
import { fetchArticlesWithTopic } from "../../articles-api.js";
import Error from "../Error/Error.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import Player from "../Player/Player.jsx";
import MyComponent from "../MyComponent/MyComponent.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";


/*
const CustomButton = forwardRef((props, ref) => (
	<button ref={ref}>{props.children}</button>
));
*/

export default function App() {

	// 1. Оголошуємо стан
	const [articles, setArticles] = useState([]);
	// 1a. Стан для Індикатора завантаження
	const [loading, setLoading] = useState(false);
	// 1b. Стан для зберігання помилки
	const [serverError, setServerError] = useState(false);

	// 2. Оголошуємо асинхронну функцію. handleSearch буде відповідати за код, який необхідно виконати при сабміті форми
	const handleSearch = async (topic) => {
		try {
			// 2a. Встановлюємо початковi значення перед запитом
			setArticles([]);
			setServerError(false);
			setLoading(true);
			// 2c. Використовуємо HTTP-функцію
			const data = await fetchArticlesWithTopic(topic);
			// 3. Записуємо дані в стан
			setArticles(data);
		}
		catch (error) {
			// 2b. Тут будемо обробляти помилку
			setServerError(error.message);
			console.log(error.message);
		} finally {
			// 3a. Встановлюємо індикатор в false після запиту
			setLoading(false);
		}
	}

	/*
	const btnRef = useRef();
	useEffect(() => btnRef.current.focus(), []);
	*/

	return (
		<div>

			{/* <UserMenu /> */}

			{/* <MyComponent /> */}

			{/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
			<CustomButton ref={btnRef}>Button with forwarded ref</CustomButton> */}

			<h1 className={s.title}>Latest articles</h1>
			<SearchForm onSearch={handleSearch} />
			{loading && <Loader />}
			{serverError && <Error errorMessage={serverError} />}
			{articles.length > 0 && <ArticleList items={articles} />}
		</div>
	);
}
