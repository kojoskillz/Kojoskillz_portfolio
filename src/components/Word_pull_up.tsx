import WordPullUp from "./magicui/word-pull-up";

export default function WordPullUpDemo() {
  return (
    <WordPullUp
      className=" mt-20 -mb-[5rem] text-wrap font-extrabold md:mx-4 lg:mx-5 font-sans -tracking-2 md:tracking-tighter lg:tracking-tight p-5 overflow-x-hidden leading-[2.2rem] overflow-y-hidden text-white dark:text-white md:text-[30px] md:leading-[5rem] xl:text-[4rem] lg:text-[3rem] sm:text-xl text-[25px]"
      words="Meet the creator"
    />
  );
}
