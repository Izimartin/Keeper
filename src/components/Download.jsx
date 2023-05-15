import React from "react";

function Download() {
	return (
		<div className='bg-[#f7fdff] lg:px-20 px-6 py-0'>
			<div className='container flex flex-col-reverse items-center mx-auto sm:flex-row'>
				<div className='w-full lg:w-1/2 lg:mr-16'>
					<div className='flex flex-col justify-start max-w-lg mx-auto lg:ml-0 lg:max-w-none'>
						<h4 className='text-3xl font-bold sm:text-4xl'>
							We leave no task <span className='text-[#c959b7]'>untouched</span>
						</h4>
						<p className='mt-6 mb-8'>
							All tasks highlighted in the app will be seen to, and will only be
							confirmed as complete after you’ve looked into it and verified.
							You get to keep track of every task you’ve highlighted.
						</p>
					</div>
				</div>
				<div className='w-full lg:w-1/2 justify-end'>
					<img
						src='/src/assets/img/download-img.png'
						alt='Hero Image'
						className='object-cover w-34 h-62'
					/>
				</div>
			</div>

			<div className='container flex flex-col items-center mx-auto sm:flex-row py-8'>
				<div className='w-full lg:w-1/2 sm:ml-0 lg:ml-36 flex justify-center mr-6'>
					<img
						src='/src/assets/img/background-img.png'
						alt=''
						className='object-cover w-54 h-cover'
					/>
				</div>

				<div className='w-full lg:w-2/1'>
					<div className='flex flex-col max-w-lg mx-auto lg:ml-0 lg:max-w-none'>
						<h4 className='text-3xl font-bold sm:text-4xl'>
							Stay <span className='text-[#c959b7]'>up to date </span>
							and keep track of activities in realtime
						</h4>
						<p className='mt-6 mb-8'>
							Book sessions and keep an eye out for happenings and updates in
							your home with our app. Converse with your housekeepers and stay
							in the loop with events at home while you’re away. Activities can
							be displayed simply as completed without being a distraction.
						</p>
					</div>
					<div className='flex justify-start'>
						<a href='#' className='mr-4'>
							<img
								src='/src/assets/img/appstore-button.png'
								alt='App Store'
								className='w-40 h-auto'
							/>
						</a>
						<a href='#'>
							<img
								src='/src/assets/img/playstore-button.png'
								alt='Play Store'
								className='w-40 h-auto'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Download;
