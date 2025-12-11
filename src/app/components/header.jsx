/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
"use client";
import React, { useEffect, useState } from "react";
import handleNav from "./scroll";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hover, setHover] = useState(false);

	useEffect(() => {
		if (hover && isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [hover && isOpen]);

	// const handleNav = (e, id) => {
	// 	// use gsap to nav
	// 	const target = document.getElementById(id);
	// 	e.preventDefault();
	// 	gsap.to(window, {
	// 		scrollTo: target,
	// 		duration: 0.3,
	// 		ease: "power3.inOut",
	// 	});
	// };
	return (
		<div className={`sticky top-0 z-40`}>
			{!isOpen ? (
				<button
					className="size-12 group absolute top-5 right-5 z-50 lg:size-16"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 duration-300 left-1/2 -translate-y-[5px] group-hover:rotate-10"></span>
					<span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 duration-300 left-1/2 translate-y-[5px] group-hover:-rotate-10"></span>
				</button>
			) : (
				<button
					className="z-50 size-12 group absolute top-5 right-5 lg:size-16"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 rotate-45 duration-300 left-1/2 translate-y-1/2"></span>
					<span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 -rotate-45 duration-300 left-1/2 translate-y-1/2"></span>
				</button>
			)}
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className={`fixed inset-0  h-dvh w-full lg:w-2/3 xl:w-1/2 lg:ml-auto backdrop-blur-2xl transform transition-transform duration-500 bg-black/10  z-40 overflow-hidden  ${
					!isOpen ? "translate-x-full" : "translate-x-0 "
				} `}
			>
				<nav className="flex flex-col justify-center items-center gap-10 p-5 h-full text-lg font-semibold lg:text-2xl lg:gap-14">
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "home");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						Home
					</button>
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "projects");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						Projects
					</button>
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "about");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						About
					</button>
					<button
						onClick={(e) => {
							setIsOpen(false);
							handleNav(e, "contact");
						}}
						className="hover:text-emerald-400 hover:scale-105 ease-in-out"
					>
						Contact
					</button>
				</nav>
			</div>
		</div>
	);
};

export default Header;
