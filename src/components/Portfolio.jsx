import React from "react";
import edge from "../assests/edge.png";
import hotel from "../assests/hotel.png";
import loan from "../assests/loan.png";
import newsgrid from "../assests/newsgrid.png";
import eventbuddy from "../assests/eventbuddy.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: edge,
      demo: "https://edgeledgermak.netlify.app/",
      code: "",
    },
    {
      id: 2,
      src: loan,
      demo: "https://loancalculatormak.netlify.app/",
      code: "",
    },
    {
      id: 3,
      src: hotel,
      demo: "https://hotelwebsitemak.netlify.app/",
      code: "",
    },
    {
      id: 4,
      src: newsgrid,
      demo: "https://newsgridmak.netlify.app/",
      code: "https://github.com/makpashilkar/newsgrid",
    },
    {
      id: 5,
      src: eventbuddy,
      demo: "https://eventbuddyplan.netlify.app",
      code: "https://github.com/makpashilkar/eventplanner",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* stucture for card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
