
// import dynamic from 'next/dynamic'
// import Card from '../components/Card';
import { Row, Col } from 'react-bootstrap';
// import Head from 'next/head';
import Section from '../components/Section';
import Page from '../templates/Page';
// const Card = dynamic(() => import('../components/Card'));
// import SubHero from '../components/SubHero';
import styles from '../styles/Testimonials.module.scss';
import DominanceContact from '../components/DominanceContact/DominanceContact';

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
				bgImg="/new/brand.jpg"
			>
				<img class="bottom-curve" src="/new/page-header-bg-curve.png" alt=""></img>
				<h1 className="fs-3xl font-weight-bold" style={{color: '#000'}}>
                    Major Brands
				</h1>
                <ul style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
                    <li><a href="/">Home - </a></li>
                    <li className="active">Major Brands</li>
                </ul>
				{/* <p className="fs-md font-weight-bold text-gray-dark mb-20 nmt-2">
					Check out what our clients are saying about working with us.
				</p> */}
			</Section>
			{/* <SubHero tagline="real reviews from real brands."> */}
            <Row as="main" className={[styles.Testimonials, styles.ProductTable]}>
                {/* <Col md={4} options={{ max: 15, scale: 1.05 }}>
                        <Card>
                            <img
                                src="/new/brand-logo1.png"
                            />
                            <h4 className='home-man-tit'>TI</h4>
                            <p>
                                We design, manufacture, test and sell analog and embedded semiconductors in markets that include industrial, automotive, personal electronics, communications equipment and enterprise systems.
                            </p>
                        </Card>
                </Col> */}
                {getItem('new/brand-logo1.png', 'We design, manufacture, test and sell analog and embedded semiconductors in markets that include industrial, automotive, personal electronics, communications equipment and enterprise systems.')}
                {getItem('new/brand-logo2.png', 'We currently produce a wide range of innovative products—including data converters, amplifiers and linear products, radio frequency (RF) ICs, power management products, sensors based on')}
                {getItem('new/brand-logo3.png', 'We create and deliver our technology as microchips (or just “chips”), that form a mostly invisible part of the world we live in today. Chips from ST embedding the most advanced innovations are an essential part')}

                {getItem('new/brand-logo4.png', 'We build solutions—not just products—that enhance the capabilities of people, organizations and the world at large. We are committed to keeping our customers ahead of the competition and helping them to prepare for change.')}
                {getItem('new/brand-logo5.png', 'To develop a safer, healthier, greener, and smarter world, our goal is to make every endpoint intelligent by offering product solutions in the automotive, industrial, infrastructure and IoT markets.')}
                {getItem('new/brand-logo6.png', 'The Vishay journey began with one man, Dr. Felix Zandman, and a revolutionary technology. From there we would grow and strengthen over decades, arriving where we are today: one of the world’s most trusted manufacturers of electronic components. From discrete semiconductors to passive components; from the smallest diode to the most powerful capacitor,')}

                {getItem('new/brand-logo7.png', "Winbond is a Specialty memory IC company. From product design, research and development, and wafer fabrication to the marketing of brand name products, Winbond endeavors to provide its global clientele with total memory solutions. Winbond's major product lines include Code Storage Flash Memory, TrustME® Secure Flash,Specialty DRAM and Mobile DRAM. The Company is the only one in Taiwan with the ability to develop DRAM and FLASH products in-house.")}
                {getItem('new/brand-logo8.png', "We will push innovation to create intelligent power and sensing technologies that solve the most challenging customer problems. Our employees are inspired each day to increase stakeholder value through high-quality and high-value products and services.")}
                {getItem('new/brand-logo9.png', "At Maxim Integrated, we’re solving engineering problems and empowering design innovation, enabling our customers to create products that shape our world. Our innovative and high-performance analog and mixed-signal products and technologies make systems smaller and smarter, with enhanced security and increased energy efficiency.")}
            </Row>
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
