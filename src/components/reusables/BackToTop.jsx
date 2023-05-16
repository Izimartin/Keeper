import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const BackToTop = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 500) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<button
			className={`fixed bottom-8 right-8 bg-[#C959B7] text-white rounded-full p-6 cursor-pointer ${
				showButton ? "" : "hidden"
			}`}
			onClick={handleClick}>
			<FaAngleUp size={20} />
		</button>
	);
};

export default BackToTop;
