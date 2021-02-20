import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, Typography } from '@material-ui/core';
import InquiryForm from './inquiryForm';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const useStyles = makeStyles((theme) => ({
	root: {
		backgrounColor: theme.palette.primary.main,
		marginTop: 120
	},
	mainCard: {
		padding: 10
	},
	img: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	}
}));

export default function Banner() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Card elevation={4} className={classes.mainCard}>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={8}>
						<AliceCarousel autoPlay autoPlayInterval="3000">
							<img src="/galaxy.jpg" className={classes.img} alt="" />
							<img src="/scenery.jpg" className={classes.img} alt="" />
							<img src="/scenery1.jpg" className={classes.img} alt="" />
							<img src="/scenery1.jpg" className={classes.img} alt="" />
						</AliceCarousel>
					</Grid>
					<Grid item xs={12} sm={4}>
						<InquiryForm />
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
