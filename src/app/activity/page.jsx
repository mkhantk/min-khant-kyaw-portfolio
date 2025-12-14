"use client";

import Image from "next/image";

import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Activity = () => {
	useGSAP(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#activity",
				start: "top 60%",
			},
		});
		timeline
			.fromTo(
				".activity-title",
				{
					y: 20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
				},
			)

			.fromTo(
				".activity-card",
				{ y: 20, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
					stagger: 0.2,
				},
			);
	}, []);

	return (
		<div id="activity" className="p-5 md:w-4/5 m-auto py-20 md:py-28">
			<h1 className="activity-title text-xl font-semibold text-emerald-400 my-8 md:text-3xl md:text-center xl:text-5xl lg:my-10">
				Activity
			</h1>
			<div className="w-full p-5">
				{/* activity container */}
				<section className="activity-card flex flex-col md:flex-row w-full gap-5">
					<Image
						src="/c2c.webp"
						alt="code2career hackathon"
						width={500}
						height={500}
						className=" rounded-lg w-full md:w-[50%] lg:w-[40%]  hover:scale-105 duration-300 ease-in-out"
					/>
					<div className="flex flex-col flex-1 gap-5">
						<h1 className="text-start text-xl font-bold">
							Code2Career Hackathon 2025 <br />{" "}
							<span className="text-base text-gray-200/50 font-normal">
								Yangon, Myanmar
							</span>
						</h1>
						<p>
							Built{" "}
							<a href="#0" className="text-emerald-400">
								ChateSat
							</a>{" "}
							App focused on real-world problem related on volunteers'
							coordination and collaboration on relief process after a disaster.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Activity;
