import { Card, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		padding: 20,
		width: '100%'
	},
	heading: {
		display: 'flex',
		justifyContent: 'center',
		color: '#f5f5f5'
	}
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.root}>
				<div className={classes.heading}>
					<Typography variant="h1">Stay in touch with us!</Typography>
				</div>
			</Card>
		</div>
	);
}
