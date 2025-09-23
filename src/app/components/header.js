"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`sticky top-0 z-40 `}>
      {!isOpen ? (
        <button
          className="size-12 group absolute top-5 right-5 z-50"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 duration-300 left-1/2 -translate-y-[5px] group-hover:rotate-10"></span>
          <span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 duration-300 left-1/2 translate-y-[5px] group-hover:-rotate-10"></span>
        </button>
      ) : (
        <button
          className="z-50 size-12 group absolute top-5 right-5"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 rotate-45 duration-300 left-1/2 translate-y-1/2"></span>
          <span className="inline-block w-3/5 h-0.5 rounded-full bg-gray-200 absolute top-1/2 -translate-x-1/2 -rotate-45 duration-300 left-1/2 translate-y-1/2"></span>
        </button>
      )}
      <div
        className={`fixed inset-0  h-dvh w-full backdrop-blur-2xl transform transition-transform duration-500 bg-black/10  z-40  ${
          !isOpen ? "translate-x-full" : "translate-x-0 "
        }`}
      >
        <nav className="flex flex-col justify-center items-center gap-10 p-5 h-full text-lg font-semibold">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 hover:scale-105 ease-in-out"
          >
            Home
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 hover:scale-105 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 hover:scale-105 ease-in-out"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-emerald-400 hover:scale-105 ease-in-out"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
