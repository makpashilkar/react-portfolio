import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I am a passionate and experienced professional with a deep-rooted
          interest in React and web development. With a background as a system
          engineer, I have honed my skills in problem-solving, attention to
          detail, and the ability to work with complex systems.
        </p>

        <br />
        <p className="text-xl">
          With a strong foundation in both engineering and web development, I am
          well-equipped to tackle complex challenges and deliver high-quality,
          user-friendly web applications. My journey in these fields is defined
          by a relentless pursuit of excellence and a genuine enthusiasm for
          creating impactful digital experiences.
        </p>
        <br />

        <div name="languages">
          <div className="pb-8 mt-10">
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">
              Languages
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            <p className="text-xl">English</p>
            <p className="text-xl">Hindi</p>
            <p className="text-xl">Marathi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
