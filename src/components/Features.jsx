import React from "react";

function Hero() {
	return (
		<div id='Features' className='bg-[#ffffef] lg:px-20 px-4 py-6'>
			<div className='container flex flex-col-reverse justify-center items-center mx-auto sm:flex-row'>
				<div className='w-full lg:w-1/2 mr-0 sm:mr-20'>
					<img
						src='/assets/img/features-img.png'
						alt='Feature Image'
						className='object-cover w-full h-auto'
					/>
				</div>
				<div className='w-full lg:w-1/2'>
					<div className='flex flex-col justify-center max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none'>
						<h4
							className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left'
							style={{ lineHeight: "1.5", marginTop: "2rem" }}>
							Let us do the worrying for <br className='block' />
							<span className='text-[#c959b7]'>you</span>
						</h4>

						<p className='mt-4 mb-6 sm:mb-8'>
							Fly anywhere in the world without a hitch of worry, we’ll cover
							cleaning, decoration, pet care and so much more! Our dedicated
							team makes it their core goal to keep your home safe and void of
							issues or discrepancies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
