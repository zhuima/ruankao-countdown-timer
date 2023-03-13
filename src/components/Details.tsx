import React from "react";

interface courseProps {
  cid: number;
  img: string;
  title: string;
  time: string;
  progress: number;
}

const Details = ({ cid, img, title, time, progress }: courseProps) => {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform transition duration-500  hover:scale-110">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={img} alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-gray-700 text-xl mb-2">{title}</div>

            <div className="mt-4">
              <span className="text-base bg-teal-200 text-teal-800 text-xs px-2 inline-block   uppercase font-semibold tracking-wide">
                课程节数: {cid}
              </span>
            </div>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">
                开课时间: {time} {""}
              </span>
            </div>
            <div className="bg-gray-400 w-64 h-3 rounded-lg mt-4 overflow-hidden">
              {progress === 0 ? (
                <div className="bg-pink-400 w-0 h-full rounded-lg shadow-md"></div>
              ) : progress === 1 ? (
                <div className="bg-pink-400 w-1/4 h-full rounded-lg shadow-md"></div>
              ) : progress === 2 ? (
                <div className="bg-pink-400 w-2/4 h-full rounded-lg shadow-md"></div>
              ) : progress === 3 ? (
                <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
              ) : (
                <div className="bg-pink-400 w-full h-full rounded-lg shadow-md"></div>
              )}
            </div>
          </div>

          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
