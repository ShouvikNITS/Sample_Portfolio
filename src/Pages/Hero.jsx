import React from "react";
import Button from "../Components/Button";

const Hero = () => {
  return (
    <div
      id="about"
      className=" flex items-center justify-center pl-8 pr-8 w-[1300px] ml-[10rem] h-screen"
    >
      <div className=" flex-col pl-[5rem]">
        <h1 className=" text-6xl font-bold mb-2">Hello, I am</h1>
        <h2 className=" text-6xl font-bold mb-5">Shouvik Paul</h2>
        <p className=" text-xl font-medium w-[80%] mb-4">
          I am an Electronics and Communication Engineering Undergraduate at <a class="about__description-link" href="https://www.nits.ac.in/" target="_blank">NIT Silchar</a>. I am learning Web Development and focusing on my problem solving skills.
          I am a <strong>space-enthusiast</strong>. I love sketching
          <strong>portrait</strong> of people and listening to <strong>music</strong>. I am a passionate <strong>Researcher</strong> and love to <strong>Innovate</strong> existing technologies. I am a passionate <strong>Researcher</strong> and love to <strong>Innovate</strong> existing technologies.
          </p>
        <Button head="Check CV" />
      </div>
      <div>
        <div>
          <div className="flex justify-center items-center w-[30rem] h-[30rem] rounded-full overflow-clip ">
            <img src="IMG20240519075916.webp" alt="profile_photo" />
            <div className=" w-[30rem] h-[30rem] bg-gradient-to-t from-white from-15% via-transparent via-50% to-white to-85% absolute"></div>
            <div className=" w-[30rem] h-[30rem] bg-gradient-to-r from-white from-5% via-transparent via-45% to-white to-95% absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
