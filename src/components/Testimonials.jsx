import React from "react";

function Testimonials() {
	return (
		<div className='lg:px-20 px-20 py-20'>
			<div className='container mx-auto '>
				<div className='flex flex-col items-start mt-8 '>
					<h2 className='text-3xl font-bold sm:text-4xl mb-8 font-bold'>
						Testimonials
					</h2>
				</div>

				<div className='container flex flex-col-reverse items-center mx-auto sm:flex-row mt-6'>
					<div className='w-full lg:w-2/1 mr-10 bg-[#F5F5F5] p-10 rounded-lg relative'>
						<div className='flex flex-col justify-start max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none'>
							<div className='absolute top-[-90px] right-[-30px]'>
								<img
									src='/src/assets/img/woman-img.png'
									alt='Profile'
									className='w-70 h-96'
								/>
							</div>

							<div>
								<h3 className='text-2xl font-bold mb-6 text-[#c959b7]'>
									Amanda E.
								</h3>
								<div className='mb-5 pr-72'>
									<p className='mb-4'>
										Trips with my family have been really rewarding as I don’t
										have to worry about our pets getting lonely or getting sick.
									</p>
									<p>
										It’s an exciting experience and I’ve gotten to meet the
										sweetest people.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='w-full lg:w-1/2 bg-[#F5F5F5] p-10 rounded-lg'>
						<div className='flex flex-col justify-start max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none'>
							<h4 className='text-2xl font-bold mb-6 text-[#c959b7]'>
								Gabriela Walters
							</h4>

							<p className='mb-8'>
								Not having to worry about the house being set on fire or the
								dogs getting out is a relief I can enjoy my vacation with my
								kids without having to bother about a thing
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
