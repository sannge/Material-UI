import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
	palette: {
		primary: blue,
	},
	status: {
		danger: "orange",
	},
});

export default theme;
