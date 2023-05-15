import React from "react";
import Button from "./reusables/Button";

function Hero() {
	return (
		<div className='bg-white lg:px-20 px-4 py-8 sm:py-0'>
			<div className='container flex flex-col-reverse justify-center items-center mx-auto sm:flex-row'>
				<div className='w-full lg:w-1/2'>
					<div className='flex flex-col justify-center max-w-lg mx-auto lg:ml-0 lg:mr-auto lg:max-w-none'>
						<h1
							className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-center sm:text-left'
							style={{ lineHeight: "1.2" }}>
							Feel at ease <br className='block' />
							<span>on all your trips</span>
						</h1>
						<p className='mb-6 sm:mb-8'>
							We look after your home and environs while you're{" "}
							<br className='block' />
							away, providing the relaxation you deserve.
						</p>
					</div>
					<div className='flex flex-col mt-4 space-y-4 items-center sm:flex-row sm:space-y-0 sm:space-x-4'>
						<div className='sm:text-center'>
							<Button text='Get Started Today' />
						</div>
					</div>
				</div>
				<div className='w-full lg:w-1/2'>
					<img
						src='/assets/img/hero-img.png'
						alt='Hero Image'
						className='object-cover w-full h-auto'
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
