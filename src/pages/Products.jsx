import { useSearchParams } from "react-router-dom";
import { ProductList } from "../components/ProductList/ProductList";
import { getProducts } from "../fakeApi";
import { SearchBox } from "../components/SearchBox/SearchBox";

export default function Products() {
	const products = getProducts();

	// Вилучення параметрів
	const [searchParams, setSearchParams] = useSearchParams();
	// const params = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);
	// const { name, maxPrice, color } = params;

	const productName = searchParams.get("name") ?? "";

	const visibleProducts = products.filter((product) =>
		product.name.toLowerCase().includes(productName.toLowerCase())
	);

	const updateQueryString = (name) => {
		const nextParams = name !== "" ? { name } : {};
		setSearchParams(nextParams);
	};

	return (
		<main>
			<SearchBox value={productName} onChange={updateQueryString} />
			<ProductList products={visibleProducts} />

			{/* Показ Вилучених параметрів */}
			{/* <div>
				<p>Name: {name}</p>
				<p>Color: {color}</p>
				<p>Maximum price: {maxPrice}</p>
			</div> */}

		</main>
	);
}
