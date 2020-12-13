import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

const App = () => {
	return (
		<div>
			<Grid container direction='column'>
				<Grid item>
					<Header />
				</Grid>
				<Grid item container>
					<Grid item xs={false} sm={1} />
					<Grid item xs={12} sm={9} md={8}>
						<Content />
					</Grid>
					<Grid item xs={false} sm={1} />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
