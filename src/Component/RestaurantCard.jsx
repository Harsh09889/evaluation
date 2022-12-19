import styles from "./RestaurantCard.module.css";
function RestaurantCard({
	name,
	image,
	type,
	rating,
	price_starts_from,
	number_of_votes,
}) {
	return (
		<div
			data-testid='restaurant-card'
			className={styles.container}>
			<img
				data-testid='restaurant-card-image'
				src={image}
				alt={name}
			/>
			<div>
				<p>
					Name : <span data-testid='restaurant-card-name'> {name}</span>
				</p>
				<p>
					Type : <span data-testid='restaurant-card-type'> {type}</span>
				</p>
				<p>
					Price :{" "}
					<span data-testid='restaurant-card-price'> {price_starts_from}</span>
				</p>
				<p>
					Rating : <span data-testid='restaurant-card-rating'> {rating}</span>
				</p>
				<p>
					Votes :{" "}
					<span data-testid='restaurant-card-votes'> {number_of_votes}</span>
				</p>
			</div>
		</div>
	);
}

export default RestaurantCard;
