import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { logoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  // const isActive = (path) => location.pathname === path;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(routes, "asdfasdfadsfsd");
  return (
    <div
      className={`py-3 sm:py-6 fixed top-0 w-full z-50 text-headertextcolor transition-all duration-300 ${
        isScrolled
          ? "bg-black/10 bg-opacity-60 backdrop-blur-md text-white"
          : "bg-white/60 text-black backdrop-blur-md"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link to="/">
            <img
              src={logoImg}
              className="h-[2rem] md:h-[2.75rem] ml-5 scale-125"
              alt="logo"
            />
          </Link>
          <div className="lg:flex mt-7 items-center gap-10 hidden">
            {routes.map((obj) =>
              obj.name === "Services" ? (
                <div
                  key={obj.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={`${obj.path}`}
                    className={`link text-sm ${
                      pathname === `${obj.path}` && "active-link"
                    }`}
                  >
                    {obj.name}
                    {/* {obj.children[0].name} */}
                  </Link>

                  <div
                    className={`absolute top-full left-0 mt-5 bg-white text-black shadow-md rounded-md py-2 min-w-48 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
                      isServicesOpen
                        ? "max-h-56 opacity-100"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    {obj.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={`${obj.path}`}
                  className={`link text-sm ${
                    pathname === `${obj.path}` && "active-link"
                  }`}
                  key={obj.path}
                >
                  {obj.name}
                </Link>
              )
            )}
            {/* <Link className={`link text-sm `}>Blogs</Link> */}
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {routes.map((obj) =>
              obj.name === "Services" ? (
                <Link>
                  {" "}
                  <Link
                    key={obj.name}
                    to={obj.link}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-white font-medium transition-colors duration-300 link"
                  >
                    {obj.name}
                    <div>
                      {/* <Link>Web Development</Link> */}
                      {obj.children.map((child) => (
                        <div className="text-white ml-4 py-2">
                          <Link to={child.path} className="text-sm">
                            {child.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Link>
                </Link>
              ) : (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={obj.name}
                  className="text-xl text-white font-medium transition-colors duration-300 link"
                  to={obj.path}
                >
                  {obj.name}
                </Link>
              )
            )}
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="black"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeader;
