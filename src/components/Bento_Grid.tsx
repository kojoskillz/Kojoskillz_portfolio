"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Novatrix } from "uvcanvas";
import Globe from "../components/magicui/globe";
import GridPattern from "../components/ui/grid-pattern";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import BlurIn from "./magicui/blur-in";
import img1 from "../app/assets/img.png"
import Image from 'next/image';

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mt-[10rem] mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          header2 ={item.header2}
          header3 ={item.header3}
          header4 ={item.header4}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (

  
  <div className="flex w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-black dark:bg-black">
  <div className=" flex size-full items-center justify-center overflow-hidden  rounded-lg bg-background p-10 md:shadow-xl">
  <div className=" relative  h-full   items-center justify-center overflow-hidden bg-background  px-[13rem] xl:px-[28rem] md:px-[28rem] sm:px-40 pb-[3rem]  xl:pb-[10rem] lg:pb-[10rem]  pt-8 md:pb-10 md:shadow-xl  min-h-[6rem] rounded-xl   
  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-black dark:bg-black">
   
   <GridPattern
     width={30}
     height={30}
     x={-1}
     y={-1}
     strokeDasharray={"4 2"}
     className={cn(
       "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
     )}
   />

<div className="text-white -ml-[11rem] xl:-ml-[16rem] lg:-ml-[16rem] w-[22rem] xl:w-[33rem] lg:w-[30rem] md:w-[12rem] flex">
<Image 
            src={img1}
            alt="my_profile_pic"
            width="900"
            height="900"
            sizes="fit-content"
            className="img1 "
          />


<BlurIn
      word=" Hi, I'm Kwadwo Nyarko based in Ghana, a software engineer extraordinaire! Specialized in Frontend-Engineering.
             Websites are my jam. I conjure up digital magic one line of code at a time.
              When I'm not geeking out over code, I'm crafting websites that makes you go WOW!"
      className="font-semi-bold text-slate-200  dark:text-slate-200"
    />
</div>
   
 </div>
      
  </div>


  </div>

);


const Skeleton2 = () => (
  <div className=" relative grid  h-full w-[10rem] max-w-[32rem] items-center justify-center overflow-hidden bg-background  px-[11rem] xl:px-[8rem] md:px-[28rem] sm:px-40 pb-[11rem]  xl:-pb-[10rem] lg:-pb-[10rem]  pt-8 md:pb-30 md:shadow-xl  min-h-[6rem] rounded-xl   
  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-black dark:bg-black">
  

      <div className="text-white ">

         <BlurIn
            word=" "
            className="font-semi-bold text-slate-500  dark:text-slate-500"
          />
          <Novatrix />

      </div>
            
         
      <div className="pointer-events-none absolute  inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(0,0,0,0.1))]" />
      <Globe className="xl:top-0 m-auto mt-[1rem] xl:mt-[1rem] md:mt-[4rem] md:top-20 -ml-[1rem]  xl:w-[18rem] md:w-[12rem]" />
  </div>

);

const Skeleton3 = () => (
  <div className=" relative grid  h-full w-[10rem] max-w-[32rem] items-center justify-center overflow-hidden bg-background  px-[11rem] xl:px-[8rem] md:px-[28rem] sm:px-40 pb-[11rem]  xl:-pb-[10rem] lg:-pb-[10rem]  pt-8 md:pb-30 md:shadow-xl  min-h-[6rem] rounded-xl   
  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-black dark:bg-black">
  

   
      
  </div>

);

const Skeleton4 = () => (
  <div className="relative flex size-full items-center justify-center overflow-hidden  rounded-lg bg-background p-20 md:shadow-xl">
  <div className=" relative grid  h-full items-center justify-center overflow-hidden bg-background  px-[51rem] xl:px-[28rem] md:px-[22rem] sm:px-40 pb-[1rem]  xl:pb-[10rem] lg:pb-[10rem]  pt-8 md:pb-[12rem] md:shadow-xl  min-h-[6rem] rounded-xl   
  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-black dark:bg-black">
  
  
   
   <GridPattern
     width={30}
     height={30}
     x={-1}
     y={-1}
     strokeDasharray={"4 2"}
     className={cn(
       "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
     )}
   />

   <h1 className="text-white gap-2 mt-10 font-bold w-[5rem] md:text-wrap xl:text-nowrap text-wrap  m-auto place-content-center grid xl:flex lg:flex md:grid sm:grid xs:grid text-center text-6xl md:text-6xl xl:text-4xl ">
      I <span>
        <p className="text-cyan-300">
            breathe
        </p>
      </span>
         life into your projects
   </h1>


   
 </div>
      
  </div>

);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-cyan-300" />,
  },
  {
    title: "The Digital Revolution",
    description: "Where technology meets art, magic is born.",
    header2: <Skeleton2 />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-cyan-300" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header3: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-cyan-300" />,

  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header4: <Skeleton4 />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-cyan-300" />,
  },
];
