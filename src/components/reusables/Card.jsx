// Card.js

import React from "react";

const Card = ({ backgroundColor, icon, heading, isLast }) => {
	const cardStyle = {
		backgroundColor,
	};

	return (
		<div className='sm:w-1/2 mb-4 sm:mb-10 mt-10'>
			<div
				style={cardStyle}
				className='rounded-lg px-20 py-16 flex items-center sm:mr-4'>
				<img src={icon} alt='Card Icon' className='w-20 h-20 mr-4' />
				<h4 className='text-2xl text-white font-bold mr-10'>{heading}</h4>
			</div>
		</div>
	);
};

export default Card;
