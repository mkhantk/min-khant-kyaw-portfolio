"use client";

import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function About() {
	const sectionRef = useRef();
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 75%",
			},
		});

		tl.to(sectionRef.current, {
			opacity: 1,
			duration: 0.8,
			ease: "power2.out",
		});

		tl.fromTo(
			".about-me",
			{ x: -100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 0.9,
				ease: "power3.out",
			},
			"-=0.4",
		);

		tl.fromTo(
			".facts",
			{ x: 80, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				duration: 0.9,
				ease: "power3.out",
			},
			"-=0.6",
		);
	}, []);
	return (
		<section
			id="about"
			ref={sectionRef}
			className="about   py-20 md:py-24 flex flex-col justify-center items-center"
		>
			<main className="relative text-base grid grid-cols-1 md:grid-cols-6 gap-18 md:gap-0  p-5 md:p-0 my-10 md:w-4/5 md:text-lg xl:text-xl ">
				<section className="facts md:col-span-3 p-5 bg-emerald-400/10 rounded-md">
					{/* fun facts */}

					<h2 className="text-xl my-8 text-emerald-400 font-semibold md:text-3xl  xl:text-5xl">
						Fun Facts
					</h2>
					<ul className="leading-loose">
						<li>
							<span className="text-emerald-400 font-semibold">🎯 Role:</span>{" "}
							Frontend Developer
						</li>
						<li>
							<span className="text-emerald-400 font-semibold">
								🌍 Based in:
							</span>{" "}
							Yangon, Myanmar
						</li>
						{/* <li>
							<span className="text-emerald-400 font-semibold">
								🛠 Tech Stack:
							</span>{" "}
							React | Tailwind | Next.js
						</li> */}
						<li>
							<span className="text-emerald-400 font-semibold">
								💻 Interests:
							</span>{" "}
							Linux | Open Source
						</li>
						<li>
							<span className="text-emerald-400 font-semibold">
								🔥 Strengths:
							</span>{" "}
							Problem-solving | Adaptabilty
						</li>
						<li>
							<span className="text-emerald-400 font-semibold">🚀 Focus:</span>{" "}
							Responsive, interactive websites
						</li>
					</ul>
				</section>
				<section className="about-me md:col-span-3 px-5">
					{/* about mecki*/}
					<h2 className="text-xl my-8 text-emerald-400 font-semibold md:text-3xl  xl:text-5xl">
						About me
					</h2>

					<article className="leading-relaxed">
						<p className="my-2">
							I&apos;m a frontend developer from Myanmar, passionate about
							building minimal, aesthetic, and responsive websites. I mainly
							work with React, TailwindCSS, Vite and Next.js, while also
							learning backend development to better understand the web.
						</p>
						<p>
							When I'm not coding, I enjoy exploring open-source software and
							Linux. I also love watching movies and grabbing a coffee to relax
							☕.
						</p>
					</article>
				</section>
			</main>
		</section>
	);
}

export default About;
