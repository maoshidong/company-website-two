
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
				bgImg="/new/about.jpg"
			>
				<img class="bottom-curve" src="/new/page-header-bg-curve.png" alt=""></img>
				<h1 className="fs-3xl font-weight-bold" style={{color: '#000'}}>
                    About Us
				</h1>
                <ul style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
                    <li><a href="/">Home - </a></li>
                    <li className="active">About Us</li>
                </ul>
				{/* <p className="fs-md font-weight-bold text-gray-dark mb-20 nmt-2">
					Check out what our clients are saying about working with us.
				</p> */}
			</Section>
			<div className='' style={{paddingTop: '80px'}}>
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
			</div>
			<DominanceContact />
		</Page>
	);
};

export default MainBrand;
