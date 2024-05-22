
// import dynamic from 'next/dynamic'
// import Card from '../components/Card';


import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap';
// import Head from 'next/head';
import Section from '../../components/Section';
import Page from '../../templates/Page';

import SubHero from '../../components/SubHero';
import styles from '../../styles/Testimonials.module.scss';
import DominanceContact from '../../components/DominanceContact/DominanceContact';


const newsData = {
    1: {
        title: 'The requirements for automotive cybersecurity are clear: We must work together',
        img: '/two/new1.jpg',
        desArr: [
            'The Sheer Scale is Staggering',
            'ISO/SAE 21434 mandates that automakers provide a clear, comprehensible and defensible rationale, supported by evidence and documentation, that an item or component achieves a sufficient degree of cybersecurity for the application it is used in. To achieve this, automakers must determine the relevance of cybersecurity to each of these items and components; for the relevant ones, automakers can perform analysis and risk assessment (TARA). From this assessment, they can derive a set of cybersecurity goals and requirements for achieving a verifiable level of security.',

            'Since there are hundreds of components in every vehicle that could potentially present a cybersecurity problem—and given the tight deadlines—this process imposes a formidable challenge, not just for automakers but for their suppliers as well. Modern vehicles increasingly rely on wirelessly communication to interact with their direct environment and to leverage cloud-based services. This connectivity continues within the vehicle itself, so almost every electronic component inside it should be presumed to be a potential target for hackers.',
        ]
    },
    2: {
        title: 'NXP introduces a new analog front end to support software-defined factories',
        img: '/two/new2.jpg',
        desArr: [
            'Munich Electronics Fair, Germany, November 14, 2022 (World Press Release) -- NXP Semiconductors N.V. (NASDAQ: NXPI today announced the new NXP Analog Front End (N-AFE) family for high-precision data acquisition and condition monitoring systems in factory automation. The new N-AFE family supports software-defined factories as a software-configurable, universal analog input device that helps operators streamline the smart factory configuration process and easily adjust Settings to changing market demands.',
            'Munich Electronics Fair, Germany, November 14, 2022 (World Press Release) -- NXP Semiconductors N.V. (NASDAQ: Despite the increasing intelligence of factories, adapting to rapidly changing market trends remains challenging, which often requires large-scale equipment upgrades and reconfiguration of factories to meet constantly updated demands. The introduction of software-configurable components gives plant operators greater flexibility to change the configuration of the plant floor more quickly and easily to adapt to rapidly changing market trends. NXPI today announced the new NXP Analog Front End (N-AFE) family for high-precision data acquisition and condition monitoring systems in factory automation. The new N-AFE family supports software-defined factories as a software-configurable, universal analog input device that helps operators streamline the smart factory configuration process and easily adjust Settings to changing market demands.',
        ]
    },
    3: {
        title: 'NXP introduces high-performance S32K39 series MCUS to support a new generation of electrified applications',
        img: '/two/new3.jpg',
        desArr: [
            'MUNICH, Germany, Nov. 15, 2022 (GLOBE NEWSWIRE) -- Electronica -- NXP Semiconductors (NASDAQ: NXPI), the leader in automotive processors, today announced a new S32K39 series of automotive microcontrollers (MCUs) optimized for electric vehicle (EV) control applications. The modern S32K39 MCUs take electrification into the future with high-speed and high-resolution control for increased power efficiency to extend driving range and provide a smoother EV driving experience. The S32K39 MCUs include networking, security and functional safety capabilities beyond traditional automotive MCUs to address the needs of zonal vehicle E/E architectures and software-defined vehicles. The new MCUs enable NXP’s battery management system (BMS) and EV power inverters to provide end-to-end solutions for next-generation EVs.',

            'The high-performance S32K39 MCUs are optimized for the intelligent and high-precision control of traction inverters that convert the EV battery’s DC power into alternating current to drive modern traction motors. The MCUs support traditional insulated-gate bipolar transistors (IGBT), as well as newer silicon carbide (SiC) and gallium nitride (GaN) technologies. With dual 200 kHz control loops to improve power efficiency, these can enable smaller, lighter, more efficient inverters, allowing motors to deliver a longer driving range. They can also control six-phase motors with increased power density and fault tolerance for improved long-term reliability. A safe ASIL D software resolver, along with integrated sine wave generation and sigma delta converters, eliminate external components for reduced overall system cost. The S32K39 also provides flexibility to control up to quad traction inverters when coupled with the NXP S32E real-time processor and can implement advanced traction capabilities for 4-wheel drive EVs in this configuration.',

            'Because of its versatile architecture, the S32K39 series is well-suited to address a wide range of EV applications beyond traction inverter control, including battery management (BMS), on-board charging (OBC) and DC/DC conversion. With support for hardware isolation, time-sensitive networking and advanced cryptography, it is well-positioned to support software-defined vehicles and zonal architectures.',
        ]
    },
}

const MainBrand = ({ props }) => {
    const Router = useRouter();
    const { query } = Router

    const detailData = newsData?.[query?.slug?.[0]] || newsData?.[1]
    console.log(detailData, 'detailData---del')
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

            <SubHero>
				<h1 style={{paddingTop: '100px', width: '100%'}} className='text-center'>News Information</h1>
				<div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
					<Col md={24} options={{ max: 24, scale: 1.05 }}>
		
                        <div className='mb-20' style={{display: 'flex'}}>
                            <h5 className='f-700 mb-22 text-center fs-sm mr-10'>{detailData?.title}</h5>
                            <div>
                                <img src={detailData?.img} />
                            </div>
                        </div>

                        {
                            detailData?.desArr?.map(item => {
                                return <p style={{fontSize: '15px'}}>{item}</p>
                            })
                        }
					</Col>
			

				</div>
				
			</SubHero>


		
			<DominanceContact />
		</Page>
	);
};

export default MainBrand;
