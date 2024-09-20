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
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
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
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
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
              Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem 
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
