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

// import Section from '../components/Section';
// import SubHero from '../components/SubHero';
// import Page from '../templates/Page';
// import DominanceContact from '../components/DominanceContact';
// import Card from '../components/Card';

import styles from '../styles/Home.module.scss';

const Home = () => {
	return (
		<Page className={styles.Home}>
			
			<Section
				className={`${styles.homeHero} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/new/header-bg.jpg"
				// bgImg="/bgs/designsystem_bg@2x.png"
			>
				<div style={{height: '50px'}}></div>
				<div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
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
					<img src="/new/header-right-img.png" style={{width: '500px', marginLeft: '100px'}} />
				</div>
				{/* <h1 className="fs-xl font-weight-bold text-white-50">
					We unlock brand
					<br />
					<span className="text-white fs-8xl d-block">
						dominance<span className="text-primary">.</span>
					</span>
				</h1>
				<p className="fs-md font-weight-bold text-white-50 mb-20 nmt-4">
					branding. web development.{' '}
					<span className="text-primary">app development.</span>
				</p> */}
				{/* <Link href="/get-started">
					<Button variant="primary" className="inline-block">
						get started
					</Button>
				</Link> */}
			</Section>
			{/* tagline="Yong Rong International Limited" */}
			<div className='service-section' style={{paddingTop: '80px'}}>
			<SubHero>
				<h1>Yong Rong International Limited</h1>
			<div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
				<img src="/new/about-left-img.png" style={{width: '500px'}} />
					<div className='about-section' style={{marginLeft: '50px'}}>
						<p className="title">About Us</p>
						<p>
							Established In Taiwan Since 201 6, We Have Good Channel And Relationships With The Franchise, All The Parts We Sell Are Brand New And Original. Parts With Mfr Label, The Quality Is Guaranteed. We Are Looking Forward To Establishing Long-Term Business.
						</p>
			{/* <p>
              Since our establishment, the company has been adhering to the tenet of "integrity, professionalism and cooperation". Under the belief of quality first, ZSM not only guarantees the quality of all supplies but also price advantages. We provide technical support and fast and flexible delivery according to customer needs. In addition, the company is committed to cultivating professional and experienced sales team to support customers with high-quality services.
            </p>
			<p>Over the years, ZSM has established long-term relationship with many clients and a good reputation in the industry. We sincerely thank all suppliers and customers for their supports. We hope to continue working together to create a better tomorrow.</p> */}
					</div>
					
				</div>
			</SubHero>
			</div>

			<SubHero>
				<h1 style={{paddingTop: '50px'}}>Our Advantage Brand</h1>
				<div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
					<Col md={4} options={{ max: 15, scale: 1.05 }}>
						<Card>
							{/* <h3 className="fs-sm font-weight-bold pub-color-gray mb-20">
								Branding
							</h3> */}
							<img
								src="/new/brand-logo1.png"
							/>
							<h4 className='home-man-tit'>TI</h4>
							<p>
								We design, manufacture, test and sell analog and embedded semiconductors in markets that include industrial, automotive, personal electronics, communications equipment and enterprise systems.
							</p>
							{/* <ul className={styles.cardList}>
								<li>Audit</li>
								<li>Research</li>
								<li>Brand Strategy</li>
								<li>Messaging</li>
							</ul>
							<Link href="/services/branding">
								<a className="link">Learn More</a>
							</Link> */}
						</Card>
					</Col>
					{/* as={Tilt} */}
					<Col md={4} options={{ max: 15, scale: 1.05 }}>
						<Card>
							{/* <h3 className="fs-sm font-weight-bold pub-color-gray mb-20">
								Website Development
							</h3> */}
							<img
								src="/new/brand-logo2.png"
							/>
							<div className="service-details">
								<h4 className='home-man-tit'>ADI</h4>
								<p>
								We currently produce a wide range of innovative products—including data converters, amplifiers and linear products, radio frequency (RF) ICs, power management products, sensors based on
								</p>
								{/* <a href="/index.php?case=archive&amp;act=list&amp;catid=7">Learn More</a> */}
							</div>
							{/* <ul className={styles.cardList}>
								<li>Responsive Design</li>
								<li>Search Engine Optimization</li>
								<li>Dynamic Content</li>
							</ul>
							<Link href="/services/website-development">
								<a className="link">Learn More</a>
							</Link> */}
						</Card>
					</Col>
					<Col md={4} options={{ max: 15, scale: 1.05 }}>
						<Card>
							{/* <h3 className="fs-sm font-weight-bold pub-color-gray mb-20">
								Software Development
							</h3> */}
							<img
								src="/new/brand-logo3.png"
							/>
							<div className="service-details">
								<h4 className='home-man-tit'>ST</h4>
								<p>
								We create and deliver our technology as microchips (or just “chips”), that form a mostly invisible part of the world we live in today. Chips from ST embedding the most advanced innovations are an essential part
								</p>
			
							</div>
						</Card>
					</Col>
				</div>
				
			</SubHero>
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
