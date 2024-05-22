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

const NewsCom = () => {
    const getItem = (id, imgSrc, des) => {
        return <Link href={`/news/${id}`}> 
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
        <h3 className="f-700 mb-22 text-center mb-50" style={{marginTop: '5rem'}}>News Information</h3>
        {/* className={[styles.Testimonials, styles.ProductTable]} */}
        <Row as="main">
            
            {getItem(1, '/two/new1.jpg', '汽车网络安全的要求清晰明朗：我们必须共同努力')}
            
            {getItem(2, '/two/new2.jpg', '恩智浦推出全新模拟前端，支持软件定义工厂')}
            
            {getItem(3, '/two/new3.jpg', '恩智浦推出高性能S32K39系列MCU，支持新一代电气化应用')}

        </Row>
        </SubHero>
    )
}

export default NewsCom