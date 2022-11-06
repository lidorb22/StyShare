import React, { useState } from "react";
import {
  Bars4Icon,
  FunnelIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Post from "./post";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function NavBar() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [container, setContainer] = useState("off");
  return (
    <div className="absolute top-0 left-0 w-full h-full text-second z-50 pointer-events-none xl:text-first xl:z-10 overflow-hidden">
      <div className="sticky pointer-events-none bg-scroll top-0 xl:bg-transparent w-full xl:h-screen">
        {/* start of serch */}
        {container !== "off" && (
          <div className="absolute top-0 left-0 h-screen w-full pt-[129px] pointer-events-none sm:pt-[169px] xl:pl-[351px] xl:pt-0">
            {container === "inbox" && (
              <div className="w-full h-full bg-first flex py-[40px] px-[20px] pointer-events-auto xl:px-[60px] xl:pt-[80px]">
                <div className="w-full h-full flex flex-col gap-[10px] text-first font-bold overflow-auto xl:text-[20px]">
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                  <p className="px-[4px] py-[4px] bg-second rounded-[5px] text-center sm:py-[12px] xl:py-[15px]">
                    לידור בניסתי ועוד 24 אנשים סימנו לייק לפוסט שפירמסת
                  </p>
                </div>
              </div>
            )}
            {container === "serch" && (
              <div className="w-full h-full flex flex-col gap-[30px] bg-gradient-to-b from-first to-first/90 overflow-y-auto backdrop-blur-[2px] pb-[40px] pointer-events-auto xl:px-[40px] xl:pt-[80px]">
                <div className="w-full ">
                  <div className="w-full flex flex-col justify-center items-end gap-[10px] p-[20px] xl:text-[20px]">
                    <div className="px-[10px] py-[2px] rounded-[5px] bg-second text-first font-bold">
                      <p>לידור בניסתי</p>
                    </div>
                    <div className="px-[10px] py-[2px] rounded-[5px] bg-second text-first font-bold">
                      <p>לידור בניסתי</p>
                    </div>
                    <div className="px-[10px] py-[2px] rounded-[5px] bg-second text-first font-bold">
                      <p>לידור בניסתי</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-[10px]">
                    <div className="flex flex-col w-full items-center text-white/50 font-bold text-[14px]">
                      <p>טען 3 תוצאות מתוך 8</p>
                      <p>טען עוד</p>
                    </div>
                    <div className="w-full h-[2px] bg-gradient-to-r from-third/0 via-third to-third/0"></div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-[30px]">
                  <Post />
                  <Post />
                  <Post />
                </div>
              </div>
            )}
          </div>
        )}
        <div className="bg-first h-full pointer-events-auto pt-[20px] xl:w-[351px] xl:bg-second h-full">
          {menu && (
            <div className="absolute top-0 left-0 w-full h-[100vh] bg-first/90 backdrop-blur-[2px] flex flex-col gap-[60px] items-center justify-center text-[30px] xl:w-[351px] xl:text-second">
              <div
                onClick={() => {
                  router.push("/profile");
                  setMenu(false);
                }}
                className="flex gap-[10px] items-center"
              >
                <p>הפרופיל שלי</p>
                <div className="bg-gradient-to-tr from-second to-third w-[20px] h-[20px] rounded-full shadow-[0px_0px_8px_#FBB752]"></div>
              </div>
              <div className="flex gap-[10px] items-center">
                <p>הגדרות</p>
                <div className="bg-gradient-to-tr from-second to-third w-[20px] h-[20px] rounded-full shadow-[0px_0px_8px_#FBB752]"></div>
              </div>
              <div
                onClick={() => {
                  router.push("/signup");
                  setMenu(false);
                }}
                className="flex gap-[10px] items-center"
              >
                <p>יציאה</p>
                <div className="bg-gradient-to-tr from-second to-third w-[20px] h-[20px] rounded-full shadow-[0px_0px_8px_#FBB752]"></div>
              </div>
            </div>
          )}
          <div className="hidden xl:block xl:absolute xl:left-[355px] xl:w-[2px] xl:h-[100vh] xl:bg-gradient-to-t xl:from-third/0 xl:via-third xl:to-third/0"></div>
          <div className="w-full h-max flex justify-between items-center px-[20px]">
            {menu ? (
              <XMarkIcon
                className="h-[30px] z-10 xl:text-second"
                onClick={() => setMenu(false)}
              />
            ) : (
              <Bars4Icon className="h-[30px]" onClick={() => setMenu(true)} />
            )}
            <p
              onClick={() => router.push("/")}
              className="text-[30px] font-bold tracking-[0.2em] text-gradient-to-r from-third/0 via-third to-third/0 sm:text-[50px] xl:absolute xl:top-0 xl:right-[20px] xl:text-second z-10"
            >
              סתישר
            </p>
            <div className="hidden pointer-events-none xl:block xl:absolute xl:top-0 xl:pl-[351px] xl:w-full h-[70px]">
              <div className="w-full h-full bg-first"></div>
              <div className="w-full h-[2px] bg-gradient-to-r from-third/0 via-third to-third/0"></div>
            </div>
          </div>
          {router.asPath !== "/profile" && router.asPath !== "/signup" && (
            <div className="w-full h-max flex justify-between items-center bg-gradient-to-r from-third/0 via-third to-third/0 py-[2px] mt-[20px] relative">
              <motion.div
                animate={container}
                variants={{
                  serch: {
                    backgroundColor: "#FFF6E9",
                  },
                  filter: {
                    backgroundColor: "#FFF6E9",
                  },
                }}
                className="w-full h-full flex items-center justify-between bg-first px-[20px] py-[10px] xl:bg-second relative"
              >
                <motion.div
                  animate={container}
                  variants={{
                    serch: {
                      color: "#2E3039",
                    },
                    filter: {
                      color: "#FFBA52",
                    },
                  }}
                  className="h-[20px] sm:h-[30px]"
                >
                  <FunnelIcon
                    onClick={() =>
                      container !== "filter"
                        ? setContainer("filter")
                        : setContainer("off")
                    }
                    className="h-full"
                  />
                </motion.div>
                <motion.div
                  animate={container}
                  variants={{
                    serch: {
                      opacity: 0,
                      scale: 0.7,
                    },
                    inbox: {
                      color: "#FFBA52",
                    },
                    filter: {
                      opacity: 0,
                      scale: 0.7,
                    },
                  }}
                  className="h-[20px] sm:h-[30px]"
                >
                  <InboxIcon
                    onClick={() =>
                      container !== "inbox"
                        ? setContainer("inbox")
                        : setContainer("off")
                    }
                    className="h-full"
                  />
                </motion.div>
                <motion.div
                  animate={container}
                  variants={{
                    serch: {
                      color: "#FFBA52",
                    },
                    filter: {
                      opacity: 0,
                      scale: 0.7,
                    },
                  }}
                  className="h-[20px] sm:h-[30px]"
                >
                  <MagnifyingGlassIcon
                    onClick={() =>
                      container !== "serch"
                        ? setContainer("serch")
                        : setContainer("off")
                    }
                    className="h-full"
                  />
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
