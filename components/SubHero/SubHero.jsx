import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Section from '../Section';

const SubHero = ({ tagline, children, className }) => {
	return (
		<>
			{
				tagline && <Section
					size="none"
					className={`SubHero bg-primary text-gray-dark pub-color-white py-30 ${className}`}
				>
					<h2 className="fs-lg font-weight-bold text-center pub-color-white mb-30">
						{tagline}
					</h2>
				</Section>
			}
			<Container className="nmt-2 mb-50">
				<Row className="justify-content-center">{children}</Row>
			</Container>
		</>
	);
};

export default SubHero;
