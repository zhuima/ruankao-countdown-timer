import React from "react";
import { Navbar } from "./components/Narbars";
import StickyBanner from "./components/StickyBanner";

function Document() {
  return (
    <>
      <StickyBanner />

      <Navbar />
      <div className="container mx-auto">
        <div role="article" className="py-12 md:px-8">
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
          <div className="px-6 xl:px-0">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8 ">
              <div
                role="cell"
                className="bg-gray-100 transform transition duration-500  hover:scale-110"
              >
                <div className="bg-white p-5 rounded-md relative h-full w-full">
                  <span>
                    <img
                      className="bg-gray-200 p-2 mb-5 rounded-full"
                      src="https://i.ibb.co/27R6nk5/home-1.png"
                      alt="home-1"
                    />
                  </span>
                  <h1 className="pb-4 text-2xl font-semibold">每日打卡</h1>
                  <div className="my-5">
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <h4 className="text-md text-gray-900 dark:text-gray-100">
                        每日打卡（信管网或其它app），目的是每天背10道选择真题答案.
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100">
                        不要为了打卡而打卡，要积累知识点
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        通过每日打卡，熟悉出题的套路，比如易混淆的概念和知识点
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        善于总结归纳，不要死记硬背
                      </h4>
                    </div>
                  </div>
                  <a
                    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                    href="javascript:void(0)"
                  >
                    <p>详情</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#4338CA"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                role="cell"
                className="bg-gray-100 transform transition duration-500  hover:scale-110"
              >
                <div className="bg-white p-5 rounded-md relative h-full w-full">
                  <span>
                    <img
                      className="bg-gray-200 p-2 mb-5 rounded-full"
                      src="https://i.ibb.co/bdGyLYk/pricetags-1.png"
                      alt="pricetags-1"
                    />
                  </span>
                  <h1 className="pb-4 text-2xl font-semibold">每周一文</h1>
                  <div className="my-5">
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        拿出90分钟，手机收起来，用400格原稿纸，真的动笔从头抄到尾，一气呵成.
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        形成自己的论文骨架，把自己的思路写出来，不要拘泥于格式
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        骨架一定要会背(这个在任何时候都是通用的)
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        PIOIS每个都要准备一篇论文模版，并且会背
                      </h4>
                    </div>
                  </div>
                  <a
                    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                    href="javascript:void(0)"
                  >
                    <p>详情</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#4338CA"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                role="cell"
                className="bg-gray-100 transform transition duration-500  hover:scale-110"
              >
                <div className="bg-white p-5 rounded-md relative h-full w-full">
                  <span>
                    <img
                      className="bg-gray-200 p-2 mb-5 rounded-full"
                      src="https://i.ibb.co/GT4KHvJ/card-1.png"
                      alt="home-1"
                    />
                  </span>
                  <h1 className="pb-4 text-2xl font-semibold">随堂考试</h1>
                  <div className="my-5">
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        随堂考试（分数不重要，目的就是认识到自己的差距，一看全会，一落笔很多写不出来）.
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        记得做适合自己的知识总结，不要盲目的做练习
                      </h4>
                    </div>
                  </div>

                  <a
                    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                    href="javascript:void(0)"
                  >
                    <p>详情</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#4338CA"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                role="cell"
                className="bg-gray-100 transform transition duration-500  hover:scale-110"
              >
                <div className="bg-white p-5 rounded-md h-full relative w-full">
                  <span>
                    <img
                      className="bg-gray-200 p-2 mb-5 rounded-full"
                      src="https://i.ibb.co/rG4r6NJ/notifications-1.png"
                      alt="home-1"
                    />
                  </span>
                  <h1 className="pb-4 text-2xl font-semibold">
                    反复抄《32小时通关》上的重点
                  </h1>
                  <div className="my-5">
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        动手才是王道
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        抄写的过程中记得总结，不要单纯的为了抄书而抄书
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        配合思维导图和助记词来优化抄书的复杂度
                      </h4>
                    </div>
                  </div>
                  <a
                    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                    href="javascript:void(0)"
                  >
                    <p>详情</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#4338CA"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                role="cell"
                className="bg-gray-100 transform transition duration-500  hover:scale-110"
              >
                <div className="relative bg-white p-5 rounded-md relative h-full w-full">
                  <span>
                    <img
                      className="bg-gray-200 p-2 mb-5 rounded-full"
                      src="https://i.ibb.co/HFC1hqn/people-1.png"
                      alt="home-1"
                    />
                  </span>
                  <h1 className="pb-4 text-2xl font-semibold">反复做真题</h1>
                  <div className="my-5">
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        反复做真题，从头到尾，3遍打底儿，最好5遍.
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        做题过程中不要记答案的位置，要记录答案的内容，动笔写起来
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        一定要动手写
                      </h4>
                    </div>
                  </div>
                  <a
                    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                    href="javascript:void(0)"
                  >
                    <p>详情</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#4338CA"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div
                role="cell"
                className="bg-gray-100 transform transition duration-500  hover:scale-110"
              >
                <div className="relative bg-white p-5 rounded-md relative h-full w-full">
                  <span>
                    <img
                      className="bg-gray-200 p-2 mb-5 rounded-full"
                      src="https://i.ibb.co/QX80fYm/lock-closed-1.png"
                      alt="home-1"
                    />
                  </span>
                  <h1 className="pb-4 text-2xl font-semibold">提前结课</h1>
                  <div className="my-5">
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        提前结课，目的是留出时间，自己还得从头到尾复习（自学、做题、动笔）至少2遍.
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        做到温故知新
                      </h4>
                    </div>
                    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
                        坚持回顾
                      </h4>
                    </div>
                  </div>
                  <a
                    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                    href="javascript:void(0)"
                  >
                    <p>详情</p>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#4338CA"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Document;
