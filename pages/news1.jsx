
// import dynamic from 'next/dynamic'
// import Card from '../components/Card';
import { Row, Col } from 'react-bootstrap';
// import Head from 'next/head';
import Section from '../components/Section';
import Page from '../templates/Page';
import Card from '../components/Card';
import SubHero from '../components/SubHero';
import styles from '../styles/Testimonials.module.scss';
import DominanceContact from '../components/DominanceContact/DominanceContact';
import NewCom from '../components/MyCom/NewCom';

const MainBrand = ({ props }) => {
    const getItem = (imgSrc, des) => {
        return <Col md={4} options={{ max: 15, scale: 1.05 }} style={{marginBottom: '30px'}}>
            {/* <Card> */}
                <img src={imgSrc} />
                <div>{des}</div>
            {/* </Card> */}
        </Col>
    }
	return (
		<Page
			title="Testimonials for The Kirk Concept"
			description="Testimonials to check out what our clients are saying about working with us."
		>
			<Section
				className={`${styles.contact} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/two/news.jpg"
				style={{height: '550px', backgroundImage: `url('/two/news.jpg')`}}
			>
	
			</Section>
			<SubHero >
				<NewCom />

			</SubHero>
				{/* <Row as="main" className={`${styles.Testimonials}`}>
					{testimonials.map((review, index) => {
						return (
							<Col
								md={4}
								sm={6}
								xs={12}
								key={index}
								className="mb-32"
							>
								<Card>
									<p>{review.review}</p>
									<p className="text-gray-dark">
										<strong>- {review.author}</strong>
									</p>
								</Card>
							</Col>
						);
					})}
				</Row> */}
			
			<DominanceContact />
		</Page>
	);
};

export default MainBrand;
