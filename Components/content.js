import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		backgrounColor: theme.palette.primary.main,
		marginTop: 20
	},
	mainCard: {
		padding: 20
	}
}));

const content = [
	{
		body:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu enenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra vestibulum. Maecenas ipsum lacus, lacinia quis posuere .Integer eu nibh at isi ullamcorper sagittis id vel leo. faucibus libero, at maximus nisl suscipit posuer ibero, at maximus nisl suscipit posuere. libero, at maximus nisl suscipit posuere.'
	},
	{
		body:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu enenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra vestibulum. Maecenas ipsum lacus, lacinia quis posuere .Integer eu nibh at isi ullamcorper sagittis id vel leo. faucibus libero, at maximus nisl suscipit posuer ibero.'
	},
	{
		body:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu enenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra vestibulum. Maecenas ipsum lacus, lacinia quis posuere .Integer eu nibh at isi ullamcorper sagittis id vel leo.'
	}
];

export default function Content() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Card elevation={4} className={classes.mainCard}>
				<Grid container spacing={4}>
					{content.map((item, index) => (
						<Grid item xs={12} sm={4} key={index}>
							<Card elevation={0}>
								<Typography>{item.body}</Typography>
							</Card>
						</Grid>
					))}
				</Grid>
			</Card>
		</div>
	);
}
