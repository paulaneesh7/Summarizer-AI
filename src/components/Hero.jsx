import { logo } from "../assets";
import { mainIcon } from "../assets/index";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img
            src={mainIcon}
            alt="sumz_logo"
            className="object-contain h-10 w-auto"
          />
          <h1 className="text-2xl font-bold cursor-pointer ml-2">SummAIze</h1>
        </div>
        <button
          type="button"
          onClick={() => window.open("https://github.com/paulaneesh7")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify Your reading with SummAIze, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
