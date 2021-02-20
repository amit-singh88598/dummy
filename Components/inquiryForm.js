import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
			// width: '25ch'
		}
	},
	heading: {
		textAlign: 'center',
		fontSize: '1.5em',
		display: 'flex',
		justifyContent: 'center'
	},
	buttonStyle: {
		margin: theme.spacing(1),
		color: '#ffffff'
	}
}));

export default function InquiryForm() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Card elevation={3} style={{ padding: 10 }}>
				<Typography className={classes.heading} variant="h1">
					INQUIRY FORM
				</Typography>
				<Grid container spacing={0} style={{ marginTop: 10 }}>
					<Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
						<TextField
							id="Full Name"
							variant="outlined"
							required
							fullWidth
							label="Full Name"
							size="small"
						/>
					</Grid>
					<Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
						<TextField id="email" variant="outlined" required fullWidth label="email" size="small" />
					</Grid>
					<Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
						<TextField
							id="message"
							label="Message"
							multiline
							fullWidth
							rows={4}
							placeholder="Message"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
						<Button variant="contained" size="medium" color="primary" className={classes.buttonStyle}>
							SUBMIT
						</Button>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
