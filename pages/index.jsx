// import Head from 'next/head';
// import Link from 'next/link';
// import Button from '../components/Button/Button';
// import WordRiver from '../components/WordRiver';
// import CaseStudyCard from '../components/CaseStudyCard';
// import svvc from '../utilities/caseStudies/svvc';
// import fng from '../utilities/caseStudies/fng';
// import pff from '../utilities/caseStudies/pff';

import dynamic from 'next/dynamic'
import { Col } from 'react-bootstrap';
const Section = dynamic(() => import('../components/Section'));
const SubHero = dynamic(() => import('../components/SubHero'));
const Page = dynamic(() => import('../templates/Page'));
const DominanceContact = dynamic(() => import('../components/DominanceContact'));
const Card = dynamic(() => import('../components/Card'));
import AboutUsCom from '../components/MyCom/AboutUsCom';
import NewCom from '../components/MyCom/NewCom';
import ProductCom from '../components/MyCom/ProductCom';
import BrandCom from '../components/MyCom/BrandCom';
import SolutionCom from '../components/MyCom/SolutionCom';

// import Section from '../components/Section';
// import SubHero from '../components/SubHero';
// import Page from '../templates/Page';
// import DominanceContact from '../components/DominanceContact';
// import Card from '../components/Card';

import styles from '../styles/Home.module.scss';

const Home = () => {
	return (
		<Page className={styles.Home}>
			 {/* bg-gray-dark */}
			<Section
				className={`${styles.homeHero} text-center align-items-center`}
				hero
				bgImg="/two/bg.png"
				// bgImg="/new/header-bg.jpg"
				// bgImg="/bgs/designsystem_bg@2x.png"
				style={{height: '750px', backgroundImage: `url('/two/bg.png')`}}
			>
				{/* <div style={{height: '50px'}}></div> */}
				<div style={{position: 'relative', display: 'flex', alignItems: 'center', marginTop: '-100px', paddingTop: '10px'}}>
					<img
						className="slider-dotted position-absolute" src="/two/banner-dotted.png"
						alt="" style={{left: '-116px', top: '0px'}} />
					<div>
						<h1 className="font-weight-bold mb-20"  style={{width: '500px',fontSize: '55px', textAlign: 'left', lineHeight: '60px'}}>
						QUALITY SUPPLY CHAIN FOR ELECTRONIC COMPONENTS
<span className="text-primary"></span>
						</h1>
						<div style={{width: '500px', textAlign: 'left', color: '#000', fontSize: '14px !important', }}>
						One-stop sales from thousands of top manufacturers worldwide. 
						</div>
						<div style={{width: '500px', textAlign: 'left', color: '#000', fontSize: '14px !important', }}>Immediate delivery available.</div>
					</div>
					<div
						className="slider-img1 wow fadeInRight" data-wow-duration="1.5s"
						style={{visibility: 'visible', animationDuration: '1.5s', animationName: 'fadeInRight'}}>
							<img className="bounce-animate" src="/two/slider-img.png" alt="" />
						</div>
					{/* <img src="/two/slider-img.png" style={{width: '500px', marginLeft: '100px'}} /> */}
				</div>

			</Section>

			<AboutUsCom />
			<ProductCom />
			<BrandCom />
			<SolutionCom />
			<NewCom />


			{/* <SubHero tagline="We have systems in place to birth excellence.">
				<Col sm options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold text-gray-dark mb-20">
							Branding
						</h3>
						<p>
							Branding is a strategic approach to creating and
							representing a unique and effective brand for your
							business.
						</p>
						<Link href="/services/branding">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col as={Tilt} sm options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold mb-20 text-gray-dark">
							Website Development
						</h3>
						<p>
							Websites are an awesome and mandatory way to
							showcase your brand with this forever growing trend
							of the internet.
						</p>
						<Link href="/services/website-development">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col as={Tilt} sm options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold mb-20 text-gray-dark">
							Software Development
						</h3>
						<p>
							Websites are an awesome and mandatory way to
							showcase your brand with this forever growing trend
							of the internet.
						</p>
						<Link href="/services/software-development">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
			</SubHero>
			<Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'adobe illustrator',
						'reactjs',
						'logos',
						'consistency',
						'docker',
						'vscode',
						'branding',
						'ios',
						'systems',
						'custom',
						'sketches',
						'git',
						'button',
						'mobile app',
						'efficiency',
						'storybook',
						'api',
						'icons',
						'dashboard',
						'grid',
						'hooks',
						'strategy',
						'launch',
						'messaging',
					]}
					colors={['#e6fd36', '#454545', '#A5A5A5']}
				/>
			</Section>
			<Section
				containerClass="font-display"
				className="text-center font-weight-light pb-50"
			>
				<hr className="primary small-width" />
				<p className="fw-light fs-sm mw-lg">
					TKC exists to establish industry visual dominance for SMB’s
					through impeccable branding, cohesive website development,
					and intentional software application experiences.
				</p>
			</Section> */}
			{/* <Section
				containerClass="font-display"
				className="text-center font-weight-light bg-gray text-white py-70"
			>
				<h2 className="text-center text-primary font-weight-bold">
					Featured dominance worthy brands
				</h2>
				<CaseStudyCard casestudy={svvc} />
				<CaseStudyCard casestudy={fng} />
				<CaseStudyCard casestudy={pff} />
				<h2 className="text-center text-primary font-weight-bold mt-30">
					Additional dominant brands we’ve worked with.
				</h2>
				<Row
					md={4}
					xs={6}
					className="my-50 mx-auto mw-lg align-items-center"
				>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_kinemedix_logo.svg"
								alt="Kinemedix Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_vegas_flag_logo.svg"
								alt="Vegas Flag Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_mysologym_logo.svg"
								alt="Mysologym Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_project_guardian_logo.svg"
								alt="Project Guardian Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_firefly_energy_logo.svg"
								alt="Firefly Energy Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_grubber_logo.svg"
								alt="Grubber Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_cheatsheet_logo.svg"
								alt="Showbiz Cheatsheet Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
					<Col xs={6} className={`p-md-30 ${styles.darkLogos}`}>
						<Tilt>
							<img
								src="/logos/gray_the10_logo.svg"
								alt="The 10 Jewelry Custom Logo by The Kirk Concept"
							/>
						</Tilt>
					</Col>
				</Row>
			</Section> */}
			<DominanceContact />
		</Page>
	);
};

export default Home;
