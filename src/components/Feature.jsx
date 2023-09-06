import { GrArticle } from "react-icons/gr";
import {BiHappyBeaming} from 'react-icons/bi'
import {GiSandsOfTime} from 'react-icons/gi'
const Feature = () => {
  return (
    <div className="mb-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold font-satoshi text-center text-orange-600">
          Features
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-around gap-10">
        <div className="bg-white rounded-xl shadow-md p-4 cursor-pointer">
          <div className="flex justify-center">
            <GrArticle size={50} />
          </div>
          <h2 className="text-center text-xl font-semibold my-2 text-indigo-500">Free Article Summaries</h2>
          <p className="font-satoshi text-gray-700">
            Save time and effort by summarizing articles without any charges. Long articles or blogs? No problem. Paste the link, get a summary, and decide if it's worth your time
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 cursor-pointer">
          <div className="flex justify-center">
            <BiHappyBeaming size={50} />
          </div>
          <h2 className="text-center text-xl font-semibold my-2 text-indigo-500">Easy-to-use</h2>
          <p className="font-satoshi text-gray-700">
          Simply input the URL of the article, and let our powerful AI take care of the rest, providing you with valuable summaries. Elevate your reading experience with our AI-powered article and blog summarizer.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 cursor-pointer">
          <div className="flex justify-center">
            <GiSandsOfTime size={50} />
          </div>
          <h2 className="text-center text-xl font-semibold my-2 text-indigo-500">Save your Time</h2>
          <p className="font-satoshi text-gray-700">
          Save your precious time by reading our concise summaries, providing you with essential insights without the need to go through lengthy articles or blogs. Efficient and informative
          </p>
        </div>
        {/* <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex justify-center">
            <GrArticle size={50} />
          </div>
          <h2 className="text-center text-xl font-semibold my-2">Free Article Summaries</h2>
          <p className="font-satoshi">
            Save time and effort by summarizing articles without any charges. Long articles
            no issue, lengthy blogs no issue just paste the link and read the summary to ensure whether it's actually worth the time or not.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Feature;
