import React from "react";
import Details from "./components/Details";
import { Navbar } from "./components/Narbars";
import data from "./data/data.json";
import ScrollToTop from "react-scroll-to-top";
const Document = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 mb-12 px-4">
            <h2 className="text-4xl font-semibold text-white">
              马老师软考学习班六大法宝
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              如果决意去做一件事了，就不要再问自己和别人值不值得。心甘情愿才能理所当然，理所当然才会义无反顾。
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              01
            </div>

            <h6 className="text-xl mt-5 font-semibold text-white">每日打卡</h6>
            <p className="mt-2 mb-4 text-gray-500">
              每日打卡（信管网或其它app），目的是每天背10道选择真题答案.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              02
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">每周一文</h5>
            <p className="mt-2 mb-4 text-gray-500">
              每周必须抄写一篇论文,
              拿出90分钟，手机收起来，用400格原稿纸，真的动笔从头抄到尾，一气呵成.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              03
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">随堂考试</h5>
            <p className="mt-2 mb-4 text-gray-500">
              随堂考试（分数不重要，目的就是认识到自己的差距，一看全会，一落笔很多写不出来）.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              04
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              反复抄《32小时通关》上的重点
            </h5>
            <p className="mt-2 mb-4 text-gray-500">
              反复抄《32小时通关》上的重点，得动笔抄，看没用.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              05
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">
              反复做真题
            </h5>
            <p className="mt-2 mb-4 text-gray-500">
              反复做真题，从头到尾，3遍打底儿，最好5遍.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              06
            </div>
            <h5 className="text-xl mt-5 font-semibold text-white">提前结课</h5>
            <p className="mt-2 mb-4 text-gray-500">
              提前结课，目的是留出时间，自己还得从头到尾复习（自学、做题、动笔）至少2遍.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
