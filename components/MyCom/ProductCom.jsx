import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
// import Head from 'next/head';
// import Section from '../components/Section';
// import Page from '~/templates/Page';

import Card from '../Card';
import SubHero from '../SubHero';
// import SubHero from '~/components/SubHero';
// import styles from '../styles/Testimonials.module.scss';
// import DominanceContact from '../components/DominanceContact/DominanceContact';

const ProductCom = () => {
    console.log(process.env, 'process.env.---del')
    console.log(process.env.companyName, 'process.env.companyName---del')
    const getItem = (id, imgSrc, des) => {
        return <Link href={`/product/${id}`}>
            {/* <a> */}
                <Col md={4} options={{ max: 15, scale: 1.05 }} style={{marginBottom: '30px'}}>
                    <Card pdClassName='single-blog p-0 pub-cursor-pointer'>
                            <div className='single-img'>
                                <img src={imgSrc} className='transition-img' />
                            </div>
                            <div className="single-blog-content bg-white pt-25 pb-25 pl-30 pr-20">
                                <span className="date d-block secondary-color3 mb-1">ALPHATEC ENTERPRISE CORP LIMITED</span>
                                <h6 style={{height: '35px'}}>
                                    {des}
                                </h6>
                            </div>
                        </Card>
                        
                    </Col>
            {/* </a> */}
        </Link>
    }
    return (
        <SubHero >
        <h3 className="f-700 mb-22 text-center mb-50" style={{marginTop: '7rem'}}>Product Center</h3>
        {/* className={[styles.Testimonials, styles.ProductTable]} */}
        <Row as="main">
            
            {getItem(1, '/two/prod1.jpg', 'On Mei industrial grade IGBT single tube')}
            
            {getItem(2, '/two/prod2.jpg', 'On TOLL Package MOSFETs')}
            
            {getItem(3, '/two/prod3.jpg', 'Infineon Hybrid Single tube CoolSiC')}

        </Row>
        </SubHero>
    )
}

export default ProductCom