import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { navLinkItemProps, navLinks } from "../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-10">
      <ul className="list-none sm:flex hidden justify-end items-start flex-1">
        {navLinks.map((navLink: navLinkItemProps, index: number) => (
          <li
            key={navLink.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-sky-400 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-10">
        {!toggleMenu ? (
          <IoMdMenu
            className="w-[28px] h-[28px] object-contain text-white"
            onClick={() => setToggleMenu((currToggleMenu) => !currToggleMenu)}
          />
        ) : (
          <IoMdClose
            className="w-[28px] h-[28px] object-contain text-white"
            onClick={() => setToggleMenu((currToggleMenu) => !currToggleMenu)}
          />
        )}
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[200px] rounded-xk sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((navLink: navLinkItemProps, index: number) => (
              <li
                key={navLink.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-3"
                } `}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
