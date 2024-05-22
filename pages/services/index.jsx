import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Section from '../../components/Section';
import SubHero from '../../components/SubHero';
import Page from '../../templates/Page';
import WordRiver from '../../components/WordRiver';
import CaseStudyCard from '../../components/CaseStudyCard';
import DominanceContact from '../../components/DominanceContact';
import Card from '../../components/Card';
import svvc from '../../utilities/caseStudies/svvc';
import fng from '../../utilities/caseStudies/fng';
import pff from '../../utilities/caseStudies/pff';
import styles from '../../styles/Whatwedo.module.scss';

const WhatWeDo = () => {
	return (
		<Page
			title="Services | The Kirk Concept"
			description="Services offered by The Kirk Concept include logo design, branding, website development and software development."
			className={styles.Whatwedo}
		>
			<Section
				className={`${styles.workHero} bg-gray-dark text-center align-items-center`}
				hero
				// bgImg="/new/header-bg.jpg"
				bgImg="/bgs/whatwedo_bg.png"
			>
				<div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
					<div>
						{/* <h1 className="fs-8xl font-weight-bold text-white">
							services<span className="text-primary">.</span>
						</h1> */}
						<p className="fs-md font-weight-bold text-white-50 mb-20 pub-color-gray">
							We help companies with branding & digital product
							development=-999+9999966666
						</p>
					</div>
					<img src="/new/header-right-img.png" style={{width: '500px'}} />
				</div>
			</Section>
			<SubHero tagline="Yong Rong International Limited">
			<div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
				<img src="/new/header-right-img.png" style={{width: '500px'}} />
					<div className='about-section' style={{marginLeft: '50px'}}>
						<p className="title">About Us</p>
						<p>
              Professional trading company that sells electronic components of various major brands. The products are widely used in automotive, communications, medical equipment, networking, traffic control, power systems, consumer products, industrial control, etc. fields.
            </p>
			<p>
              Since our establishment, the company has been adhering to the tenet of "integrity, professionalism and cooperation". Under the belief of quality first, ZSM not only guarantees the quality of all supplies but also price advantages. We provide technical support and fast and flexible delivery according to customer needs. In addition, the company is committed to cultivating professional and experienced sales team to support customers with high-quality services.
            </p>
			<p>Over the years, ZSM has established long-term relationship with many clients and a good reputation in the industry. We sincerely thank all suppliers and customers for their supports. We hope to continue working together to create a better tomorrow.</p>
					</div>
					
				</div>
			</SubHero>

			<SubHero tagline="Our Advantage Brand">
				
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
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
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
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
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
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
				
			</SubHero>

			{/* <Section
				className={`${styles.workHero} align-items-center pt-0`}
				columns
			>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold pub-color-gray mb-20">
							Logo Design
						</h3>
						<ul className={styles.cardList}>
							<li>Unique</li>
							<li>Visual Identity</li>
							<li>Typography</li>
		
						</ul>
						<Link href="/services/logo-design">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold pub-color-gray mb-20">
							Consulting
						</h3>
						<ul className={styles.cardList}>
							<li>Website Audit & Analysis</li>
							<li>Branding & Design Recommendations</li>
							<li>Marketing Plans</li>
							<li>SEO Strategy</li>
							<li>Content Enhancements</li>
							<li>Functionality Assessment</li>
						</ul>
						<Link href="/services/consulting">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold pub-color-gray mb-20">
							Content Writing
						</h3>
						<ul className={styles.cardList}>
							<li>Blog Post Writing</li>
							<li>Website Copy</li>
							<li>Product Descriptions</li>
							<li>Email Marketing</li>
							<li>Social Media Posts</li>
							<li>Ad Content Writing</li>
						</ul>
						<Link href="/services/content-writing">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
			</Section> */}
			{/* <Section
				className={`${styles.workHero} align-items-center pt-0`}
				columns
				rowClass="justify-content-center"
			>
				<Col md={4} as={Tilt} options={{ max: 15, scale: 1.05 }}>
					<Card>
						<h3 className="fs-sm font-weight-bold pub-color-gray mb-20">
							Video Production
						</h3>
						<ul className={styles.cardList}>
							<li>Interviews</li>
							<li>Promotional</li>
							<li>Commercials</li>
							<li>Special Event</li>
							<li>Social Media Videos</li>
							<li>Testimonials</li>
						</ul>
						<Link href="/services/logo-design">
							<a className="link">Learn More</a>
						</Link>
					</Card>
				</Col>
			</Section> */}
			{/* <Section fullWidth className="py-50" containerClass="px-0">
				<WordRiver
					words={[
						'audit',
						'research',
						'strategy',
						'UI/UX',
						'messaging',
						'identity',
						'management',
						'builds',
						'native',
						'Prototyping',
						'assets',
						'testing',
						'html',
						'react',
						'guidelines',
						'vue',
						'css',
						'node',
						'components',
						'api',
						'apps',
						'library',
						'css',
						'javascript',
					]}
					colors={['#A5A5A5', '#454545', '#e6fd36']}
				/>
			</Section> */}

			<SubHero tagline="Featured dominance worthy brands">
				<Col className="nmt-4">
					<CaseStudyCard casestudy={svvc} />
					<CaseStudyCard casestudy={fng} />
					<CaseStudyCard casestudy={pff} />
				</Col>
			</SubHero>

			<DominanceContact />
		</Page>
	);
};

export default WhatWeDo;
