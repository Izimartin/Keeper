import React from "react";

const Button = ({ text }) => {
	return (
		<a
			rel='noopener noreferrer'
			href='#'
			className='px-8 py-3 text-medium font-semibold rounded bg-[#c959b7] border-b-4 border-r-4 border-black text-white mr-8'>
			{text}
		</a>
	);
};

export default Button;
