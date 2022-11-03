import React from "react";
import {
  Bars4Icon,
  FunnelIcon,
  InboxIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

function NavBar() {
  return (
    <div className="absolute top-0 left-0 w-full h-full text-second pointer-events-none xl:text-first">
      <div className="sticky top-0 bg-first pt-[20px] xl:w-[351px] xl:bg-second xl:h-screen">
        <div className="w-full h-max flex justify-between items-center px-[20px]">
          <Bars4Icon className="h-[30px]" />
          <p className="text-[30px] font-bold tracking-[0.2em] text-gradient-to-r from-third/0 via-third to-third/0 sm:text-[50px]">
            סתישר
          </p>
        </div>
        <div className="w-full h-max flex justify-between items-center bg-gradient-to-r from-third/0 via-third to-third/0 py-[2px] mt-[20px]">
          <div className="w-full h-full flex items-center justify-between bg-first px-[20px] py-[10px] xl:bg-second ">
            <FunnelIcon className="h-[20px] sm:h-[30px]" />
            <InboxIcon className="h-[20px] sm:h-[30px]" />
            <MagnifyingGlassIcon className="h-[20px] sm:h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
