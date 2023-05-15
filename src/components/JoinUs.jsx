import React from "react";
import Button from "./reusables/Button";

function JoinUs() {
	return (
		<div id='JoinUs' className='bg-[#ffffef] lg:px-20 px-4 py-12 sm:py-0'>
			<div className='container flex flex-col-reverse justify-center items-center mx-auto sm:flex-row'>
				<div className='w-full lg:w-1/2 mr-10 sm:mr-0 mb-8 sm:mb-0'>
					<img
						src='/assets/img/cup-img.png'
						alt='Hero Image'
						className='object-cover w-full h-auto'
					/>
				</div>
				<div className='w-full lg:w-1/2'>
					<div className='flex flex-col justify-center max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none '>
						<h3 className='text-3xl font-bold sm:text-5xl text-center sm:text-left'>
							Join us now!
						</h3>

						<p className='mt-4 sm:mt-6 mb-8 '>
							Let that trip serve you well and have fun away from home. We will
							keep your home warm and cozy for your arrival.
						</p>
					</div>

					<div className='flex flex-col mt-4 space-y-4 items-center sm:flex-row sm:space-y-0 sm:space-x-4'>
						<div className='sm:text-center'>
							<Button text='Get Started Today' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JoinUs;
