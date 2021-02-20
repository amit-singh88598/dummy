import * as React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Search } from '@material-ui/icons';
import { InputBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		backgrounColor: theme.palette.primary.main
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	toggleButton: {
		[theme.breakpoints.between('sm', 'xl')]: {
			display: 'none'
		}
	},
	navLink: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
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
			width: '50ch'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '40ch'
		}
	}
}));

const navLinks = [
	{
		href: '/#',
		name: 'About Us'
	},
	{
		href: '/#',
		name: 'Contact Us'
	},
	{
		href: '/#',
		name: 'Service'
	}
];

export default function Header() {
	// Header seaction
	const classes = useStyles();
	const [ open, setOpen ] = React.useState(false);

	const toggleDrawer = () => {
		// Toggle Drawer for mobile view
		if (open == true) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	};

	const list = () => (
		// List for mobile view on click at toggle button
		<div role="presentation" className={classes.root}>
			<List>
				{navLinks.map((item) => (
					<ListItem key={item.name}>
						<Link href={item.href} key={item.name}>
							<Button color="secondary"> {item.name} </Button>
						</Link>
					</ListItem>
				))}
				<ListItem>
					<Link href="/joinUs">
						<Button style={{ borderRadius: 50 }} color="secondary" variant="outlined">
							Login
						</Button>
					</Link>
				</ListItem>
			</List>
		</div>
	);

	return (
		<div>
			<SwipeableDrawer
				anchor="right"
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				className={classes.root}
			>
				{list()}
			</SwipeableDrawer>

			<AppBar position="absolute">
				<Toolbar variant="dense">
					<Link href="/">
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<img src="/logo.png" width="70" height="50" style={{ marginTop: 5, marginBottom: 5 }} />
						</IconButton>
					</Link>
					<div variant="h6" className={classes.title}>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<Search style={{ color: '#ffffff' }} />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>
					</div>
					<div className={classes.navLink}>
						{navLinks.map((item) => (
							<Link href={item.href} key={item.name}>
								<Button style={{ color: '#f5f5f5' }}> {item.name}</Button>
							</Link>
						))}
						<Link href="/joinUs">
							<Button style={{ borderRadius: 50 }} color="secondary" variant="outlined">
								Login
							</Button>
						</Link>
					</div>
					<IconButton
						edge="start"
						className={classes.toggleButton}
						onClick={toggleDrawer}
						// Toggle button

						aria-label="menu"
					>
						<MenuIcon style={{ color: '#f5f5f5' }} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

// import * as React from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Link from 'next/link';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import { Search } from '@material-ui/icons';
// import {
// 	Dialog,
// 	DialogActions,
// 	DialogContent,
// 	DialogContentText,
// 	DialogTitle,
// 	Grid,
// 	InputBase,
// 	Slide,
// 	TextField
// } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		backgrounColor: theme.palette.primary.main
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2)
// 	},
// 	toggleButton: {
// 		[theme.breakpoints.between('sm', 'xl')]: {
// 			display: 'none'
// 		}
// 	},
// 	navLink: {
// 		[theme.breakpoints.down('sm')]: {
// 			display: 'none'
// 		}
// 	},
// 	title: {
// 		flexGrow: 1
// 	},
// 	search: {
// 		position: 'relative',
// 		borderRadius: theme.shape.borderRadius,
// 		backgroundColor: fade(theme.palette.common.white, 0.15),
// 		'&:hover': {
// 			backgroundColor: fade(theme.palette.common.white, 0.25)
// 		},
// 		marginRight: theme.spacing(2),
// 		marginLeft: 0,
// 		width: '100%',
// 		[theme.breakpoints.up('sm')]: {
// 			marginLeft: theme.spacing(3),
// 			width: '30ch'
// 		}
// 	},
// 	searchIcon: {
// 		padding: theme.spacing(0, 2),
// 		height: '100%',
// 		position: 'absolute',
// 		pointerEvents: 'none',
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	},
// 	inputRoot: {
// 		color: 'inherit'
// 	},
// 	inputInput: {
// 		padding: theme.spacing(1, 1, 1, 0),
// 		// vertical padding + font size from searchIcon
// 		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
// 		transition: theme.transitions.create('width'),
// 		width: '100%',
// 		[theme.breakpoints.up('md')]: {
// 			width: '20ch'
// 		}
// 	},
// 	heading: {
// 		textAlign: 'center',
// 		fontSize: '1.5em',
// 		display: 'flex',
// 		justifyContent: 'center'
// 	},
// 	buttonStyle: {
// 		margin: theme.spacing(1),
// 		color: '#ffffff'
// 	}
// }));

// const navLinks = [
// 	{
// 		href: '/#',
// 		name: 'About Us'
// 	},
// 	{
// 		href: '/#',
// 		name: 'Contact Us'
// 	},
// 	{
// 		href: '/#',
// 		name: 'Service'
// 	}
// ];

// // const Transition = React.forwardRef(function Transition(props, ref) {
// // 	return <Slide direction="up" ref={ref} {...props} />;
// // });

