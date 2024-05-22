import dynamic from 'next/dynamic'
const SubHero = dynamic(() => import('../../components/SubHero'));


const AboutUsCom = () => {
    return 			<SubHero>

    <div className='mt-100' style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
        <img src="/two/feature-img.png" style={{width: '600px'}} />
            <div className='about-section' style={{marginLeft: '50px'}}>
                <p className="title">About Us</p>
                <p>
                ALPHATEC ENTERPRISE CORP LIMITED is one of the market's most experienced distributors of electronic- and computer components. Since starting out in 2000 we have built up long-term relationships with producers, distributors and collaborative partners throughout the world. Welcome the BOM from OEM, ODM AND EMS. Our Global Reach spans The Americas, Europe, and Asia.
ALPHATEC ENTERPRISE CORP LIMITED continually invests in tools and partnerships to ensure product quality maintains the highest standard. With over 24 years of product management experience combined with strategic Test Laboratory partnerships , you can be confident that the product you receive from ALPHATEC is of the highest quality.
                </p>
    {/* <p>
      Since our establishment, the company has been adhering to the tenet of "integrity, professionalism and cooperation". Under the belief of quality first, ZSM not only guarantees the quality of all supplies but also price advantages. We provide technical support and fast and flexible delivery according to customer needs. In addition, the company is committed to cultivating professional and experienced sales team to support customers with high-quality services.
    </p>
    <p>Over the years, ZSM has established long-term relationship with many clients and a good reputation in the industry. We sincerely thank all suppliers and customers for their supports. We hope to continue working together to create a better tomorrow.</p> */}
            </div>
            
        </div>
    </SubHero>
}

export default AboutUsCom