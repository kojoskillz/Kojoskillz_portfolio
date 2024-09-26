"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Globe from "../components/magicui/globe";
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
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-blackh dark:bg-black">

<div className="text-white  flex">
<Image 
            src={img1}
            alt="my_profile_pic"
            width="900"
            height="900"
            sizes="fit-content"
            className="img1  "
          />


<BlurIn
      word=" Hi, I'm Kwadwo Nyarko based in Ghana, a software engineer extraordinaire! Specialized in Frontend-Engineering.
             Websites are my jam I conjure up digital magic one line of code at a time.
              When I'm not geeking out over code, I'm crafting websites that makes you go WOW!"
      className="font-semi-bold text-slate-500  dark:text-slate-500"
    />
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
      </div>
            
         
      <div className="pointer-events-none absolute  inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(0,0,0,0.1))]" />
      <Globe className="xl:top-0 m-auto mt-[1rem] xl:mt-[1rem] md:mt-[4rem] md:top-20 -ml-[1rem]  xl:w-[18rem] md:w-[12rem]" />
  </div>

);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Where technology meets art, magic is born.",
    header2: <Skeleton2 />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    // header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,

  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    // header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
