import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	multFieldLine: {
		display: "flex",
		"& > *:not(:last-child)": {
			marginRight: theme.spacing(1),
		},
	},
}));

const ScheduleModal = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Dialog
				maxWidth="xs"
				fullWidth
				scroll="paper"
			>
				<DialogTitle id="form-dialog-title">
					{"Message Title"}
				</DialogTitle>
				<DialogContent dividers>
					<div className={classes.multFieldLine}>
						<FormControl
							variant="outlined"
							fullWidth
						>
							<TextField variant="outlined" placeholder="Contact" />
						</FormControl>
					</div>
					<br />
					<div className={classes.multFieldLine}>
						<TextField
							rows={9}
							multiline={true}
							label={"Body"}
							variant="outlined"
							margin="dense"
							fullWidth
						/>
					</div>
					<br />
					<div className={classes.multFieldLine}>
						<TextField
							label={"Send At"}
							type="datetime-local"
							InputLabelProps={{
							  shrink: true,
							}}
							variant="outlined"
							fullWidth
						/>
					</div>
				</DialogContent>
				<DialogActions>
					<Button
						color="secondary"
						variant="outlined"
					>
						{"Cancel"}
					</Button>
					<Button
						color="primary"
						variant="contained"
					>
						{"Submit"}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ScheduleModal;
