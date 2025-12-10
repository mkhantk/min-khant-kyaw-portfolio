"use client";
import React, { useRef } from "react";
import {
	SiCss,
	SiGit,
	SiGithub,
	SiGreensock,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiReactrouter,
	SiRedux,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from "@icons-pack/react-simple-icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Stack() {
	const stackRef = useRef();

	useGSAP(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: stackRef.current,
				start: "top 80%",
			},
		});

		timeline.fromTo(
			".stack-title",
			{ opacity: 0, y: 30 },
			{ opacity: 1, y: 0, duration: 0.6 },
		);

		timeline.fromTo(
			".logo",
			{
				opacity: 0,
				scale: 0.8,
				y: 60,
				rotation: () => gsap.utils.random(-15, 15),
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				rotation: 0,
				duration: 0.8,
				stagger: {
					amount: 0.6,
					from: "start",
					ease: "power2.out",
				},
			},
		);

		// add hover effects on icons
		document.querySelectorAll(".logo").forEach((logo) => {
			logo.addEventListener("mouseenter", () => {
				gsap.to(logo, {
					y: -10,
					scale: 1.2,
					ease: "power2.out",
					duration: 0.4,
				});
			});
			logo.addEventListener("mouseleave", () => {
				gsap.to(logo, {
					y: 0,
					scale: 1,
					duration: 0.6,
					ease: "elastic.out(1.2, 0.5)",
				});
			});
		});
	}, []);

	return (
		<section ref={stackRef} id="stacks" className="pb-28 max-w-5xl m-auto  ">
			<main className="p-5 mb-10 md:w-4/5 md:m-auto lg:my-12">
				<h2 className="stack-title text-xl my-8 text-emerald-400 font-semibold md:text-3xl sm:text-center xl:text-5xl">
					My Stack
				</h2>
				<div className="p-5 logo-row flex gap-16 justify-center items-center flex-wrap flex-1">
					<SiHtml5
						color="default"
						size={42}
						attributeName="HTML"
						className="logo m-auto"
					/>
					<SiCss
						color="default"
						size={42}
						attributeName="CSS"
						className="logo m-auto"
					/>
					<SiJavascript
						color="default"
						size={42}
						attributeName="Javascript"
						className="logo m-auto"
					/>
					<SiTypescript
						color="default"
						size={42}
						attributeName="Typescript"
						className="logo m-auto"
					/>
					<SiReact
						color="default"
						size={42}
						attributeName="React"
						className="logo m-auto"
					/>
					<SiTailwindcss
						color="default"
						size={42}
						attributeName="TailwindCSS"
						className="logo m-auto"
					/>
					<SiRedux
						color="default"
						size={42}
						attributeName="Redux"
						className="logo m-auto"
					/>
					<SiReactrouter
						color="default"
						size={42}
						attributeName="ReactRouter"
						className="logo m-auto"
					/>
					<SiVite
						color="default"
						size={42}
						attributeName="Vite"
						className="logo m-auto"
					/>
					<SiNextdotjs
						size={42}
						attributeName="Next.js"
						className="logo m-auto text-gray-200"
					/>
					<SiShadcnui
						color="default"
						size={42}
						attributeName="ShadcnUI"
						className="logo m-auto"
					/>
					<SiGreensock
						color="default"
						size={42}
						attributeName="GSAP"
						className="logo m-auto"
					/>
					<SiGit
						color="default"
						size={42}
						attributeName="Git"
						className="logo m-auto"
					/>
					<SiGithub
						size={42}
						attributeName="GitHub"
						className="logo m-auto text-gray-200"
					/>
				</div>
			</main>
		</section>
	);
}

export default Stack;
