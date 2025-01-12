import React from 'react';

const Sidebar = () => {
    return (
      <div className="w-full h-screen flex flex-col fixed lg:w-1/6 ">
        <div className="bg-base-100 text-white lg:h-screen">
          <div className="p-[30px] w-full bg-white text-black ">
            <img src="" alt="" />
            <h1>Logo</h1>
          </div>
          <div className="dropdown dropdown-bottom flex py-[15px] justify-between  lg:flex-col lg:gap-4 lg:py-[30px]">
            <div className="flex  items-center px-[30px] gap-7">
              <img src="src\assets\dashboard-svgrepo-com.svg" alt="" />
              <p>Dashboard</p>
            </div>
            <ul className="px-[30px] hidden lg:flex flex-col gap-4">
              <li className="logo flex gap-4 items-center">
                <img src="src\assets\product-svgrepo-com (1).svg" alt="" />
                <a href="">Бүтээгдэхүүн нэмэх</a>
              </li>
              <li className="logo flex gap-4 items-center">
                <img src="src\assets\settings-svgrepo-com.svg" alt="" />
                <a>Settings</a>
              </li>
              <li className="logo flex gap-4 items-center">
                <img src="src\assets\sign-out-alt-svgrepo-com.svg" alt="" />
                <a>Системээс гарах</a>
              </li>
            </ul>

            <div tabIndex={0} role="button" className="btn mx-[30px] lg:hidden">
              <img
                src="src\assets\hamburger-menu-more-svgrepo-com.svg"
                alt=""
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 z-[1]  w-screen shadow flex items-start"
            >
              <li className="logo flex flex-row items-center">
                <img src="src\assets\product-svgrepo-com (1).svg" alt="" />
                <a href="">Бүтээгдэхүүн нэмэх</a>
              </li>
              <li className="logo flex flex-row items-center">
                <img src="src\assets\settings-svgrepo-com.svg" alt="" />
                <a>Settings</a>
              </li>
              <li className="logo flex flex-row items-center">
                <img src="src\assets\sign-out-alt-svgrepo-com.svg" alt="" />
                <a>Системээс гарах</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;
