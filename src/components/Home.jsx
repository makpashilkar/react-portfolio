import React from "react";
import HeroImage from "../assests/heroimg.JPG";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Courteous and enthusiastic. I am interested in IT and everything in
            its orbit. I am fascinated by web programming,
            e.g. developing apps and building websites. I am keen to gain more
            experience in the field. For this reason, I am looking to join an
            organisation that is in alignment with my goals.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            alt="My Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
