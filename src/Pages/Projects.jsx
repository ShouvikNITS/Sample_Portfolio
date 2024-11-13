import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image:
      "https://res.cloudinary.com/dmgsgjyl9/image/upload/f_auto,q_auto/SWMA",
    title: "Smart Water Management App",
  },
  {
    image:
      "https://res.cloudinary.com/dmgsgjyl9/image/upload/f_auto,q_auto/S_Portfolio",
    title: "My Portfolio",
  },
  {
    image:
      "https://res.cloudinary.com/dmgsgjyl9/image/upload/f_auto,q_auto/SWMA",
    title: "Smart Water Management App",
  },
  {
    image:
      "https://res.cloudinary.com/dmgsgjyl9/image/upload/f_auto,q_auto/S_Portfolio",
    title: "My Portfolio",
  },
];

const Projects = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="projects" className="flex flex-col justify-center items-center pl-8 pr-8 ml-[10rem] h-screen bg-[#63E6BE]">
    <h1 className=' text-3xl font-medium relative top-[-8rem] text-white'>Projects</h1>
      <div className=" justify-center gap-8 items-centerh-[400px] w-3/4 h-2/4">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className=" flex rounded-2xl overflow-clip w-[19rem] h-[17rem] cursor-pointer">
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <p className=" flex justify-center font-bold uppercase mt-2 text-white text-md">{item.title}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
