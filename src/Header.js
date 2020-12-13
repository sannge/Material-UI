import React from "react";
import { Box, Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

function Header() {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Grid container>
					<Grid item xs={false} sm={1}></Grid>
					<Grid item xs={12} sm={10}>
						<Box display='flex' justifyContent='space-between'>
							<Typography>This is our header</Typography>
							<AcUnitIcon />
						</Box>
					</Grid>
					<Grid item xs={false} sm={1}></Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
