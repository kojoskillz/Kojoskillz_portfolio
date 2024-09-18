import Navbar from "../components/Navbar";
import SparklesPreview from "../components/Homepage";
import NumberTickerDemo from "../components/Number_ticker";
import TextReveal from "../components/Text_reveal";
import WordPullUpDemo from "../components/Word_pull_up";
import '../app/globals.css';


export default function Home() {
  return (
    <>
        <Navbar />
        <SparklesPreview />
        <NumberTickerDemo />
        <WordPullUpDemo />
        <TextReveal />
    </>

  );
}
