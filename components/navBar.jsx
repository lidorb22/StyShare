import React, { useState } from "react";
import {
  Bars4Icon,
  FunnelIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full h-full text-second pointer-events-none xl:text-first xl:z-10 overflow-hidden">
      <div className="sticky pointer-events-auto top-0 bg-first pt-[20px] xl:w-[351px] xl:bg-second xl:h-screen">
        {menu && (
          <div className="absolute top-0 left-0 w-full h-[100vh] bg-first/90 backdrop-blur-[2px] flex flex-col gap-[60px] items-center justify-center text-[30px]">
            <div className="flex gap-[10px] items-center">
              <p>הפרופיל שלי</p>
              <div className="bg-gradient-to-tr from-second to-third w-[20px] h-[20px] rounded-full shadow-[0px_0px_8px_#FBB752]"></div>
            </div>
            <div className="flex gap-[10px] items-center">
              <p>הגדרות</p>
              <div className="bg-gradient-to-tr from-second to-third w-[20px] h-[20px] rounded-full shadow-[0px_0px_8px_#FBB752]"></div>
            </div>
            <div className="flex gap-[10px] items-center">
              <p>יציאה</p>
              <div className="bg-gradient-to-tr from-second to-third w-[20px] h-[20px] rounded-full shadow-[0px_0px_8px_#FBB752]"></div>
            </div>
          </div>
        )}
        <div className="hidden xl:block xl:absolute xl:left-[355px] xl:w-[2px] xl:h-[100vh] xl:bg-gradient-to-t xl:from-third/0 xl:via-third xl:to-third/0"></div>
        <div className="w-full h-max flex justify-between items-center px-[20px]">
          {menu ? (
            <XMarkIcon
              className="h-[30px] z-10"
              onClick={() => setMenu(false)}
            />
          ) : (
            <Bars4Icon className="h-[30px]" onClick={() => setMenu(true)} />
          )}
          <p className="text-[30px] font-bold tracking-[0.2em] text-gradient-to-r from-third/0 via-third to-third/0 sm:text-[50px] xl:opacity-0 z-10">
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
