import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const isLogged = false;
  const [visible, setVisible] = useState(false);
  return (
    <div className="h-16 flex flex-shrink-0 justify-between items-center px-14 shadow-item bg-black text-white">
      <Link href={"/"}>Logo</Link>

      {isLogged ? (
        <div className="group relative">
          <button className="flex items-center bg-black shadow-item2 text-white py-2 rounded-md px-4 text-base ml-6">
            <span
              onClick={() => setVisible(!visible)}
              className="flex items-center"
            >
              <div className="mr-3 flex justify-center items-center">Pp</div>
              <div className="hidden sm:block">Mustafa Hıncal</div>
              <div className="ml-0 sm:ml-3 flex justify-center items-center text-black">
                Arrow
              </div>
            </span>
          </button>
          <div
            className={`absolute top-full right-0 w-64 rounded p-1 bg-white flex flex-col z-10 duration-25 transition-all font-medium   ${
              visible ? " visible mt-4" : " invisible mt-2"
            } `}
          >
            <Link
              onClick={() => setVisible(!visible)}
              href="/profile"
              className={
                "text-base inline-flex py-2 px-2 items-center rounded hover:bg-gray-200  border-b-2"
              }
            >
              Hesabım
            </Link>
            <Link
              onClick={() => setVisible(!visible)}
              href="/profile/givenOffers"
              className={
                "text-base inline-flex py-2 px-2 items-center rounded hover:bg-gray-200 border-b-2  dark:hover:bg-gray-700 dark:border-gray-700"
              }
            >
              Verilen Teklifler
            </Link>
            <Link
              onClick={() => setVisible(!visible)}
              href="/profile/takenOffers"
              className={
                "text-base inline-flex py-2 px-2 items-center rounded hover:bg-gray-200 border-b-2"
              }
            >
              Alınan Teklifler
            </Link>
            <Link
              onClick={() => setVisible(!visible)}
              href="/profile/changePassword"
              className={
                "text-base inline-flex py-2 px-2 items-center rounded hover:bg-gray-200 border-b-2"
              }
            >
              Şifre Değiştir
            </Link>

            <span
              className="border-b-2 border-red-400 cursor-pointer text-base py-2 px-2 items-center rounded  text-red-500  hover:bg-red-500 hover:text-white "
              // onClick={() => handleLogOut()}
            >
              Sign Out
            </span>
          </div>
        </div>
      ) : (
        <div className="ml-10 flex items-center order-3">
          <Link
            className={"btn bg-crimson shadow-item text-white mr-5 text-base"}
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className={"btn bg-crimson shadow-item text-white text-base"}
            href={"/signup"}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
