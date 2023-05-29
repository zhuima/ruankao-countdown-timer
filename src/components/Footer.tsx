import React, { useState } from "react";
import wechat from "/assets/wechat.jpg";

const Heading = () => {
  return (
    <div className="absolute bottom-20 inset-x-1/2 -translate-x-1/2  bg-white border border-gray-200  shadow-md rounded-md w-32 h-32">
      <img src={wechat} alt="二维码" className="w-full h-full" />
      <p className="font-['Red Hat Text'] font-semi-bold text-[#8385A9] text-sm">
        欢迎关注二维码
      </p>
      <p className="font-['Red Hat Text'] font-semi-bold text-[#8385A9] text-sm">
        获取更多资料
      </p>
    </div>
  );
};

export const Footer = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <footer className="flex items-center w-full  justify-center text-lg text-white text-center border-t-2 border-red-800 fixed inset-x-0 bottom-0 p-3">
        <div className="font-['Red Hat Text'] font-semi-bold text-[#8385A9] ">
          Copy Right &copy; 2023 by{" "}
          <a href="https://www.bilibili.com/video/BV1Ce411N7pV/">
            软考通关宝典
          </a>
        </div>
        <div
          className="relative  mt-1 ml-2 shadow-md rounded-md opacity-80 hover:opacity-100 transition-opacity"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="WeChat"
            role="img"
            fill="#fff"
            className="fill-current text-gray-500 rounded-full w-5 h-5 "
          >
            <path
              width="20"
              height="20"
              rx="15%"
              fill="#00c70a"
              d="M0.114 0h19.772A0.114 0.114 0 0 1 20 0.114v19.772a0.114 0.114 0 0 1 -0.114 0.114H0.114A0.114 0.114 0 0 1 0 19.886V0.114A0.114 0.114 0 0 1 0.114 0z"
            />
            <path d="M15.703 14.414c0.898 -0.664 1.484 -1.641 1.484 -2.734 0 -1.993 -1.953 -3.594 -4.336 -3.594s-4.297 1.602 -4.297 3.594 1.914 3.594 4.297 3.594c0.508 0 0.977 -0.078 1.407 -0.195 0.157 -0.039 0.313 0 0.352 0.039l0.977 0.547c0.117 0.078 0.234 0 0.195 -0.157l-0.234 -0.859c0 -0.117 0.078 -0.195 0.157 -0.234m-4.297 -3.32a0.586 0.586 0 1 1 0 -1.133 0.586 0.586 0 0 1 0 1.133m2.891 0a0.586 0.586 0 1 1 0 -1.133 0.586 0.586 0 0 1 0 1.133" />
            <path d="M8.008 4.102c-2.852 0 -5.157 1.953 -5.157 4.336 0 1.289 0.664 2.461 1.758 3.243 0.117 0.078 0.195 0.195 0.157 0.391L4.492 13.008c-0.039 0.195 0.117 0.273 0.234 0.234l1.172 -0.664c0.117 -0.078 0.273 -0.117 0.43 -0.078 1.016 0.313 1.875 0.234 1.993 0.234 -0.938 -3.282 2.305 -5.157 4.805 -5 -0.391 -2.032 -2.539 -3.633 -5.118 -3.633M6.288 7.734a0.703 0.703 0 1 1 0 -1.368 0.703 0.703 0 0 1 0 1.368m3.477 0a0.703 0.703 0 1 1 0 -1.368 0.703 0.703 0 0 1 0 1.368" />
          </svg>
          {isHovering && <Heading />}
          {/* <Heading /> */}
        </div>
      </footer>
    </div>
  );
};
