import { useEffect } from "react";
import { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";
import style from "./Restaurants.module.css";
function Restaurants() {
	const BASE_URL = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`;

	const [restaurants, setRestaurants] = useState(null);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const limit = 10;
	useEffect(() => {
		setLoading(true);
		const get = async () => {
			const res = await fetch(BASE_URL + `?page=${page}&limit=${limit}`);
			const data = await res.json();
			setTotalPages(data.totalPages);
			setRestaurants(data.data);
			setLoading(false);
		};
		get();
	}, [page]);

	const resCards = restaurants?.map((e) => (
		<RestaurantCard
			key={e.id}
			name={e.name}
			image={e.image}
			type={e.type}
			rating={e.rating}
			price_starts_from={e.price_starts_from}
			number_of_votes={e.number_of_votes}
		/>
	));

	return loading ? (
		<LoadingIndicator />
	) : (
		<div>
			<h1
				className={style.heading}
				data-testid='restaurants-header'>
				Restaurants List
			</h1>
			<div
				data-testid='restaurants-container'
				className={style.cardsContainer}>
				{resCards}
			</div>
			<div>
				<Pagination
					current={page}
					onChange={(pg) => setPage(pg)}
					total={totalPages}
				/>
			</div>
		</div>
	);
}

export default Restaurants;
