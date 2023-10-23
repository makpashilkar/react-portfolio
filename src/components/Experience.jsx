import React from "react";
import reactlogo from "../assests/react.png";
import jslogo from "../assests/js.png";
import csslogo from "../assests/css.png";
import htmllogo from "../assests/html.png";
import java from "../assests/java.png";
import spring from "../assests/spring.png";

const Experience = () => {
  const techstack = [
    {
      id: 1,
      src: htmllogo,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: csslogo,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jslogo,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactlogo,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: spring,
      title: "SpringBoot",
      style: "shadow-green-600",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 ">These are the technologies I have worked on</p>
        </div>

        {/* tech cards */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techstack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
