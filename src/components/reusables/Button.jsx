import React from "react";

const Button = ({ text, targetSection }) => {
	const handleClick = () => {
		const section = document.getElementById(targetSection);
		if (section) {
			window.scrollTo({
				top: section.offsetTop,
				behavior: "smooth",
			});
		}
	};

	return (
		<button
			className='px-8 py-3 text-medium font-semibold rounded bg-[#c959b7] border-b-4 border-r-4 border-black text-white mr-8'
			onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
