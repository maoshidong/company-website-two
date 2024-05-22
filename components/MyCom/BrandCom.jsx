import dynamic from 'next/dynamic'
import { Row, Col } from 'react-bootstrap';
const Card = dynamic(() => import('../../components/Card'));
import SubHero from '../SubHero';
import styles from '../../styles/Testimonials.module.scss';

const BrandCom = () => {
    const getItem = (title, imgSrc, des) => {
        return <Col md={4} options={{ max: 15, scale: 1.05 }} style={{marginBottom: '0px'}}>
            <Card>
				<h5 class="f-700 text-center pt-30">{title}</h5>
                <img src={imgSrc} style={{margin: '0 auto', display: 'flex', width: '200px'}} />
                <div className='mt-20' style={{height: '106px'}}>{des}</div>
            </Card>
        </Col>
    }

    return <SubHero >
        <h3 className="f-700 mb-22 text-center mb-10" style={{marginTop: '7rem'}}>Main Brand</h3>
        <Row as="main" className={[styles.Testimonials, styles.ProductTable]}>
                
        {getItem('Infineon', '/two/brand1.jpg', "Infineon's power MOSFET portfolio provides efficient generation, power supply and power consumption solutions for a range of applications, such as solar microinverters")}

        {getItem('ASTSIC', '/two/brand2.jpg', "With the third generation semiconductor silicon carbide material as the core, the development of high-power power electronic device design and product applications, has a complete product technology authorization")}

        {getItem('NCE', '/two/brand3.jpg', "Xinjie Energy specializes in the development and sales of semiconductor power devices. At present, the company's main products include :IGBT, channel power MOSFET, super")}

    </Row>
    </SubHero>
}

export default BrandCom