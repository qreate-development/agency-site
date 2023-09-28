import { useState } from "react";
import logo from "../images/QD_icon_1(1).svg";
import hamburger_menu from "../images/hamburger-menu.svg";

export default function Header() {
  const navClosed = (
    <header className="max-w-6xl mx-auto text-white">
      <div className="fixed top-0 max-w-6xl shadow-md bg-slate-900 w-full px-5 py-3 flex justify-between">
        <a href="/"><img src={logo.src} alt="" className="w-12" /></a>
        <nav className="hidden py-2 md:flex">
          <ul className="flex md:flex-row md:space-x-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">services</a>
            </li>
            <li>
              <a href="/website-audit">website audit</a>
            </li>
            <li>
              <a
                href="mailto:qreatedevelopment@gmail.com"
                className="bg-blue-600 py-2 px-4"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <img
          src={hamburger_menu.src}
          alt=""
          onClick={openNav}
          className="w-8 md:hidden"
        />
      </div>
    </header>
  );

  const navOpen = (
    <header className="max-w-6xl mx-auto text-white">
      <div className="fixed top-0 max-w-6xl shadow-md bg-slate-900 w-full px-5 py-3 flex flex-col md:flex-row justify-between">
        <div className="flex justify-between">
          <a href="/"><img src={logo.src} alt="" className="w-12" /></a>
          <img
            src={hamburger_menu.src}
            alt=""
            onClick={closeNav}
            className="w-8 md:hidden"
          />
        </div>
        <nav className="flex py-2">
          <ul className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">services</a>
            </li>
            <li>
              <a href="/website-audit">website audit</a>
            </li>
            <li>
              <a
                href="mailto:qreatedevelopment@gmail.com"
                className="bg-blue-600 py-2 px-4"
              >
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );

  function openNav() {
    setNav(navOpen);
  }

  function closeNav() {
    setNav(navClosed);
  }

  const [nav, setNav] = useState(navClosed)



  return nav;
}
