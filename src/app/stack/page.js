import React from "react";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiVite,
} from "@icons-pack/react-simple-icons";

function Stack() {
  return (
    <section id="stacks" className="">
      <main className="p-5 mb-10 md:w-4/5 md:m-auto lg:my-12">
        <h2 className="text-xl my-10 text-emerald-400 font-semibold md:text-3xl md:text-center">
          My Stack
        </h2>
        <div className="grid grid-cols-2  justify-start items-center gap-8 text-base md:flex flex-wrap md:justify-center">
          <div className="flex justify-start items-center gap-2">
            <SiHtml5 color="default" size={35} />
            <span>HTML</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiCss color="default" size={35} />
            <span>CSS</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiJavascript color="default" size={35} />
            <span>Javascript</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiReact color="default" size={35} />
            <span>React</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiTailwindcss color="default" size={35} />
            <span>TailwindCSS</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiRedux color="default" size={35} />
            <span>Redux</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiReactrouter color="default" size={35} />
            <span>React Router</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiVite color="default" size={35} />
            <span>Vite</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiNextdotjs className="text-gray-200" size={35} />
            <span>Next.Js</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiGit color="default" size={35} />
            <span>Git</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <SiGithub className="text-gray-200" size={35} />
            <span>GitHub</span>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Stack;
