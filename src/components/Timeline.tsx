import Image from "next/image";
import React from "react";
import {Timeline} from "../components/ui/timeline";
import img1 from "../app/assets/img.png"

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <h1 className="text-cyan-300 uppercase dark:text-neutral-200 text-xl font-bold md:text-sm  mb-4">
             Bsc. Software Engineering
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-xl font-bold md:text-sm  mb-4">
             IPMC UNIVERSITY COLLEGE
          </h1>

          <p className="text-white dark:text-neutral-200 text-lg md:text-sm font-normal mb-8">
            I am committed to enhancing my skills in software development, focusing on software architecture, 
            algorithms, data science, and the software development lifecycle (SDLC), to design, develop, and deploy cutting-edge software solutions that solve real-world problems and improve lives.
          </p>
         
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h1 className="text-cyan-300 uppercase dark:text-neutral-200 text-xl font-bold md:text-sm  mb-4">
             Certification
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-xl font-bold md:text-sm  mb-4">
             FREECODECAMP
          </h1>
        
          <p className="text-white dark:text-neutral-200 text-lg md:text-sm font-normal mb-8">
             I possess expertise in modern web development technologies, including HTML5, CSS3, JavaScript,
              and Responsive Web Design, enabling me to create dynamic, visually appealing, and user-friendly web applications.
          </p>
        
        </div>
      ),
    },
    {
      title: "2017-2020",
      content: (
        <div>
        <h1 className="text-cyan-300 uppercase dark:text-neutral-200 text-xl font-bold md:text-sm  mb-4">
             DBE. EDUCATION
          </h1>
          <h1 className="text-white dark:text-neutral-200 text-xl font-bold md:text-sm  mb-4">
             PRESBYTERIAN COLLEGE OF EDUCATION
          </h1>
          <div className="mb-8">
            <h1 className="text-white ">
              I possess expertise in communication, education, and teaching methods, utilizing active learning, project-based learning, and technology 
              integration to deliver engaging and effective learning experiences.
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
