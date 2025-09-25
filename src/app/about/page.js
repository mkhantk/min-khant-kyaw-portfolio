import React from "react";

function About() {
  return (
    <section id="about" className="">
      <main className="text-base leading-relaxed  p-5 text-start mb-10 md:w-4/5 md:m-auto md:text-lg xl:text-xl xl:w-3/5 ">
        <h2 className="text-xl font-semibold my-5 text-emerald-400 md:text-3xl md:text-center lg:my-10 xl:text-5xl">
          Who am i
        </h2>
        <p className="mb-5 lg:mb-8">
          Hi, I&apos;m a passionate frontend developer from Myanmar who loves
          building minimal, aesthetic, and responsive websites. Currently,
          I&apos;m using React and TailwindCSS to create clean and user-friendly
          web pages along with other tools such as Redux, Vite, and NextJS.
          I&apos;m also exploring backend frameworks and languages to get a
          better idea of how the web works.
        </p>

        <p>
          Outside of web development, I enjoy learning about open-source
          software and Linux, which inspires the way I see design, performance,
          and problem-solving.
        </p>
      </main>
    </section>
  );
}

export default About;
