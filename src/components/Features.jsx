import React from "react";

function Hero() {
	return (
		<div className=' bg-[#ffffef] lg:px-20 px-20 py-6'>
			<div className=' container flex flex-col-reverse justify-center items-center mx-auto sm:flex-row'>
				<div className='w-full lg:w-1/2 mr-20'>
					<img
						src='/src/assets/img/features-img.png'
						alt='Hero Image'
						className='object-cover w-full h-auto'
					/>
				</div>
				<div className='w-full lg:w-1/2'>
					<div className='flex flex-col justify-center max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none'>
						<h4
							className='text-3xl font-bold sm:text-4xl'
							style={{ lineHeight: "3rem" }}>
							Let us do the worrying for <br className='block' />
							<span className='text-[#c959b7]'>you</span>
						</h4>

						<p className='mt-6 mb-8 '>
							Fly anywhere in the world without a hitch of worry, we’ll cover
							cleaning, decoration, pet care and so much more! Our dedicated
							team makes it their core goal to keep your home safe and void of
							issues or discrepancies
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
