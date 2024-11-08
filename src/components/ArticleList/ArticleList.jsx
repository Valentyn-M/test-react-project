import s from "./ArticleList.module.css"

const ArticleList = ({ items }) => {
	return (
		<ul className={s.list}>
			{items.map(({ objectID, url, title }) => (
				<li className={s.item} key={objectID}>
					<a className={s.link} href={url} target="_blank" rel="noreferrer noopener">
						{title}
					</a>
				</li>
			))}
		</ul>
	)
}

export default ArticleList
