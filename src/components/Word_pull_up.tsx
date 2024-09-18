import WordPullUp from "./magicui/word-pull-up";

export default function WordPullUpDemo() {
  return (
    <WordPullUp
      className="text-[55px] mt-32  text-wrap font-extrabold font-sans tracking-tighter p-1 overflow-x-hidden overflow-y-hidden text-white dark:text-white md:text-7xl md:leading-[5rem]"
      words="Meet the brain behind the code..."
    />
  );
}
