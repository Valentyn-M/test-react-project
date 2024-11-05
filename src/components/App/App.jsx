import { useState } from "react";
import css from "./App.module.css"
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import LoginForm from "../LoginForm/LoginForm";
import LoginFormControlled from "../LoginFormControlled/LoginFormControlled";
import SearchBar from "../SearchBar/SearchBar";
import CoffeeRadio from "../CoffeeRadio/CoffeeRadio";
import ConditionsCheckbox from "../ConditionsCheckbox/ConditionsCheckbox";

import initialTasks from "../../assets/tasks.json";
import Form from "../Filter/Form/Form";
import Filter from "../Filter/Filter/Filter";
import TaskList from "../Filter/TaskList/TaskList";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function App() {

	// Колбек-функція для обробки сабміту форми
	const handleLogin = (userData) => {
		// Виконуємо необхідні операції з даними
		console.log(userData);
	};

	// Підйому стану iз компонента LangSwitcher
	const [lang, setLang] = useState("uk");

	// Filter
	const [tasks, setTasks] = useState(initialTasks);
	const [filter, setFilter] = useState('');

	const addTask = (newTask) => {
		setTasks((prevTasks) => {
			return [...prevTasks, newTask];
		});
	};

	const deleteTask = (taskId) => {
		setTasks((prevTasks) => {
			return prevTasks.filter((task) => task.id !== taskId);
		});
	};

	const visibleTasks = tasks.filter((task) =>
		task.text.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div>

			<h1>Please login to your account!</h1>
			{/* Передаємо колбек як пропс форми */}
			<LoginForm onLogin={handleLogin} />

			<h2>Search</h2>
			<SearchBar />

			<p>Selected language: </p>
			<LangSwitcher value={lang} onSelect={setLang} />

			<CoffeeRadio />

			<ConditionsCheckbox />

			<LoginFormControlled />

			<h2><strong>Filter Block</strong></h2>
			<div className={css.container}>
				<Form onAdd={addTask} />
				<Filter value={filter} onFilter={setFilter} />
				<TaskList tasks={visibleTasks} onDelete={deleteTask} />
			</div>

			<h2><strong>Formik</strong></h2>
			<FeedbackForm />

		</div>
	);
}
