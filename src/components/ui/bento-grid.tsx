import { cn } from "@/lib/utils";
import Image from 'next/image';
import img1 from "../ui/img.png";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  header2,
  header3,
  header4,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  header2?: React.ReactNode;
  header3?: React.ReactNode;
  header4?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-black border border-white/10 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      {header2}
      {header3}
      {header4}
      <div className="group-hover/bento:translate-x-2 transition duration-200 " >
        {icon}
  
        <div className="font-sans font-bold text-slate-400 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-slate-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