// export default function Header() {
// 	// Header seaction
// 	const classes = useStyles();
// 	// const [ opendialog, setOpenDialog ] = React.useState(false);

// 	// const handleClickOpen = () => {
// 	// 	setOpenDialog(true);
// 	// };

// 	// const handleClose = () => {
// 	// 	setOpenDialog(false);
// 	// };

// 	const toggleDrawer = () => {
// 		// Toggle Drawer for mobile view
// 		if (open == true) {
// 			setOpen(false);
// 		} else {
// 			setOpen(true);
// 		}
// 	};

// 	const list = () => (
// 		// List for mobile view on click at toggle button
// 		<div role="presentation" className={classes.root}>
// 			<List>
// 				{navLinks.map((item) => (
// 					<ListItem key={item.name}>
// 						<Link href={item.href} key={item.name}>
// 							<Button color="secondary"> {item.name} </Button>
// 						</Link>
// 					</ListItem>
// 				))}
// 				<ListItem>
// 					<Link href="/joinUs">
// 						<Button style={{ borderRadius: 50 }} color="secondary" variant="outlined">
// 							Login
// 						</Button>
// 					</Link>
// 				</ListItem>
// 			</List>
// 		</div>
// 	);

// 	return (
// 		<div>
// 			<SwipeableDrawer
// 				anchor="right"
// 				open={open}
// 				onClose={() => setOpen(false)}
// 				onOpen={() => setOpen(true)}
// 				className={classes.root}
// 			>
// 				{list()}
// 			</SwipeableDrawer>

// 			<AppBar position="absolute">
// 				<Toolbar variant="dense">
// 					<Link href="/">
// 						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
// 							<img src="/logo.png" width="70" height="50" style={{ marginTop: 5, marginBottom: 5 }} />
// 						</IconButton>
// 					</Link>
// 					<div variant="h6" className={classes.title}>
// 						<div className={classes.search}>
// 							<div className={classes.searchIcon}>
// 								<Search style={{ color: '#ffffff' }} />
// 							</div>
// 							<InputBase
// 								placeholder="Search…"
// 								classes={{
// 									root: classes.inputRoot,
// 									input: classes.inputInput
// 								}}
// 								inputProps={{ 'aria-label': 'search' }}
// 							/>
// 						</div>
// 					</div>
// 					<div className={classes.navLink}>
// 						{navLinks.map((item) => (
// 							<Link href={item.href} key={item.name}>
// 								<Button style={{ color: '#f5f5f5' }}> {item.name}</Button>
// 							</Link>
// 						))}
// 						<div>
// 							<Link href="/joinUs">
// 								{/* <Button
// 									style={{ borderRadius: 50 }}
// 									color="secondary"
// 									variant="outlined"
// 									onClick={handleClickOpen}
// 								>
// 									Login
// 								</Button>

// 								<Dialog
// 									opendialog={setOpenDialog}
// 									TransitionComponent={Transition}
// 									keepMounted
// 									onClose={handleClose}
// 									aria-labelledby="alert-dialog-slide-title"
// 									aria-describedby="alert-dialog-slide-description"
// 								>
// 									<DialogContent>
// 										<Typography className={classes.heading} variant="h1">
// 											Login
// 										</Typography>
// 										<Grid container spacing={0} style={{ marginTop: 10 }}>
// 											<Grid
// 												item
// 												xs={12}
// 												sm={12}
// 												style={{ display: 'flex', justifyContent: 'center' }}
// 											>
// 												<TextField
// 													id="User Name/email"
// 													variant="outlined"
// 													required
// 													fullWidth
// 													label="User Name/email"
// 													size="small"
// 												/>
// 											</Grid>
// 											<Grid
// 												item
// 												xs={12}
// 												sm={12}
// 												style={{ display: 'flex', justifyContent: 'center' }}
// 											>
// 												<TextField
// 													id="password"
// 													variant="outlined"
// 													required
// 													fullWidth
// 													label="password"
// 													size="small"
// 												/>
// 											</Grid>

// 											<Grid
// 												item
// 												xs={12}
// 												sm={12}
// 												style={{ display: 'flex', justifyContent: 'center' }}
// 											>
// 												<Button
// 													variant="contained"
// 													size="medium"
// 													color="primary"
// 													className={classes.buttonStyle}
// 												>
// 													Signin
// 												</Button>
// 											</Grid>
// 											<Link href="/#">
// 												<Typography>Forget password ?</Typography>
// 											</Link>
// 											<Link href="/#">
// 												<Typography>Register</Typography>
// 											</Link>
// 										</Grid>
// 									</DialogContent>
// 								</Dialog> */}
// 							</Link>
// 						</div>
// 					</div>
// 					<IconButton
// 						edge="start"
// 						className={classes.toggleButton}
// 						onClick={toggleDrawer}
// 						// Toggle button

// 						aria-label="menu"
// 					>
// 						<MenuIcon style={{ color: '#f5f5f5' }} />
// 					</IconButton>
// 				</Toolbar>
// 			</AppBar>
// 		</div>
// 	);
// }
