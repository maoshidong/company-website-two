
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
        title: 'Power module Stack',
        // img: '/two/solution1.jpg',
        desArr: [
            'Power module Stack is the core component of customized power electronic device converter based on high power IGBT devices. The core components of the converter system, such as IGBT module, radiator, DC support capacitor, laminated busbar and Hall current sensor, are extracted and integrated into modular products, and control software is added to form an intelligent power module. Users only need to match simple peripheral components such as the overall structure, reactor, human-machine interface can quickly achieve custom power electronic equipment products.',
        ],
        traitData: {
            title: 'Stack features of power modules',
            traitArr: [
                "Suitable for APF, photovoltaic power generation, UPS, inverter, frequency conversion and other power conversion applications",
                "The modular structure is easy to assemble",
                "High quality Hall current sensor 50A-300A",
                "Efficient and compact air cooling system",
                "High quality laminated busbars are used",

                "Evenly distribute capacitance to reduce inductance coefficient",
                "Mitsubishi's latest sixth generation NX series IGBT has low overall loss and high cost performance",
                "Simple wiring",
                "Good heat dissipation design",
            ],
        },
        twoTraitArr: {
            title: "Our company can develop the corresponding core components of power electronic equipment according to user needs, including software and hardware parts. The current modular series includes the following products:",
            traitArr: [
                "380v/50kW ~ 300kW inverter topology",
                "380V/50kW ~ 200kW rectifier inverter topology",
                "1140V/100kW medium voltage four-quadrant AC direct AC topology",
                "6~10kV high voltage test platform system.",
            ],
        },
    },
    2: {
        title: 'Concept special IGBT driver',
        img: '/two/solution2.jpg',
        desArr: [
            'Concept special IGBT driver products are shown in the following table, welcome to contact Shanghai Yingcheng Electronic Technology Co., LTD. Product consultation and technical support',
            'Scale Plug and play driver is a ready-to-use driver, which has been widely used in a variety of IGBT modules, such as 1200V-6500V voltage high power high voltage IGBT module. The plug and play drivers are equipped with DC/DC converters, short circuit protection, active clamping, power monitor and more. The user only needs to plug the driver module into the corresponding IGBT module, and the system can start to work without further confirmation and matching.',
        ],
    },
    3: {
        title: 'HP-Driver Encapsulates the silicon carbide driver board',
        twoImg: '/two/solutionDetail3.png',
        desArr: [
            "The 6SiC3100A0/B0 is a NXP based highly integrated MC33GD3100 core for SiC MOSFET power modules Chip plug and play digital drive circuit board.",

        ],
        traitData: {
            title: '6SiC3100A0/B0 Basic block diagram of the driver circuit board The main features of the driver circuit board are as follows',
            traitArr: [
                "Maximum gate output peak current + 15A",
                "Fast silicon carbide power semiconductor module desaturation detection protection function, detection time < 3us",
                "Active Miller clamping function",
                "Active clamping function",
                "Supports two-stage off and soft off",

                "Undervoltage and overvoltage protection for primary and secondary power supplies",
                "Supports NTC detection",
                "VDC detection",
                "Isolated SPI intelligent digital interface, flexible parameter configuration, status monitoring",
                "-40oC~ 125o C Wide operating temperature range",
                "The driver chip that meets the functional safety requirements of vehicle specification level is adopted",
            ],
        },
    },
}

const SolutionPage = ({ props }) => {
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
				<h1 style={{paddingTop: '100px', width: '100%'}} className='text-center'>Solution</h1>
				<div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
					<Col md={24} options={{ max: 24, scale: 1.05 }}>
		
                        <div className='mb-20' style={{display: 'flex'}}>
                            <h5 className='f-700 mb-10 text-center fs-sm mr-10'>{detailData?.title}</h5>
                            {
                                detailData?.img && <div>
                                    <img src={detailData?.img} />
                                </div>
                            }

                        </div>

                        {
                            detailData?.desArr?.map(item => {
                                return <p style={{fontSize: '15px'}}>{item}</p>
                            })
                        }
                        {
                            detailData?.twoImg && <div>
                                <img src={detailData?.twoImg} />
                            </div>
                        }

                        {
                            detailData?.traitData?.title && <div className='mt-50'>
                                <div className='mb-20'>{detailData?.traitData?.title}</div>
                                <ul style={{textIndent: '30px'}}>
                                    {
                                       detailData?.traitData?.traitArr?.map(item => {
                                          return <li className='mb-10'>{item}</li>
                                       })
                                    }
                                </ul>
                                {
                                    detailData?.twoTraitArr?.title && <div className='pl-60 mt-30'>
                                        <div className='mb-20'>{detailData?.twoTraitArr?.title}</div>
                                        <ul style={{textIndent: '30px'}}>
                                            {
                                            detailData?.twoTraitArr?.traitArr?.map(item => {
                                                return <li className='mb-10'>{item}</li>
                                            })
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                        }

					</Col>
			

				</div>
				
			</SubHero>


		
			<DominanceContact />
		</Page>
	);
};

export default SolutionPage;
