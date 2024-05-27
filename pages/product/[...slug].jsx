
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
import ProductDetail1 from '../../components/MyCom/ProductDetail1';
import ProductDetail2 from '../../components/MyCom/ProductDetail2';
import ProductDetail3 from '../../components/MyCom/ProductDetail3';
import ProductDetail4 from '../../components/MyCom/ProductDetail4';
import ProductDetail5 from '../../components/MyCom/ProductDetail5';
import ProductDetail6 from '../../components/MyCom/ProductDetail6';


const newsData = {
    1: {
        title: 'On Mei industrial grade IGBT single tube',
        img: '/two/prod1.jpg',
        desArr: [

        ]
    },
    2: {
        title: 'On TOLL Package MOSFETs',
        img: '/two/prod2.jpg',
        desArr: [

        ]
    },
    3: {
        title: 'Infineon Hybrid Single tube CoolSiC',
        img: '/two/prod3.jpg',
        desArr: [
            "Cost-effective power switches with low switching losses",
            "Using silicon carbide Schottky barrier diode as an anti-parallel diode combined with IGBT, the capability of IGBT can be expanded, while Eon and total switching loss can be greatly reduced. Continuous flow SiC Schottky barrier diodes can significantly reduce switching losses, while dv/dt and di/dt values are almost constant.",
            "The quick, easy, plug-and-go replacement of the 650 V TRENCHSTOP™5 IGBT design allows for a 0.1% improvement in efficiency per 10 kHz switching frequency, which means that an application with a 23 kHz switching speed can improve efficiency by approximately 0.23%. The CoolSiC™ hybrid single tube in a 4-lead Kelvin-emitter package can also further reduce switching losses, resulting in even greater efficiency gains.",
        ]
    },
    4: {
        title: 'Infineon Automotive IGBT module',
        img: '/two/prod4.jpg',
        desArr: [
            "Power semiconductor modules that meet Layer 1 requirements in OEM and xEV platform strategies.",
            "The HybridPACK™ family expands the power range of IGBT modules for hybrid and electric vehicles. The series is available in multiple versions in six different packages to maximize voltage and power level expansions, covering the 200 A to 900 A and 400 V to 1200 V (chip rating) power ranges.",
            "DSC not only offers full expansion possibilities, but also increases efficiency by 25%.",
        ]
    },
    5: {
        title: 'Infineon Easy series IGBT modules',
        img: '/two/prod5.jpg',
        desArr: [
            "EasyPIM™，EasyPACK™ 和 EasyDUAL™",
            `The Easy series is the best choice for customers looking for a flexible and scalable power module solution. With the expansion of the package range to Easy 3B, we now offer the broadest range of products in a baseboardless, 12 mm high package. Easy package pins can be flexibly distributed in a mesh format system, which is ideal for customized pin arrangement needs. Full range package without substrate. The new Easy 3B package doubles the DCB surface area (DCB is the substrate in the power module) of the current 2B package, while maintaining the same height. This package is ideal for platform-based power expansion of inverter designs, allowing current inverter designs to be extended to higher power with minimal mechanical modifications. At the same time, the new package "inherits" many of the advantages of the Easy family, such as flexible pin allocation, which is important for customization. Module products packaged with Easy3B have been included in the mass production plan.`,
            "The Easy series includes EasyPIM™, EasyPACK™ and EasyDUAL™ and covers the full power range of 600V/650V/1200V voltage and 6A to 200AIc current. This series module has no substrate and adopts new chip technology. Screw clamps provide a fast, reliable and low-cost installation method. The automotive-grade Easy 1B and Easy 2B modules provide a topologically flexible automotive certified platform for applications up to 10 kW.",
        ]
    },
    6: {
        title: 'Infineon IGBT7 module',
        img: '/two/prod6.jpg',
        desArr: [
            "The seventh generation TRENCHSTOP™ IGBT is designed for variable frequency industrial drives. Based on the new micro-grooved gate technology, higher device controllability can be achieved. These characteristics enable a significant reduction in the loss of switching devices in applications, especially in industrial drive applications that typically operate at medium switching frequencies.",
            "Each switch requires a driver, and using the right one will be advantageous. To take full advantage of a TRENCHSTOP™ IGBT7 design, we recommend a gate driver IC that meets the IGBT7 as well as industrial drive requirements.",
            "IGBT7 in industrial drives require high output current gate drivers with enhanced isolation (VDE 0884-11 certified). The EiceDRIVER ™ isolated gate drivers in Infineon's X3 Compact, 2L-SRC and X3 Enhanced series meet these requirements while offering their differentiated features. The X3 Compact series offers easy-to-design and cost-effective solutions, while the 2L-SRC series offers high-performance options. The X3 Enhanced series includes an analog version that delivers best-in-class DESAT accuracy, and a digital version with I2C configurability for predictive adjustments.",
        ]
    },
}

const ProductPage = ({ props }) => {
    const Router = useRouter();
    const { query } = Router

    const num = Number(query?.slug?.[0] || 1)
    const detailData = newsData?.[num] || newsData?.[1]
    console.log(detailData, 'detailData---del')
    // const getCom = () => {
    //     let com = ''
    //     console.log(Number(query?.slug?.[0] || 1), 'Number(query?.slug?.[0])----del')
    //     switch(Number(query?.slug?.[0])) {
    //         case 1:
    //             com = <ProductDetail1 />
    //         case 2:
    //             com = <ProductDetail2 />
    //         // case 3:
    //         //     com = <ProductDetail2 />
    //     }
    //     return com
    // }
	return (
		<Page
			title="Testimonials for The Kirk Concept"
			description="Testimonials to check out what our clients are saying about working with us."
		>
			<Section
				className={`${styles.contact} bg-gray-dark text-center align-items-center`}
				hero
				bgImg="/two/prod.jpg"
				style={{height: '550px', backgroundImage: `url('/two/prod.jpg')`}}
			>
	
			</Section>
            {/* style={{backgroundImage: `url('/two/blog-bg.png')`, marginTop: '4rem'}} */}
            <div>
                <SubHero>
                    <h1 style={{paddingTop: '100px', width: '100%'}} className='text-center'>Product Center</h1>
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
           
                            { num === 1 && <ProductDetail1 /> }
                            { num === 2 && <ProductDetail2 /> }
                            { num === 3 && <ProductDetail3 /> }
                            { num === 4 && <ProductDetail4 /> }
                            { num === 5 && <ProductDetail5 /> }
                            { num === 6 && <ProductDetail6 /> }
                            

                        </Col>
                

                    </div>
                    
                </SubHero>
            </div>

		
			<DominanceContact />
		</Page>
	);
};

export default ProductPage;
