import React from "react";

const ItemList = ({ heading, icon1, text1, icon2, text2, icon3, text3 }) => {
	return (
		<div className='mx-auto mt-8'>
			<h3 className='text-xl font-bold mb-4'>{heading}</h3>
			<ul className='list-none space-y-2'>
				<li>
					{icon1}
					{text1}
				</li>
				<li>
					{icon2}
					{text2}
				</li>
				<li>
					{icon3}
					{text3}
				</li>
			</ul>
		</div>
	);
};

export default ItemList;
