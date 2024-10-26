import { useEffect, useState } from "react";
import { HiOutlineSearch, HiOutlinePhone, HiUserCircle } from "react-icons/hi";

export const Header = () => {
  const [textSearch, setTextSearch] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(true);

  return (
    <div className=" flex flex-col items-center gap-2 shadow-lg">
      <div className="bg-green-500  w-full flex justify-evenly overflow-hidden">
        <div className=" ">
          <p className="text-pink-700 text-2xl">Nell Mart</p>
          <p className="text-black">Thiên đường mua sắm</p>
        </div>
        <div className="md:flex md:justify-evenly md:items-center md:gap-1">
          <div className="relative p-1">
            <input
              type="search"
              id="valSearch"
              onChange={(e) => {
                const val: any = e.target.value;
                val ? setTextSearch(true) : setTextSearch(false);
              }}
              className="outline-none border-none rounded-lg p-1"
            />
            {!textSearch ? (
              <HiOutlineSearch className="absolute right-2 top-3 cursor-pointer" />
            ) : null}
          </div>
          <div className="md:flex md:items-center hidden">
            <HiOutlinePhone />
            <p className="ml-1 text-sm">Tư vấn hỗ trợ</p>
          </div>
          <div className="md:flex md:items-center hidden">
            <HiUserCircle className="w-5 h-5" />
            <div className="ml-1 text-sm">
              <p>Xin chào !</p>
              <p className="font-semibold italic">Đăng nhập</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500   w-full overflow-hidden">
        {/* web menu */}
        <div className="hidden md:block" id="web-menu">
          <div className="space-x-1 px-2 pb-3 pt-2 md:flex md:justify-evenly md:items-center ">
            <a
              href="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Liên hệ
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Giới thiệu
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Sắp ra mắt
            </a>
          </div>
        </div>
        <nav id="navHeader" className="md:hidden">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <button
                  onClick={() => setShowNav(!showNav)}
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5" />

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {showNav ? (
            <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a
                  href="/"
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                  aria-current="page"
                >
                  Trang chủ
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Liên hệ
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Giới thiệu
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Sắp ra mắt
                </a>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </div>
  );
};
