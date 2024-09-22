import Image from "next/image";
import React from "react";
import {Timeline} from "../components/ui/timeline";


export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h1 className="text-cyan-300 uppercase dark:text-neutral-200 text-xl font-bold md:text-sm xl:text-4xl  mb-4">
             Bsc. Software Engineering
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-xl font-bold md:text-sm xl:text-4xl mb-4">
             IPMC UNIVERSITY COLLEGE
          </h1>

          <p className="text-cyan-50 text-[15px] dark:text-neutral-200 text-lg md:text-sm xl:text-xl  font-normal mb-8">
            I'm committed to enhancing software development skills in architecture, algorithms, 
            data science, and SDLC to design, develop, and deploy solutions that solve real-world problems.
          </p>
         
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h1 className="text-cyan-300 uppercase dark:text-neutral-200 text-xl font-bold md:text-sm xl:text-4xl mb-4">
             Certification
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-xl font-bold md:text-sm xl:text-4xl mb-4">
             FREECODECAMP
          </h1>
        
          <p className="text-cyan-50 text-[15px] dark:text-neutral-200 text-lg md:text-sm font-normal xl:text-xl  mb-8">
          Skilled in building dynamic web applications using HTML5, CSS3, JavaScript, and Responsive Web Design for dynamic and user-friendly web applications
          </p>
        
        </div>
      ),
    },
    {
      title: "2017-2020",
      content: (
        <div>
        <h1 className="text-cyan-300 uppercase dark:text-neutral-200 text-xl font-bold md:text-sm xl:text-4xl  mb-4">
             DBE. EDUCATION
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-xl font-bold md:text-sm xl:text-4xl  mb-4">
             PRESBYTERIAN COLLEGE OF EDUCATION
          </h1>
          <div className="mb-8">
            <h1 className="text-cyan-50 text-[16px] xl:text-xl ">
               I possess expertise in communication, education, and teaching methods, utilizing active learning and technology integration
            </h1>
          </div>
         
        </div>

  
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
