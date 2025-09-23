import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "@icons-pack/react-simple-icons";

function Projects() {
  return (
    <section id="projects" className="">
      <main className="p-5">
        <h2 className="text-xl font-semibold text-emerald-400 my-5">
          Projects
        </h2>
        <div className="min-w-80 p-5 m-auto grid grid-cols-1 gap-10 justify-center items-center">
          <div
            id="1"
            className="shadow-lg shadow-blue-500/30 rounded-b-lg  hover:scale-105 ease-in-out duration-300"
          >
            <Image
              src="/space-tourism.png"
              alt="space-tourism-website"
              width={300}
              height={300}
              className="m-auto rounded-t-lg w-full"
            />
            <div className=" p-3 flex flex-col justify-between items-start gap-3 rounded-b-lg min-h-40">
              <div className="flex justify-start items-center gap-2">
                <h3 className="text-base font-bold">Space Tourism Website</h3>
                <Link
                  href="https://github.com/mkhantk/space-tourism-website"
                  target="_blank"
                  className="cursor-pointer "
                >
                  <SiGithub
                    className="text-gray-200 hover:text-emerald-400"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://space-tourism-website-seven-phi.vercel.app"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 hover:text-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-sm">
                Space-tourism-website build with mobile-first approach focus on
                responsive aspect.{" "}
              </p>
              <div className="flex gap-5">
                <SiReact color="default" />
                <SiTailwindcss color="default" />

                <SiVite color="default" />
              </div>
            </div>
          </div>
          <div
            id="2"
            className="shadow-lg shadow-blue-500/30 rounded-b-lg  hover:scale-105 ease-in-out duration-300"
          >
            <Image
              src="/portfolio.png"
              alt="portfolio"
              width={300}
              height={300}
              className="m-auto rounded-t-lg w-full"
            />
            <div className=" p-3 flex flex-col justify-between items-start gap-3 rounded-b-lg min-h-40">
              <div className="flex justify-start items-center gap-2">
                <h3 className="text-base font-bold">Portfolio </h3>
                <Link
                  href="https://github.com/mkhantk/portfolio"
                  target="_blank"
                  className="cursor-pointer "
                >
                  <SiGithub
                    className="text-gray-200 hover:text-emerald-400"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://portfolio-eta-bay-86.vercel.app"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 hover:text-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-sm">
                Portfolio website with minimal asethtic. Built with React,
                Tailwind and Nextjs.
              </p>
              <div className="flex gap-5">
                <SiReact color="default" />
                <SiTailwindcss color="default" />

                <SiNextdotjs className="text-gray-200" />
              </div>
            </div>
          </div>
          <div
            id="3"
            className="shadow-lg shadow-blue-500/30 rounded-b-lg  hover:scale-105 ease-in-out duration-300"
          >
            <Image
              src="/flashcard.png"
              alt="flashcard website"
              width={300}
              height={300}
              className="m-auto rounded-t-lg w-full"
            />
            <div className=" p-3 flex flex-col justify-between items-start gap-3 rounded-b-lg min-h-40">
              <div className="flex justify-start items-center gap-2">
                <h3 className="text-base font-bold">Flashcard </h3>
                <Link
                  href="https://github.com/mkhantk/flashcard"
                  target="_blank"
                  className="cursor-pointer "
                >
                  <SiGithub
                    className="text-gray-200 hover:text-emerald-400"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://flashcard-rose-sigma.vercel.app"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 hover:text-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-sm">
                Challenge your vocabulary knowledge. Built with React,
                Tailwindcss and Vite. Used Merriam Webster API and a wordlist
                from SCOWL.
              </p>

              <div className="flex gap-5">
                <SiReact color="default" />
                <SiTailwindcss color="default" />

                <SiVite color="default" />
              </div>
            </div>
          </div>
          <div
            id="4"
            className="shadow-lg shadow-blue-500/30 rounded-b-lg  hover:scale-105 ease-in-out duration-300"
          >
            <Image
              src="/ecom.png"
              alt="ecom demo"
              width={300}
              height={300}
              className="m-auto rounded-t-lg w-full"
            />
            <div className=" p-3 flex flex-col justify-center items-start gap-3 rounded-b-lg min-h-40">
              <div className="flex justify-start items-center gap-2">
                <h3 className="text-base font-bold">Ecom </h3>
                <Link
                  href="https://github.com/mkhantk/ecom"
                  target="_blank"
                  className="cursor-pointer "
                >
                  <SiGithub
                    className="text-gray-200 hover:text-emerald-400"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://mkhantk.github.io/ecom"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 hover:text-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-sm">
                Mini Ecom website with favorite and add to cart feature with
                mock data from mock api. Built with React, Tailwindcss and vite.
              </p>

              <div className="flex gap-5">
                <SiReact color="default" />
                <SiTailwindcss color="default" />

                <SiVite color="default" />
              </div>
            </div>
          </div>
          <div
            id="5"
            className="shadow-lg shadow-blue-500/30 rounded-b-lg  hover:scale-105 ease-in-out duration-300"
          >
            <Image
              src="/movieWizard.png"
              alt="movie wizard website"
              width={300}
              height={300}
              className="m-auto rounded-t-lg w-full"
            />
            <div className=" p-3 flex flex-col justify-center items-start gap-3 rounded-b-lg min-h-40">
              <div className="flex justify-start items-center gap-2">
                <h3 className="text-base font-bold">Movie Wizard</h3>
                <Link
                  href="https://github.com/mkhantk/movie-wizard"
                  target="_blank"
                  className="cursor-pointer "
                >
                  <SiGithub
                    className="text-gray-200 hover:text-emerald-400"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://mkhantk.github.io/movie-wizard"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 hover:text-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-sm">
                A movie recommender website using themoviedb api. Built with
                React, Tailwindcss and Vite.
              </p>
              <div className="flex gap-5">
                <SiReact color="default" />
                <SiTailwindcss color="default" />

                <SiVite color="default" />
              </div>
            </div>
          </div>
          <div
            id="6"
            className="shadow-lg shadow-blue-500/30 rounded-b-lg  hover:scale-105 ease-in-out duration-300"
          >
            <Image
              src="/productList.png"
              alt="product list with cart"
              width={300}
              height={300}
              className="m-auto rounded-t-lg w-full"
            />
            <div className=" p-3 flex flex-col justify-center items-start gap-3 rounded-b-lg min-h-40">
              <div className="flex justify-start items-center gap-2">
                <h3 className="text-base font-bold">Product list with cart</h3>
                <Link
                  href="https://github.com/mkhantk/product-list-with-cart"
                  target="_blank"
                  className="cursor-pointer "
                >
                  <SiGithub
                    className="text-gray-200 hover:text-emerald-400"
                    size={20}
                  />
                </Link>
                <Link
                  href="https://mkhantk.github.io/product-list-with-cart"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 hover:text-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              </div>
              <p className="text-sm">
                Mini food ordering website with add to cart and order fuction.
                Built with React, Tailwindcss and Vite.
              </p>
              <div className="flex gap-5">
                <SiReact color="default" />
                <SiTailwindcss color="default" />

                <SiVite color="default" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Projects;
