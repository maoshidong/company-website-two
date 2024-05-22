import React from 'react';
import Section from '../Section';
import styles from './DominanceContact.module.scss';
// import { Row, Col } from 'antd';

const DominanceContact = (props) => {
	return (
		<Section
		// py-50
			className={`DominanceContact ${styles.DominanceContact}`}
			fullWidth={true}
			style={{color: 'white !important'}}
		>

		<div className="footer-area over-hidden wow fadeInUp" data-wow-duration="1.6s"
			style={{background: 'rgb(240, 246, 251)',visibility: 'visible', animationDuration: '1.6s', animationName: 'fadeInUp'}}
		>
						<div className="footer-top pt-50 pb-10">
							<div className="container">
								<div className="row">
									
									<div className="col-xl-3  col-lg-2  col-md-3  col-sm-3 col-12">
										<div className="footer-widget f-info pb-30 ml-40 pr-20 mt-30">
											<h6 className="fs-sm text-capitalize f-700 mb-22">product center</h6>
											<ul
												className={`${styles.footerInfo}`}
											>
												<li>
													<a className="position-relative d-inline-block mb-2">Infineon</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">ON</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">Nexperia</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">Hot products</a>
												</li> 
											</ul>
										</div>
									</div>
									<div className="col-xl-3  col-lg-2  col-md-3  col-sm-4 col-12">
										<div className="footer-widget f-info pb-30 ml-40 pr-20 mt-30">
											<h6 className="fs-sm text-capitalize f-700 mb-22">solution</h6>
											<ul className={`${styles.footerInfo}`}>
												<li>
													<a className="position-relative d-inline-block mb-2">Network communication equipment</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">Internet of things devices</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">motor drive</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">charging pile</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">Photovoltaic inverter</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">Industrial power supply</a>
												</li><li>
													<a className="position-relative d-inline-block mb-2">Vehicle product</a>
												</li> 
											</ul>
										</div>
									</div>
									<div className="col-xl-3  col-lg-4  col-md-7  col-sm-8 col-12">
										<div className="footer-widget f-subscriber-area pb-30 mt-30">
											<h6 className="fs-sm text-capitalize f-700 mb-22">Management</h6>
											<ul className={`${styles.footerInfo}`}>
												<li>
													<a className="position-relative d-inline-block mb-2">Infineon</a>
												</li>
												<li>
													<a className="position-relative d-inline-block mb-2">ON</a>
												</li>
												<li>
													<a className="position-relative d-inline-block mb-2">Nexperia</a>
												</li>
												<li>
													<a className="position-relative d-inline-block mb-2">NCE</a>
												</li>
											</ul>
										</div>
									</div>
		<div className="col-xl-3  col-lg-4  col-md-6  col-sm-7 col-12 pr-xl-0">
										<div className="footer-widget f-adress pb-40 mt-30" style={{color: '#666 !important'}}>
											<h6 className="fs-sm text-capitalize f-700 mb-22">Contact Us</h6>
											<ul className={`${styles.footerInfo} footer-address`}>
												<li className="d-flex align-items-start mb-10">
												
													<div className="lab">
													Add: 5F, No.52-1, Guandu Road Pei-Tou District, Taipei, Taiwan<br/>
													</div>  
												</li>
												<li className='lab'>
									
												Email: txhdzkj@163.com
												</li>
												<li className='lab mt-10'>
													Tel: 886-2-22941608
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer-bottom">
							<div className="container">
								<div className="copyright-area mt-20 pb-25">
									<div className="row align-items-center justify-content-between">
									{/* className="col-xl-24 col-lg-24 col-md-24  col-sm-24 col-24" */}
										<div style={{width: '100%'}}>
											<div className="copyright-text text-center text-md-left mt-20">
												<p className="mb-0 text-center">Copyright 2024 ALPHATEC ENTERPRISE CORP LIMITED, All rights reserved.</p>
												{/* <p className="mb-0 text-center">Copyright © 2022.深圳市ALPHATEC ENTERPRISE CORP LIMITED有限公司 All rights reserved.<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备17026083号-2</a>
												</p><div style={{height:'0px', overflow:'hidden'}}>Powered by <a href="https://www.cmseasy.cn" title="CmsEasy企业网站系统" target="_blank">CmsEasy</a></div> */}
											</div>
										</div>
										<div className="col-xl-4  col-lg-6  col-md-6  col-sm-12 col-12">
											<ul className="social-link text-center text-md-right mt-20">
												<li className="d-inline-block">
													<a className="facebook-color text-center pl-15 d-inline-block transition-3" href="#"><i className="fab fa-facebook-f"></i></a>
												</li>
												<li className="d-inline-block">
													<a className="twitter-color text-center pl-15 d-inline-block transition-3" href="#"><i className="fab fa-twitter"></i></a>
												</li>
												<li className="d-inline-block">
													<a className="google-plus-color text-center pl-15 d-inline-block transition-3" href="#"><i className="fab fa-google-plus-g"></i></a>
												</li>
												<li className="d-inline-block">
													<a className="linkedin-color text-center pl-15 d-inline-block transition-3" href="#"><i className="fab fa-linkedin-in"></i></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

			{/* <Row gutter={20} className='heightOverflowY500'> */}
			{/* <div style={{display: 'flex',gap: '50px' }} className=''>
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

					<div className=''  style={{color: '#000'}}>
						<div>Add: 2F.-1, No. 9, Jiuhe 2nd St., Zhongli Dist. Taoyuan City, 320 Taiwan</div>
						<div>Tel: 00886-9-58719211</div>
						<div>Email: sales@yongrongtw.com</div>
					</div>
				</div>
			</div> */}



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
