import React, { useState } from "react";
import PropTypes from "prop-types";

export default function VerificationCode(props: any) {
  const [showContent, setShowContent] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleInput = (e: any) => {
    setError(false);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // 此处应从后台获取验证码并验证
    const correctCode = "xg45"; // 假设正确的验证码为123456
    if (inputValue === correctCode) {
      setShowContent(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {!showContent && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="p-4 rounded-lg border border-gray-400 group border-indigo-500 hover:bg-white hover:shadow-lg ">
            <p className="text-lg font-bold mb-4">
              扫描下面二维码关注本站微信公众号
            </p>
            <p className="text-lg font-bold mb-4">
              回复<span className="text-red-500">软考</span>获取验证码
            </p>
            <div className="border border-gray-300 rounded-md p-4 mb-4">
              <img
                src={props.image}
                alt="验证码"
                className="mx-auto"
                loading="lazy"
              />
            </div>
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="search"
                name="query"
                placeholder="请输入验证码"
                value={inputValue}
                onChange={handleInput}
                required
                className="rounded-md border border-gray-400 group border-indigo-500 p-2 mr-2 flex-1 w-full h-12 px-4 text-sm text-gray-700 bg-white  xl:transition-all xl:duration-300 xl:w-24 xl:focus:w-28 2xl:w-32 2xl:focus:w-44 xl:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-20"
              ></input>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              >
                确认
              </button>
            </form>
            {error && (
              <p className="text-red-500 ml-4">验证码错误，请重新输入</p>
            )}
          </div>
        </div>
      )}
      {showContent && props.children}
    </>
  );
}

VerificationCode.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
