
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
				bgImg="/new/cont.jpg"
			>
                <img class="bottom-curve" src="/new/page-header-bg-curve.png" alt=""></img>
				<h1 className="fs-3xl font-weight-bold" style={{color: '#000'}}>
                Conatct Us
				</h1>
                <ul style={{display: 'flex', justifyContent: 'center', fontSize: '20px'}}>
                    <li><a href="/">Home - </a></li>
                    <li className="active">&nbsp;Conatct Us</li>
                </ul>

				{/* <p className="fs-md font-weight-bold text-gray-dark mb-20 nmt-2">
					Check out what our clients are saying about working with us.
				</p> */}
			</Section>
            <Row as="main" className={[styles.Testimonials, styles.ProductTable]} style={{marginTop: '80px'}}>
                <Col md={4} options={{ max: 15, scale: 1.05 }} style={{marginBottom: '30px',}}>
                    <Card>
                        <h4>Working Hours</h4>
                        <div>(Mon to Fri): 9.00 AM to 06.00 PM</div>
                        <div style={{opacity: '0'}}>(Mon to Fri): 9.00 AM to 06.00 PM</div>
                    </Card>
                </Col>
                <Col md={4} options={{ max: 15, scale: 1.05 }} style={{marginBottom: '30px'}}>
                    <Card>
                        <h4>Office Address</h4>
                        <div>2F.-1, No. 9, Jiuhe 2nd St.,  Zhongli Dist. Taoyuan City, 320 Taiwan</div>

                    </Card>
                </Col>
                <Col md={4} options={{ max: 15, scale: 1.05 }} style={{marginBottom: '30px', height: '150px'}}>
                    <Card>
                        <h4>Contact Details</h4>
                        <div>Tel: 00886-9-58719211</div>
                        <div>Email: sales@yongrongtw.com</div>
                    </Card>
                </Col>
            </Row>
			<DominanceContact />
		</Page>
	);
};

export default MainBrand;
