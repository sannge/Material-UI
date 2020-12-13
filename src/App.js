import { Box, Button, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	// root: {
	// 	backgroundColor: "red",
	// 	color: (props) => props.color,
	// },
	helloThereStyles: {
		fontStyle: "oblique",
		color: (props) => props.color,
	},
	buttonStyles: {
		border: 0,
		color: "black",
		"&:hover": {
			background: "red",
		},
	},
});

function App() {
	//custom hook that uses makeStyles.
	const classes = useStyles({ color: "red" });

	return (
		<>
			<Typography className={classes.helloThereStyles} variant='h1'>
				Hello There
			</Typography>
			<Button
				className={classes.buttonStyles}
				color='secondary'
				variant='outlined'
				disableElevation>
				THIS IS OUR FIRST BUTTON
			</Button>
		</>
	);
}

export default App;
