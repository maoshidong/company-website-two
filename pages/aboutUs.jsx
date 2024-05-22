
import dynamic from 'next/dynamic'
const SubHero = dynamic(() => import('../components/SubHero'));
// import Card from '../components/Card';
import { Row, Col } from 'react-bootstrap';
import Section from '../components/Section';
import Page from '../templates/Page';
// const Card = dynamic(() => import('../components/Card'));
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
				className={`${styles.contact} bg-gray-dark text-center align-items-center h600`}
				hero
				bgImg="/two/about.jpg"
			>
				{/* <p className="fs-md font-weight-bold text-gray-dark mb-20 nmt-2">
					Check out what our clients are saying about working with us.
				</p> */}
			</Section>
			<SubHero>

			<div className='mt-100' style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
				<img src="/two/feature-img.png" style={{width: '600px'}} />
					<div className='about-section' style={{marginLeft: '50px'}}>
						<p className="title">About Us</p>
						<p>
						ALPHATEC ENTERPRISE CORP LIMITED is one of the market's most experienced distributors of electronic- and computer components. Since starting out in 2000 we have built up long-term relationships with producers, distributors and collaborative partners throughout the world. Welcome the BOM from OEM, ODM AND EMS. Our Global Reach spans The Americas, Europe, and Asia.
ALPHATEC ENTERPRISE CORP LIMITED continually invests in tools and partnerships to ensure product quality maintains the highest standard. With over 24 years of product management experience combined with strategic Test Laboratory partnerships , you can be confident that the product you receive from ALPHATEC is of the highest quality.
						</p>
			{/* <p>
              Since our establishment, the company has been adhering to the tenet of "integrity, professionalism and cooperation". Under the belief of quality first, ZSM not only guarantees the quality of all supplies but also price advantages. We provide technical support and fast and flexible delivery according to customer needs. In addition, the company is committed to cultivating professional and experienced sales team to support customers with high-quality services.
            </p>
			<p>Over the years, ZSM has established long-term relationship with many clients and a good reputation in the industry. We sincerely thank all suppliers and customers for their supports. We hope to continue working together to create a better tomorrow.</p> */}
					</div>
					
				</div>
			</SubHero>
			{/* <div className='' style={{paddingTop: '80px'}}>
				<SubHero>
					<h1>Yong Rong International Limited</h1>
				<div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>

						<div className='about-section' style={{marginLeft: '50px'}}>
							<p className="title">About Us</p>
							<p>
								Established In Taiwan Since 201 6, We Have Good Channel And Relationships With The Franchise, All The Parts We Sell Are Brand New And Original. Parts With Mfr Label, The Quality Is Guaranteed. We Are Looking Forward To Establishing Long-Term Business.
							</p>

						</div>
						
					</div>
				</SubHero>
			</div> */}
			<DominanceContact />
		</Page>
	);
};

export default MainBrand;
