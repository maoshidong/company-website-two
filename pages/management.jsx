
import dynamic from 'next/dynamic'
// import Card from '../components/Card';
import { Row, Col } from 'react-bootstrap';
// import Head from 'next/head';
import Section from '../components/Section';
import Page from '../templates/Page';
const Card = dynamic(() => import('../components/Card'));
// import SubHero from '../components/SubHero';
import styles from '../styles/Testimonials.module.scss';
import DominanceContact from '../components/DominanceContact/DominanceContact';
import BrandCom from '../components/MyCom/BrandCom';

const MainBrand = ({ props }) => {
    const getItem = (imgSrc, des) => {
        return <Col md={4} options={{ max: 15, scale: 1.05 }} style={{marginBottom: '30px'}}>
            <Card>
				<h5 className="f-700 text-center pt-30">Infineon</h5>
                <img src={imgSrc} style={{margin: '0 auto'}} />
                <div>{des}</div>
            </Card>
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
				bgImg="/two/brand.jpg"
			>

			</Section>
			{/* <SubHero tagline="real reviews from real brands."> */}
			<BrandCom />
            {/* <Row as="main" className={[styles.Testimonials, styles.ProductTable]}>
                {getItem('new/brand-logo1.png', 'We design, manufacture, test and sell analog and embedded semiconductors in markets that include industrial, automotive, personal electronics, communications equipment and enterprise systems.')}
                {getItem('new/brand-logo2.png', 'We currently produce a wide range of innovative products—including data converters, amplifiers and linear products, radio frequency (RF) ICs, power management products, sensors based on')}
                {getItem('new/brand-logo3.png', 'We create and deliver our technology as microchips (or just “chips”), that form a mostly invisible part of the world we live in today. Chips from ST embedding the most advanced innovations are an essential part')}
            </Row> */}
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
			{/* </SubHero> */}
			<DominanceContact />
		</Page>
	);
};

export default MainBrand;
