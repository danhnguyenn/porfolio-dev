'use client';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from 'next-themes';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { NAV_ITEMS } from '@/models/NavItem';

const Navbar = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
	const [navbar, setNavbar] = useState<boolean>(false);

	return (
		<header
			className={`w-full mx-auto px-4 sm:px-20 sticky top-0 z-50 shadow  ${
				currentTheme === 'dark'
					? 'bg-stone-900 border-b border-stone-600'
					: 'bg-white'
			}`}
		>
			<div className="md:flex justify-between items-center">
				<div className="flex justify-between items-center py-3 md:py-5">
					<div className="py-5 block">
						<h2 className="text-2xl font-bold">Danh Nguyen</h2>
					</div>

					<div className="md:hidden">
						<button
							className={`p-2 rounded-md outline-none ${
								currentTheme === 'dark' ? 'text-neutral-100' : 'text-gray-700'
							}`}
							onClick={() => setNavbar(!navbar)}
						>
							{navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
						</button>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						}`}
					>
						<div className="md:flex space-y-8 md:space-x-6 items-center md:space-y-0">
							{NAV_ITEMS.map((item, index) => {
								return (
									<Link
										key={index}
										to={item.page}
										className={`block lg:inline-block hover:text-neutral-500 ${
											currentTheme === 'dark'
												? 'text-neutral-100'
												: 'text-neutral-900'
										}`}
										activeClass="active"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										onClick={() => setNavbar(!navbar)}
									>
										{item.label}
									</Link>
								);
							})}
							{currentTheme === 'dark' ? (
								<button
									onClick={() => setTheme('light')}
									className="bg-slate-100 p-2 rounded-xl"
								>
									<RiSunLine size={25} color="black" />
								</button>
							) : (
								<button
									onClick={() => setTheme('dark')}
									className="bg-slate-100 p-2 rounded-xl"
								>
									<RiMoonFill size={25} />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
