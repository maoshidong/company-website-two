
import dynamic from 'next/dynamic'
// const SubHero = dynamic(() => import('../components/SubHero'));
const Card = dynamic(() => import('../components/Card'));
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
				className={`${styles.contact} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/two/cont.jpg"
			>
                {/* <img className="bottom-curve" src="/new/page-header-bg-curve.png" alt=""></img> */}
				{/* <h1 className="fs-3xl font-weight-bold" style={{color: '#000'}}>
                Conatct Us
				</h1>
                <ul style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
                    <li><a href="/">Home - </a></li>
                    <li className="active">&nbsp;Conatct Us</li>
                </ul> */}
			</Section>
            <Row as="main" className={[styles.Testimonials, styles.ProductTable, 'justify-content-center']} style={{marginTop: '80px'}}>
                <div className="connected-info mb-50">
                    <div className="title">
                        <h3 className="f-700 mb-40">ALPHATEC ENTERPRISE CORP LIMITED</h3>
                        <p className="mb-0">To provide customers with fast and efficient pragmatic service and perfect after-sales technical support</p>
                    </div>
                    <div className="connected-info-text mt-30">
                        <p className="mb-10"><span className="d-inline-block black-color f-700 pr-15">Add</span>5F, No.52-1, Guandu Road Pei-Tou District, Taipei, Taiwan</p>
                        <p className="mb-10"><span className="d-inline-block black-color f-700 pr-15">Tel</span>886-2-22941608</p>
                        <p className="mb-10"><span className="d-inline-block black-color f-700 pr-15">Email</span>sales@twalpha.com</p>
                        
                    </div>
                </div>
            </Row>
			<DominanceContact />
		</Page>
	);
};

export default MainBrand;
