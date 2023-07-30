import React, { useEffect, useState, useContext } from 'react';
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography";
import useTickets from "../../hooks/useTickets"
import axios from 'axios';
import { AuthContext } from "../../context/Auth/AuthContext";

import { i18n } from "../../translate/i18n";

import Chart from "./Chart"
import AuthorCard from "./AuthorCard"
import TicketTooltip from "./TicketTooltip"
import BranchListPaper from "./BranchListPaper"
import VerticalTabs from './VerticalTabs';



const useStyles = makeStyles(theme => ({
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		backgroundColor: theme.palette.background.default,
	},
	fixedHeightPaper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
		height: 360,
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
	fixedHeightPaperA: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
		height: 360,
	},
	customFixedHeightPaperA: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
		height: 150,
	},
	customFixedHeightPaperLgA: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
		height: "100%",
	},
	Paper: {
		padding: theme.spacing(2),
	},
	// customFixedHeightPaper: {
	// 	padding: theme.spacing(2),
	// 	display: 'flex',
	// 	overflow: 'auto',
	// 	flexDirection: 'column',
	// 	height: 240,
	// 	borderRadius: 15,
	// 	backgroundImage: 'url(), linear-gradient(to right, #f83600, #fe8c00)',
	// 	backgroundSize: 'cover',
	// 	backgroundPosition: 'right bottom',
	// 	backgroundRepeat: 'no-repeat',
	// 	color: 'white',
	// 	boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
	//   },
	  
	
	
}))

const Dashboard = () => {
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

	const [branchData, setBranchData] = useState([]);

	useEffect(() => {
	  // Fetch data from API and update branchData state
	  axios
		.get('https://zieda.id/pro/geten/settings/detailstore.php?key=c910eae7e30da15a60e2cbebea6fabd0')
		.then((response) => {
		  setBranchData(response.data.data);
		})
		.catch((error) => {
		  console.error(error);
		});
	}, []);



	return (
		<div>
			<Container maxWidth="lg" className={classes.container}>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Paper className={classes.customFixedHeightPaper} style={{ overflow: "hidden" }}>
							<Typography component="h3" variant="h6" color="primary" paragraph>
								{i18n.t("dashboard.messages.inAttendance.title")}
							</Typography>
							<Grid item>
								<Typography component="h1" variant="h4">
									{GetTickets("open", "true", "false")}
								</Typography>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.customFixedHeightPaper} style={{ overflow: "hidden" }}>
							<Typography component="h3" variant="h6" color="primary" paragraph>
								{i18n.t("dashboard.messages.waiting.title")}
							</Typography>
							<Grid item>
								<Typography component="h1" variant="h4">
									{GetTickets("pending", "true", "false")}
								</Typography>
							</Grid>
						</Paper>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.customFixedHeightPaper} style={{ overflow: "hidden" }}>
							<Typography component="h3" variant="h6" color="primary" paragraph>
								{i18n.t("dashboard.messages.closed.title")}
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
					<Grid item xs={12}>
						<Typography component="h3" variant="h6" color="primary" paragraph align="center">
						Tutorial Pemakaian App
						</Typography>
						<Paper className={classes.fixedHeightPaperA}>
							<VerticalTabs />
						</Paper>
					</Grid>
					<Grid item xs={4}>
						<AuthorCard/>
					</Grid>
					<Grid item xs={4}>
						<Paper className={classes.fixedHeightPaperA}>
							<Typography variant="h5" gutterBottom>
								Branches Ranking
							</Typography>
							{branchData.length > 0 ? (
								<BranchListPaper branchData={branchData} />
							) : (
								<p>Loading data...</p>
							)}
						</Paper>
					</Grid>
				</Grid>
			</Container>
			<TicketTooltip/>
		</div>
	)
}

export default Dashboard