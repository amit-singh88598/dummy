import { Container, Typography } from '@material-ui/core';
import Banner from '../Components/banner';
import Content from '../Components/content';
import Footer from '../Components/footer';
import Header from '../Components/header';
import Map from '../Components/map';
export default function Home() {
	return (
		<div>
			<Header />
			<Container>
				<Banner />
				<Content />
				<Content />
				<Content />
				<Map />
			</Container>
			<Footer />
		</div>
	);
}
