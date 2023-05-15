import React from "react";
import Card from "./reusables/Card";

function WhyUS() {
	return (
		<div id='WhyUs' className='bg-[#f7fdff] lg:px-20 px-4 py-8 lg:py-20'>
			<div className='container flex flex-col items-center justify-center mx-auto'>
				<div className='w-full mx-auto'>
					<div className='flex flex-col justify-center max-w-3xl mx-auto'>
						<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>
							Why us?
						</h3>
						<p className='mt-4 sm:mt-6 mb-8 sm:mb-text-center'>
							Take control of your requests and tasks from wherever you are in
							the world, all displayed in real time for you. Confirm whatever
							tasks that have been assigned as completed so you don’t miss a
							thing. Converse with your housekeeper to get human feedback on
							activities or changes going on at home.
						</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col sm:flex-row justify-center'>
				<Card
					backgroundColor='#69C9DE'
					icon='/assets/Icons/Icon-1.png'
					heading='Control'
					isLast={false}
				/>
				<Card
					backgroundColor='#DE7069'
					icon='/assets/Icons/Icon-2.png'
					heading='Confirm'
					isLast={false}
				/>
				<Card
					backgroundColor='#72DE69'
					icon='/assets/Icons/Icon-3.png'
					heading='Converse'
					isLast={true}
				/>
			</div>
		</div>
	);
}

export default WhyUS;
