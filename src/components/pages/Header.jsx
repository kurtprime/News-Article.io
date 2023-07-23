import React, { useEffect, useState } from "react";

function Header() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {windowSize.innerWidth > 768 ? (
        <header className="bg-[#192140] h-[84px] w-sceen text-white flex justify-center mb-[60px]">
          <div className="flex items-center mx-[5%] w-[1200px] justify-between  ">
            <a
              href="/ "
              className="text-[yellow] text-[24px] font-[700] tracking-[2.4px] cursor-pointer">
              LOGO
            </a>

            <div className="flex flex-row gap-[80px] text-[16px] font-medium">
              <div className="flex flex-row gap-[30px]">
                <h3 className="text-center text-[yellow] text-[16px] font-medium border-b-[1px] border-[yellow] leading-normal self-center  cursor-pointer">
                  Blog
                </h3>
                <h3 className="cursor-pointer self-center">About us</h3>
                <h3 className="cursor-pointer self-center">Reviews</h3>
              </div>
              <div className="flex flex-row gap-[20px]">
                <h3 className="text-gray-400 text-[16px] font-bold leading-none self-center cursor-pointer">
                  Sign up
                </h3>
                <div className="Buttons my-[18px] cursor-pointer w-[86px] h-12 px-5 py-4 rounded-[40px] border border-blue-600 justify-center items-center gap-[5px] inline-flex">
                  <h3 className="Title text-blue-600 text-[16px] font-semibold leading-none whitespace-nowrap">
                    Log in
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <section class="top-nav bg-[#192140] h-[84px] w-sceen text-white flex  mb-[60px]">
          <a
            href="/ "
            className="text-[yellow] text-[24px] font-[700] tracking-[2.4px] cursor-pointer">
            LOGO
          </a>
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
          </label>
          <ul class="menu">
            <li>
              <h3 className="text-center text-[yellow] text-[16px] font-medium border-b-[1px] border-[yellow] leading-normal self-center  cursor-pointer">
                Blog
              </h3>
            </li>
            <li>
              <h3 className="cursor-pointer self-center">About us</h3>
            </li>
            <li>
              <h3 className="cursor-pointer self-center">Reviews</h3>
            </li>
            <li>
              <h3 className="text-gray-400 text-[16px] font-bold leading-none self-center cursor-pointer">
                Sign up
              </h3>
            </li>
            <li>
              <div className="Buttons my-[18px] cursor-pointer w-[86px] h-12 px-5 py-4 rounded-[40px] border border-blue-600 justify-center items-center gap-[5px] inline-flex">
                <h3 className="Title text-blue-600 text-[16px] font-semibold leading-none whitespace-nowrap">
                  Log in
                </h3>
              </div>
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

export default Header;
