import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import NavLink from '../NavLink';
import styles from './Header.module.scss';

const Header = ({ props }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const siteLinks = [
		{ label: 'Home', path: '/' },
		{ label: 'Management', path: '/management' },
		{ label: 'Product Center', path: '/product' },
		{ label: 'Solution', path: '/solution' },
		{ label: 'News', path: '/news' },
		{ label: 'About Us', path: '/aboutUs' },
		{ label: 'Contact Us', path: '/contactUs' },
		// {
		// 	label: 'services',
		// 	path: '/services',
		// 	children: [
		// 		{
		// 			label: 'branding',
		// 			path: '/branding',
		// 		},
		// 		{
		// 			label: 'website development',
		// 			path: '/website-development',
		// 		},
		// 		{
		// 			label: 'software development',
		// 			path: '/software-development',
		// 		},
		// 		{
		// 			label: 'logo design',
		// 			path: '/logo-design',
		// 		},
		// 		{
		// 			label: 'consulting',
		// 			path: '/consulting',
		// 		},
		// 		{
		// 			label: 'content writing',
		// 			path: '/content-writing',
		// 		},
		// 		{
		// 			label: 'video production',
		// 			path: '/video-production',
		// 		},
		// 	],
		// },
		// {
		// 	label: 'case studies',
		// 	path: '/case-study',
		// },
		// {
		// 	label: 'blog',
		// 	path: '/blog',
		// },
		// {
		// 	label: 'testimonials',
		// 	path: '/testimonials',
		// },
		// {
		// 	label: 'contact',
		// 	path: '/contact',
		// 	children: [
		// 		{
		// 			label: 'brand questionnaire',
		// 			path: '/brand-questionnaire',
		// 		},
		// 		{
		// 			label: 'web questionnaire',
		// 			path: '/web-questionnaire',
		// 		},
		// 	],
		// },
	];

	useEffect(() => {
		// disabling scrolling when navigation is open
		if (isNavOpen === true) {
			document.querySelector('body').classList.add('overflow-hidden');
		} else {
			document.querySelector('body').classList.remove('overflow-hidden');
		}
	}, [isNavOpen]);

	return (
		<>
			<header
				className={`${styles.Header} position-fixed p-10 px-30 d-flex`}
				
			>
				<div className={styles.container} style={{maxWidth: '1200px', margin: '0 auto'}}>
					<Link href="/">
						<a>
						{/* src="/logo_primary.svg" */}
							<img
								src="/logo.png"
								// width={300}
								// height={76}
								// layout="intrinsic"
								alt="The Kirk Concept, We unlock brand dominance through branding, website development, and software development."
								style={{ width: '200px', height: 'auto', borderRadius: '4px', marginRight: '150px' }}
							/>
						</a>
					</Link>
					<ul className="text-white d-none d-md-flex">
						{siteLinks.map((link, index) => {
							return (
								<li
									key={index}
									className="text-white px-5 font-weight-bold"
								>
									<NavLink href={link.path}>
										<div style={{color: '#404040', fontSize: '16px', fontWeight: '500'}}>{link.label}</div>
										{link.children && (
											<ul className={styles.dropdown}>
												{link.children.map(
													(child, index) => {
														return (
															<li key={index} className='pub-color'>
																<NavLink
																	href={
																		link.path +
																		child.path
																	}
																>
																	<span className='pub-color-gray' style={{color: '#404040'}}>{child.label}</span>
																</NavLink>
															</li>
														);
													}
												)}
											</ul>
										)}
									</NavLink>
								</li>
							);
						})}

						{/* <li className="text-white font-weight-bold">
							<Link href="/get-started">
								<a
									className={`${styles.headerButton} bg-primary rounded-pill px-25 py-10 text-gray-dark font-bold`}
								>
									get started
								</a>
							</Link>
						</li> */}
					</ul>
				</div>
				{!isNavOpen && (
					<button
						className={`text-white d-md-none d-flex bg-transparent border-0`}
						onClick={() => setIsNavOpen(!isNavOpen)}
					>
						<AiOutlineMenu size={36} />
					</button>
				)}
				{isNavOpen && (
					<button
						className="text-white d-md-none d-flex bg-transparent border-0"
						onClick={() => setIsNavOpen(!isNavOpen)}
					>
						<AiOutlineCloseCircle color="#767676" size={36} />
					</button>
				)}
			</header>
			<aside
				className={`${
					styles.SideNav
				} h-100 d-flex align-content-center shadow ${
					isNavOpen ? styles.isActive : ''
				}`}
			>
				<ul className="w-100">
					<li>
						<NavLink
							onClick={() => setIsNavOpen(!isNavOpen)}
							href="/"
						>
							home
						</NavLink>
					</li>
					{siteLinks.map((link, index) => {
						return (
							<li key={index}>
								<NavLink href={link.path}>
									{link.label}
									{link.children && (
										<ul className={styles.subLinks}>
											{link.children.map(
												(child, index) => {
													return (
														<li key={index}>
															<NavLink
																href={
																	link.path +
																	child.path
																}
															>
																{child.label}
															</NavLink>
														</li>
													);
												}
											)}
										</ul>
									)}
								</NavLink>
							</li>
						);
					})}
					<li>
						<Link
							onClick={() => setIsNavOpen(!isNavOpen)}
							href="/get-started"
						>
							<button className="d-block text-center bg-primary rounded-pill px-25 py-10 text-gray-dark font-bold">
								get qualified
							</button>
						</Link>
					</li>
				</ul>
			</aside>
			<div style={{height: '75px'}}></div>
		</>
	);
};

export default Header;
