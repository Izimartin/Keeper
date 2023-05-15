import React from "react";
import Button from "./reusables/Button";

function JoinUs() {
	return (
		<div className=' bg-[#ffffef] lg:px-20 px-20 py-6'>
			<div className=' container flex flex-col-reverse justify-center items-center mx-auto sm:flex-row'>
				<div className='w-full lg:w-1/2 mr-20'>
					<img
						src='/src/assets/img/cup-img.png'
						alt='Hero Image'
						className='object-cover w-full h-auto'
					/>
				</div>
				<div className='w-full lg:w-1/2'>
					<div className='flex flex-col justify-center max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none'>
						<h3 className='text-3xl font-bold sm:text-5xl'>Join us now!</h3>

						<p className='mt-6 mb-16 '>
							Let that trip serve you well and have fun away from home We will
							keep your home warm and cozy for your arrival
						</p>
					</div>
					<Button text='Get started today' />
				</div>
			</div>
		</div>
	);
}

export default JoinUs;
