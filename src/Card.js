import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";
import {
	Button,
	Typography,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	Collapse,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	[theme.breakpoints.up("sm")]: {
		title: {
			color: "red",
		},
	},
}));

function CoffeeCard(props) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const { avatarUrl, title, subtitle, desc, imgSrc } = props;
	const [expand, setExpand] = useState(false);

	return (
		<Card>
			<CardHeader
				className={classes.title}
				avatar={<Avatar aria-label='recipe' src={avatarUrl} />}
				action={
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
				}
				title={title}
				subheader={subtitle}
			/>
			<CardMedia style={{ height: "150px" }} image={imgSrc} />
			<CardContent>
				<Typography variant='body2' component='p'>
					{desc}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Buy Now</Button>
				<Button size='small'>Offer</Button>
				<Button onClick={() => setExpand((prev) => !prev)} size='small'>
					Expand
				</Button>
			</CardActions>
			<Collapse in={expand} timeout='auto' unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>
						Heat 1/2 cup of the broth in a pot until simmering, add saffron and
						set aside for 10 minutes.
					</Typography>
					<Typography paragraph>
						Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
						over medium-high heat. Add chicken, shrimp and chorizo, and cook,
						stirring occasionally until lightly browned, 6 to 8 minutes.
						Transfer shrimp to a large plate and set aside, leaving chicken and
						chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
						onion, salt and pepper, and cook, stirring often until thickened and
						fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
						cups chicken broth; bring to a boil.
					</Typography>
					<Typography paragraph>
						Add rice and stir very gently to distribute. Top with artichokes and
						peppers, and cook without stirring, until most of the liquid is
						absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
						shrimp and mussels, tucking them down into the rice, and cook again
						without stirring, until mussels have opened and rice is just tender,
						5 to 7 minutes more. (Discard any mussels that don’t open.)
					</Typography>
					<Typography>
						Set aside off of the heat to let rest for 10 minutes, and then
						serve.
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default CoffeeCard;
