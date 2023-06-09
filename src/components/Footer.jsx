import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import ItemList from "./reusables/ItemList";
import logo from "../assets/img/logo.png";
import BackToTop from "./reusables/BackToTop";

function Footer() {
	return (
		<div className='lg:px-20 px-4 py-12 sm:py-0'>
			<div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10'>
				<div className='mt-8'>
					<a href='/'>
						<span className='sr-only'>Keeper</span>
						<img className='h-8' src={logo} alt='Logo' />
					</a>
					<p>
						We look after your home and environs while you're away, providing
						the relaxation you deserve.
					</p>
				</div>

				<div className='px-4'>
					<ItemList heading='Our Comapny' text1='Keeper' />
				</div>

				<div className='px-4'>
					<ItemList
						heading='Our Comapny'
						text1='Reporting'
						text2='Get in Touch'
						text3='Management'
					/>
				</div>

				<div className='px-4'>
					<ItemList
						heading='Address'
						icon1={<FiMapPin className='inline-block mr-2' />}
						text1='121, Victoria Str'
						icon2={<FiPhone className='inline-block mr-2' />}
						text2='07014759553'
					/>
				</div>
			</div>
			<BackToTop />
			<div className='mb-6 mt-12 text-center'>
				<p>&copy; 2023 Keeper. All rights reserved.</p>
			</div>
		</div>
	);
}

export default Footer;
