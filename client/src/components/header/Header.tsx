import { useAuthContext } from "@/contexts/Auth";
import useHandleOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const { logged, currentUser, logout } = useAuthContext();
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    setVisible(false);
    logout();
  };

  /* const ref = React.useRef();
  useHandleOutsideClick(ref, () => setVisible(false)); */

  return (
    <div className="h-16 py-6 flex flex-shrink-0 justify-between items-center px-14 shadow-item bg-black text-white">
      <Link href={logged ? "/" : "/login"} className="font-bold text-2xl">
        Karaca
      </Link>

      {logged ? (
        <div className="group relative">
          <button className="flex items-center bg-crimson shadow-item2 text-white py-2 rounded-md px-4 text-base ml-6">
            <span
              onClick={() => setVisible(!visible)}
              className="flex items-center"
            >
              <div className="hidden sm:block">{currentUser.name}</div>
            </span>
          </button>
          <div
            className={`absolute top-full right-0 w-64 rounded p-1 bg-black flex flex-col z-10  transition-all font-medium ${
              visible ? " visible mt-4" : " invisible mt-2"
            } `}
          >
            <Link
              onClick={() => setVisible(!visible)}
              href="/profile"
              className={
                "text-base inline-flex py-2 px-2 items-center rounded hover:bg-white hover:text-black  border-b-2"
              }
            >
              My Account
            </Link>

            <span
              className="border-b-2 border-red-400 cursor-pointer text-base py-2 px-2 items-center rounded  text-red-500  hover:bg-red-500 hover:text-white "
              onClick={handleLogout}
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
