import { cn } from "@/lib/utils";
import Marquee from "../components/ui/marquee";
// import Image from 'next/image';

const reviews = [
  {
    name: "Winner Otuosorochi",
    username: "@Holiboi",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "../app/assets/face1.jpg",
  },
  {
    name: "Jenny Benns",
    username: "@jen",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "../app/assets/face2.jpg",
  },
  {
    name: "Kofi Newton",
    username: "kofi",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "../app/assets/face3.jpg",
  },
  {
    name: "Jane Asare",
    username: "@jane",
    body: "I'm impressed with the works of Kojoskillz.",
    img: "../app/assets/face5.jpg",
  },
  {
    name: "Jenny Grace",
    username: "@jenny",
    body: "Need stunning web applications. Kwadwo is your plug.",
    img: "../app/assets/face7.jpg",
  },
  {
    name: "Ken Jao",
    username: "@ken",
    body: "Perfect piece of work.",
    img: "../app/assets/face6.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden p-4",
        // light styles
        "border-gray-400/10 bg-slate-950/30 border-[.5px] rounded-lg hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black text-white md:shadow-xl">
     <div>
        <h1 className="text-white text-center xl:mt-[5rem] -mt-[6rem] text-3xl xl:text-5xl lg:text-5xl md:text-3xl font-bold mb-5" >
           <span className="text-cyan-300 "> Feeback </span>  from my clients
        </h1>
     </div>
     
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
}
