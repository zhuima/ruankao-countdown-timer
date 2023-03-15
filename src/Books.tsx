import React from "react";
import { Navbar } from "./components/Narbars";
import StickyBanner from "./components/StickyBanner";
import book1 from "/assets/book1.png";
import book2 from "/assets/book2.png";
import book3 from "/assets/book3.png";
import ScrollToTop from "react-scroll-to-top";

const Books = () => {
  return (
    <>
      <StickyBanner />
      <Navbar />

      <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 text-white">
        <div
          className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
        >
          <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div
                className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
              >
                <div
                  className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase inline-block"
                >
                  <p className="inline">
                    <svg
                      className="w-3.5 h-3.5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </p>
                  <p className="inline text-xs font-medium">官方教材</p>
                </div>
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  系统规划与管理师考试大纲
                </a>
                <div className="pt-2 pr-0 pb-0 pl-0">
                  <p className="text-sm font-medium inline">出版社:</p>
                  <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                    清华大学出版社
                  </a>
                  <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                    · 2017年7月出版 ·
                  </p>
                  <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
                    书号:
                  </p>
                  <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                    9787302474722
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="block">
                <img
                  src={book1}
                  className="object-cover rounded-lg max-h-164 sm:max-h-196 btn- w-full h-full"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src={book2}
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-156 btn-"
              />
              <p
                className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
              >
                三方教材
              </p>
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                系统规划与管理师考试32小时通关
              </a>
              <p className="text-sm text-black text-gray-500    ">
                非凡作者阵容，内容系统，一站式解决，有的放矢，超高效率，超大幅思维导图。
              </p>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  中国水利水电出版社
                </a>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                  · 2018-01-01 ·
                </p>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                  9787517061199
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src={book3}
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-156 btn-"
              />
              <p
                className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
              >
                三方教材
              </p>
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                系统规划与管理师真题精析与命题密卷
              </a>
              <p className="text-sm text-black text-gray-500">
                多套近年真题，助你体验真实战场，1套押题密卷，领略大数据命中威力，答案准确解析深刻，浓缩著名一线软考讲师10年黄金经验。
              </p>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  中国水利水电出版社
                </a>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                  · 2019-02-01 ·
                </p>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                  9787517074502
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src={book3}
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-156 btn-"
              />
              <p
                className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
              >
                三方教材
              </p>
              <a className="text-lg font-bold sm:text-xl md:text-2xl">
                系统规划与管理师重点资料总结
              </a>
              <p className="text-sm text-black text-gray-500">
                全程思维导图指引重点难点、关键信息标记必背属性,
              </p>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
                  阿诺
                </a>
                <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
                  · 2019 ·
                </p>
                <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
                  xxxxxxx
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Books;
