import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { fade, Grid, Link, makeStyles, TextField, Typography } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
	root: {
		backgrounColor: theme.palette.primary.main
	},
	title: {
		flexGrow: 1
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: '30ch'
		}
	},
	buttonStyle: {
		margin: theme.spacing(0),
		color: '#ffffff'
	}
}));

export default function Login() {
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" color="secondary" onClick={handleClickOpen}>
				Login
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
					<Typography variant="h1">Login</Typography>
				</div>
				<DialogContent>
					<Grid container spacing={2} style={{ marginTop: 10 }}>
						<Grid item xs={12} sm={12}>
							<TextField
								id="User Name/email"
								variant="outlined"
								required
								fullWidth
								label="User Name/email"
								size="small"
							/>
						</Grid>
						<Grid item xs={12} sm={12}>
							<TextField
								id="password"
								variant="outlined"
								required
								fullWidth
								label="password"
								size="small"
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Grid container spacing={0} style={{ marginTop: 10 }}>
						<Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
							<Button variant="contained" size="medium" color="primary" className={classes.buttonStyle}>
								Signin
							</Button>
						</Grid>
						<Link href="/#">
							<Typography>Forget password ?</Typography>
						</Link>
						<Link href="/#">
							<Typography>Register</Typography>
						</Link>
					</Grid>
				</DialogActions>
			</Dialog>
		</div>
	);
}
