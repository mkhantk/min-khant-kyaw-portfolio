import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./about/page";
import Stack from "./stack/page";
import Projects from "./projects/page";
import Link from "next/link";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen bg-zinc-900 text-gray-200 scroll-smooth"
    >
      <Header />
      <main className="h-svh flex flex-col justify-center items-start gap-8 p-5">
        <header className="text-3xl">
          <p>
            Hi <span className="animate-wave inline-block">👋🏼</span> I&apos;m
          </p>
          <p className="text-3xl font-bold text-emerald-400 leading-normal tracking-wide">
            Min Khant Kyaw
          </p>
          <p className="font-bold ">Front-end Developer</p>
        </header>
        <p className="text-lg">
          Creating clean, responsive web experiences with passion and purpose.
        </p>
        <div className="flex justify-center items-center gap-3">
          <a
            href="#projects"
            className="px-5 py-2 text-base flex justify-center items-center gap-3 hover:-translate-y-1 ease-in-out duration-300 bg-blue-500 rounded-lg shadow-blue-500/50 hover:shadow-lg hover:bg-blue-600"
          >
            Projects
          </a>
          <a
            href="#socials"
            className="px-5 py-2 text-base flex justify-center items-center gap-3 hover:-translate-y-1 ease-in-out duration-300 bg-blue-500 rounded-lg shadow-blue-500/50 hover:shadow-lg hover:bg-blue-600"
          >
            Let&apos;s Connect{" "}
            <span>
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
          </a>
        </div>
      </main>
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
