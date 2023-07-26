import React, { useContext } from "react"

import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography";

import useTickets from "../../hooks/useTickets"

import { AuthContext } from "../../context/Auth/AuthContext";

import Chart from "./Chart"

const useStyles = makeStyles(theme => ({
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	fixedHeightPaper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
		height: 240,
	},
	customFixedHeightPaper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
		height: 120,
	},
	customFixedHeightPaperLg: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
		height: "100%",
	},
}))

const Penjualan = () => {
	const classes = useStyles()

	const { user } = useContext(AuthContext);
	var userQueueIds = [];

	if (user.queues && user.queues.length > 0) {
		userQueueIds = user.queues.map(q => q.id);
	}

	const GetTickets = (status, showAll, withUnreadMessages) => {

		const { count } = useTickets({
			status: status,
			showAll: showAll,
			withUnreadMessages: withUnreadMessages,
			queueIds: JSON.stringify(userQueueIds)
		});
		return count;
	}

	return (
		<div>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<Paper className={classes.customFixedHeightPaper} style={{ overflow: "hidden" }}>
							<Typography component="h3" variant="h6" color="primary" paragraph>
								Pend. Penjualan
							</Typography>
							<Grid item>
								<Typography component="h1" variant="h4">
									{GetTickets("open", "true", "false")}
								</Typography>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.customFixedHeightPaper} style={{ overflow: "hidden" }}>
							<Typography component="h3" variant="h6" color="primary" paragraph>
								DP PreOrder
							</Typography>
							<Grid item>
								<Typography component="h1" variant="h4">
									{GetTickets("open", "true", "false")}
								</Typography>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.customFixedHeightPaper} style={{ overflow: "hidden" }}>
							<Typography component="h3" variant="h6" color="primary" paragraph>
								Piutang Jatuh Tempo
							</Typography>
							<Grid item>
								<Typography component="h1" variant="h4">
									{GetTickets("pending", "true", "false")}
								</Typography>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.customFixedHeightPaper} style={{ overflow: "hidden" }}>
							<Typography component="h3" variant="h6" color="primary" paragraph>
								Pengeluaran
							</Typography>
							<Grid item>
								<Typography component="h1" variant="h4">
									{GetTickets("closed", "true", "false")}
								</Typography>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={12}>
						<Paper className={classes.fixedHeightPaper}>
							<Chart />
						</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.fixedHeightPaper}>
xxxxxxxxxxxxxx
						</Paper>
					</Grid>
					<Grid item xs={8}>
						<Paper className={classes.fixedHeightPaper}>
xxxxxxxxxxxxxx
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default Penjualan