import React, { useState } from "react";
import PropTypes from "prop-types";

export default function VerificationCode(props) {
  const [showContent, setShowContent] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 此处应从后台获取验证码并验证
    const correctCode = "123456"; // 假设正确的验证码为123456
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
          <div className="p-4 rounded-lg border border-gray-400">
            <p className="text-lg font-bold mb-4">
              扫描下面二维码关注本站微信公众号
            </p>
            <p className="text-lg font-bold mb-4">
              回复<span className="text-red-500">软考</span>获取验证码
            </p>
            <div className="border border-gray-300 rounded-md p-4 mb-4">
              <img src={props.image} alt="验证码" className="mx-auto" />
            </div>
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={handleInput}
                className="rounded-md border border-gray-400 p-2 mr-2 flex-1 w-full"
              />
              {inputValue && (
                <svg
                  onClick={() => setInputValue("")}
                  className="h-4 w-4 fill-current text-gray-400 absolute top-1/2 -mt-2 right-2 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10S0 15.5228475 0 10 4.4771525 0 10 0zm3.9393398 13.9393398a.99999996.99999996 0 1 1-1.4142136 1.4142136L10 11.4142136l-2.5251268 2.5251268a.99999996.99999996 0 1 1-1.4142136-1.4142136L8.5857864 10.0000003 6.0606595 7.4748735a.99999996.99999996 0 1 1 1.4142136-1.4142136L10 8.5857862l2.5251268-2.5251268a.99999996.99999996 0 1 1 1.4142136 1.4142136L11.4142136 10l2.5251268 2.5251268z"
                  />
                </svg>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md "
              >
                确认
              </button>
              {error && (
                <p className="text-red-500 ml-4">验证码错误，请重新输入</p>
              )}
            </form>
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
