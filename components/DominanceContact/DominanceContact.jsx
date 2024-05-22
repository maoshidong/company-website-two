import React from 'react';
import Section from '../Section';
import styles from './DominanceContact.module.scss';
// import { Row, Col } from 'antd';

const DominanceContact = (props) => {
	return (
		<Section
			className={`service-section DominanceContact ${styles.DominanceContact} bg-primary  py-50`}
			style={{color: 'white !important'}}
		>
			{/* <Row gutter={20} className='heightOverflowY500'> */}
			<div style={{display: 'flex',gap: '50px' }} className=''>
				<div xs={24} sm={12} md={12} xl={8} lg={8} style={{width: '39.3%' }}>
					<div style={{textAlign: 'left' }}>
						<img
							src="/logo.jpg"
							alt="The Kirk Concept, We unlock brand dominance through branding, website development, and software development."
							style={{ width: '200px', borderRadius: '4px', textAlign: 'left', marginBottom: '20px' }}
						/>
						<div className=''
							style={{textAlign: 'left', fontSize: '16px', lineHeight: '23px', color: '#000'}}
						>One-stop sales from thousands of top manufacturers worldwide. Immediate delivery available.</div>
					</div>
				</div>
				<div xs={24} sm={12} md={12} xl={8} lg={8} style={{width: '27.3%' }}>
					<h4 className="widget-title">Major Brand</h4>
					<ul className='' style={{color: '#000'}}>
						<li>TI</li><li>ADI</li>
						<li>ST</li><li>NXP</li><li>RENESAS</li>
						<li>VISHAY</li><li>ONSEMI</li><li>MAXIM</li>           
					</ul>
				</div>
				<div xs={24} sm={12} md={12} xl={8} lg={8} style={{width: '33.3%' }}>
					<h4 className="widget-title">Contact Us</h4>
					{/* pub-color-white */}
					<div className=''  style={{color: '#000'}}>
						<div>Add: 2F.-1, No. 9, Jiuhe 2nd St., Zhongli Dist. Taoyuan City, 320 Taiwan</div>
						<div>Tel: 00886-9-58719211</div>
						<div>Email: sales@yongrongtw.com</div>
					</div>
				</div>
			</div>
				{/* text-gray-dark */}
			{/* <div style={{display: 'flex', }}>


				<div>
					<h2 className="fs-3xl mb-32 pub-color-white">
						ready for brand dominance?
					</h2>
	
					<p className="fs-sm mw-lg pub-color-white">
						{`We love working with businesses that have been validated and are
						serious about making a statement in their industry! If you are
						interested in any of our services and want to see how we can
						work together, fill out our questionnaire and let's get started!`}
					</p>
				</div>
			</div> */}
			{/* <Link href="/get-started">
				<a>
					<Button variant="secondary" className="mt-20">
						get started
					</Button>
				</a>
			</Link> */}
		</Section>
	);
};

export default DominanceContact;
