// "use client";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./about/page";
import Stack from "./stack/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Home from "./home/page";
// import { useEffect } from "react";

export default function App() {
	// useEffect(() => {
	// 	window.history.scrollRestoration = "manual";
	// }, []);
	return (
		<div className="min-h-screen bg-zinc-900 text-gray-200 scroll-smooth">
			<Header />
			<Home />
			<About />
			<Stack />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
