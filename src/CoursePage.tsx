import React from "react";
import Details from "./components/Details";
import { Navbar } from "./components/Narbars";
import data from "./data/data.json";
import ScrollToTop from "react-scroll-to-top";

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <section className="pt-20 pb-48 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">
                系统规划与管理师培训课程表
              </h2>
              <p className="text-lg leading-relaxed m-4 text-gray-200 text-white">
                课程为考前冲刺班，由马老师讲授, 如要报名请在B站私信马老师
              </p>
              <button className="bg-orange-400 py-3 px-8 mt-4 mr-4 rounded text-sm font-semibold hover:bg-opacity-75">
                课程时长: 30小时(20课时)
              </button>
              <button className="bg-orange-400 py-3 px-8 mt-4 mr-4 rounded text-sm font-semibold hover:bg-opacity-75">
                培训方式: 腾讯会议直播
              </button>
              <button className="bg-orange-400 py-3 px-8 mt-4 mr-4 rounded text-sm font-semibold hover:bg-opacity-75">
                每次直播时长: 20:00 ~ 21:00
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {data.map((course) => (
              <Details key={course.cid} {...course} />
            ))}
          </div>
        </div>

        <ScrollToTop />
      </section>
    </>
  );
};

export default CoursePage;
