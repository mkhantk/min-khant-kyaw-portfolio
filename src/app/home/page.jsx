"use client";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import handleNav from "../components/scroll";

gsap.registerPlugin(SplitText);
const Home = () => {
	const containerRef = useRef();
	useEffect(() => {
		window.history.scrollRestoration = "manual";
		document.body.style.overflow = "hidden"; // so that when the page load it can't be scroll.
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);
	useGSAP(() => {
		const splitText = new SplitText(".name", { type: "chars" });
		const myChars = splitText.chars;
		gsap.set(containerRef.current, { opacity: 1 });
		gsap.set(containerRef.current.children, { opacity: 0 });
		gsap.set(".name", { opacity: 1 });

		const container = Array.from(containerRef.current.children).filter(
			(ele) => !ele.querySelector(".name"),
		);

		const timeline = gsap.timeline({
			delay: 1,
			onComplete: () => {
				document.body.style.overflow = "auto";
				document.querySelector(".name").addEventListener("mouseenter", () => {
					gsap.to(".name", { scale: 1.2, duration: 0.3, ease: "power2.out" });
				});
				document.querySelector(".name").addEventListener("mouseleave", () => {
					gsap.to(".name", { scale: 1, duration: 0.3, ease: "elastic.out" });
				});
			},
		});
		timeline
			.fromTo(
				myChars,
				{
					opacity: 0,
				},
				{
					opacity: 1,

					stagger: 0.05,
					duration: 0.5,
					ease: "power2.inOut",
				},
			)
			.to(container, {
				opacity: 1,
				y: 0,
				stagger: 0.3,
				duration: 0.5,
				ease: "power2.inOut",
			})
			.fromTo(
				".button",
				{ opacity: 0, y: 0 },
				{
					opacity: 1,
					y: 5,
					stagger: 0.1,
					duration: 0.3,
					ease: "elastic.out",
				},
				"-=0.3",
			);

		document.querySelectorAll(".button").forEach((button) => {
			button.addEventListener("mouseenter", () => {
				gsap.to(button, { scale: 1.2, duration: 0.3, ease: "power2.out" });
			});
			button.addEventListener("mouseleave", () => {
				gsap.to(button, { scale: 1, duration: 0.3, ease: "elastic.out" });
			});
		});

		return () => {
			splitText.revert();
		};
	}, []);

	return (
		<main
			ref={containerRef}
			id="home"
			className="opacity-0 h-svh flex flex-col justify-center items-start gap-6 p-5 md:items-center md:w-full"
		>
			{/* <header id="header" className="text-3xl md:text-4xl xl:text-5xl">
			</header> */}
			<p className="text-start md:text-center text-3xl md:text-4xl xl:text-5xl">
				Hi <span className="animate-wave delay-1000 inline-block ">👋🏼</span>{" "}
				I&apos;m
			</p>
			<p className="name text-3xl font-bold text-emerald-400 leading-normal tracking-wide md:text-center md:text-6xl xl:text-8xl xl:leading-relaxed ">
				Min Khant Kyaw
			</p>
			<p className="font-bold  md:text-center text-3xl md:text-4xl xl:text-5xl">
				Front-end Developer
			</p>
			<p className="text-lg md:text-xl xl:text-3xl">
				Creating clean, responsive web experiences with passion and purpose.
			</p>
			<div className="buttons flex justify-center items-center gap-3 md:gap-5">
				<button
					onClick={(e) => handleNav(e, "projects")}
					className="button px-5 py-2 text-base flex justify-center items-center gap-3 hover:bg-emerald-500 ring rounded-lg md:font-semibold xl:text-xl"
				>
					Projects
				</button>
				<button
					onClick={(e) => handleNav(e, "contact")}
					className="button px-5 py-2 text-base flex justify-center items-center gap-3 hover:bg-emerald-500 ring rounded-lg md:font-semibold xl:text-xl"
				>
					Let&apos;s Connect{" "}
					<span>
						{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
					</span>
				</button>
			</div>
		</main>
	);
};

export default Home;
