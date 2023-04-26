import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo2.png";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="bg-white shadow" id="navbar-cta">
      <nav
        className="group container relative mx-auto flex items-center justify-between space-x-4 py-5 px-3"
        id="navbar"
      >
        <a
          href="https://www.ruankao168.top"
          className="flex items-center justify-start space-x-2"
          id="logo"
        >
          <img src={logo} alt="LOGO" className="block w-10 object-cover" />
          <h2 className="font-['Red Hat Text'] font-bold text-center text-lg">
            系规通关宝典
          </h2>
        </a>
        <ul
          id="navbar-menu"
          className="absolute right-1 top-[4.05rem] z-10 hidden w-full flex-col items-center justify-center bg-white px-3 shadow-md group-hover:flex md:static md:flex md:w-auto md:flex-row md:space-y-0 md:space-x-4 md:shadow-none"
        >
          <li className="px-3 py-1 md:p-0">
            <a
              href="https://www.ruankao168.top/course"
              className="px-3 py-2 flex items-center text-2xs uppercase font-bold leading-snug  hover:opacity-75"
            >
              课程计划
            </a>
          </li>
          <li className="px-3 py-1 md:p-0">
            <a
              href="https://www.bilibili.com/video/BV1Ce411N7pV/"
              className="px-3 py-2 flex items-center text-2xs uppercase font-bold leading-snug  hover:opacity-75"
            >
              B站视频
            </a>
          </li>
          <li className="px-3 py-1 md:p-0">
            <a
              href="https://www.ruankao168.top/document"
              className="px-3 py-2 flex items-center text-2xs uppercase font-bold leading-snug  hover:opacity-75"
            >
              学习指北
            </a>
          </li>
          <li className="px-3 py-1 md:p-0">
            <a
              href="https://www.ruankao168.top/books"
              className="px-3 py-2 flex items-center text-2xs uppercase font-bold leading-snug  hover:opacity-75"
            >
              教材参考
            </a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>
    </div>
  );
};
