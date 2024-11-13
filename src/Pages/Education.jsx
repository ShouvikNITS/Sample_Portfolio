import React from "react";
import Cards from "../Components/Cards";

const Education = () => {
  return (
    <div id="biodata" className=" flex flex-col justify-center items-center pl-8 pr-8 w-[1300px] ml-[10rem] h-screen">
      <h1 className=' text-3xl font-medium relative top-[-5rem]'>Bio Data</h1>
      <div className=" flex gap-12 ">
        <Cards
          heading="Education"
          l1="Matriculation: Sacred Heart High School, Golaghat"
          l2="Higher Secondary: Reliance Senior Secondary School, Golaghat"
          l3="B.Tech: National Institute of Technology, Silchar (pursuing)"
        />
        <Cards
          heading="What Else I Possess"
          l1="Creative thinking, Optimized approach to problem solving"
          l2="Eager to learn new technologies"
          l3="Interested in sci-fi, thriller and suspense movies"
          l4="Interested in research tasks"
          l5="Love to sketch portraits, photorealism drawing, etc"
          l6="Photo editing and designing in Photoshop and Figma"
        />
        <Cards
          heading="Extracurriculars"
          l1="Speedcubing of 2x2, 3x3, mirror, square-1, etc"
          l2="Sketching portraits of personalities"
          l3="Playing Chess, Carrom, etc"
        />
      </div>
    </div>
  );
};

export default Education;
