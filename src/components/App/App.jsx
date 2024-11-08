import { useEffect, useState } from "react";
import axios from "axios";
import s from "./App.module.css"
import ArticleList from "../ArticleList/ArticleList";

export default function App() {

	// 1. Оголошуємо стан
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		// 	// 1. Оголошуємо асинхронну функцію
		async function fetchArticles() {
			const response = await axios.get(
				"https://hn.algolia.com/api/v1/search?query=react"
			);
			// 2. Записуємо дані в стан
			setArticles(response.data.hits);
			console.log(articles);
		}

		// 2. Викликаємо її одразу після оголошення
		fetchArticles();
	}, []);

	return (
		<div>
			<h1 className={s.title}>Latest articles</h1>

			{articles.length > 0 && <ArticleList items={articles} />}
		</div>
	);
}
