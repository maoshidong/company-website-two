import styles from './Card.module.scss';

const Card = ({ children, className, pdClassName="p-30", ...rest }) => {
	return (
		<article
			className={`${pdClassName} shadow bg-white rounded-lg text-gray mb-md-0 mb-32 ${styles.Card} ${
				className || ''
			} `}
			{...rest}
		>
			{children}
		</article>
	);
};

export default Card;
