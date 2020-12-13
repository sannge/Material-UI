import React from "react";
import CoffeeCard from "./Card";
import { Grid } from "@material-ui/core";
import CoffeeMakerList from "./constants";

function Content() {
	const COffeeMakerCard = (coffeeMakerObj) => {
		return (
			<Grid item xs={12} sm={6} md={4}>
				<CoffeeCard {...coffeeMakerObj} />
			</Grid>
		);
	};

	return (
		<div>
			<Grid container spacing={4}>
				{CoffeeMakerList.map((coffeeMakerObj) =>
					COffeeMakerCard(coffeeMakerObj)
				)}
			</Grid>
		</div>
	);
}

export default Content;
