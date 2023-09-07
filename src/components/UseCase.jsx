import { BsArrowRightShort } from "react-icons/bs";

const UseCase = () => {
  return (
    <div className="mb-10 mt-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold font-satoshi text-center text-orange-600">
          Use Cases
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow-md p-4 flex cursor-pointer hover:scale-105 duration-500">
          <BsArrowRightShort size={25} />
          <p className="font-satoshi ml-4 font-medium text-gray-700">
            Stay informed on current events and industry news by quickly
            summarizing relevant articles.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex cursor-pointer hover:scale-105 duration-500">
          <BsArrowRightShort size={25} />
          <p className="font-satoshi ml-4 font-medium text-gray-700">
            Boost productivity by focusing on the most important information
            from long-form content.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex cursor-pointer hover:scale-105 duration-500">
          <BsArrowRightShort size={25} />
          <p className="font-satoshi ml-4 font-medium text-gray-700">
            Enhance your reading experience by obtaining concise and informative
            summaries.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex cursor-pointer hover:scale-105 duration-500">
          <BsArrowRightShort size={25} />
          <p className="font-satoshi ml-4 font-medium text-gray-700">
            Simplify research by summarizing multiple articles for better
            comparison and analysis .
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCase;
