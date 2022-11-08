import React, { useState, useEffect } from "react";
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
import Serch from "./navBarC/serch";
import Inbox from "./navBarC/inbox";

function NavBar() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [container, setContainer] = useState("none");
  const [filter, setFilter] = useState("none");
  const [serchInput, setSerchInput] = useState("");

  useEffect(() => {
    if (container !== "none") {
      setContainer("none");
    }
    if (menu) {
      setMenu(false);
    }
  }, [router]);

  useEffect(() => {
    if (container !== "serch" && serchInput) {
      setSerchInput("");
    }
    if (container !== "filter" && filter !== "none") {
      setFilter("none");
    }
  }, [container]);

  return (
    <div className="absolute top-0 left-0 w-full h-full text-second z-50 pointer-events-none xl:text-first xl:z-10 overflow-hidden">
      <div className="sticky pointer-events-none bg-scroll top-0 xl:bg-transparent w-full xl:h-screen">
        {/* start of serch */}
        {container !== "none" && (
          <div className="absolute top-0 left-0 h-screen w-full pt-[129px] pointer-events-none sm:pt-[169px] xl:pl-[351px] xl:pt-0">
            {container === "inbox" && <Inbox />}
            {container === "serch" && <Serch input={serchInput} />}
          </div>
        )}
        <div className="bg-first h-full pointer-events-auto pt-[20px] xl:w-[351px] xl:bg-second h-full">
          {menu && (
            <div className="absolute top-0 left-0 w-full h-[100vh] bg-first/90 backdrop-blur-[2px] flex flex-col gap-[60px] items-center justify-center text-[30px] xl:w-[351px] xl:text-second z-10">
              <div
                onClick={() => {
                  router.push("/profile");
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
                        : setContainer("none")
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
                      display: "none",
                    },
                    inbox: {
                      color: "#FFBA52",
                    },
                    filter: {
                      opacity: 0,
                      scale: 0.7,
                      display: "none",
                    },
                  }}
                  className="h-[20px] sm:h-[30px]"
                >
                  <InboxIcon
                    onClick={() =>
                      container !== "inbox"
                        ? setContainer("inbox")
                        : setContainer("none")
                    }
                    className="h-full"
                  />
                </motion.div>
                <motion.input
                  animate={container}
                  variants={{
                    serch: {
                      display: "block",
                    },
                  }}
                  onChange={(e) => setSerchInput(e.target.value)}
                  value={serchInput}
                  className="w-3/4 h-[20px] z-30 border-b-[2px] bg-transparent border-third focus:outline-none text-first hidden text-center"
                ></motion.input>
                <motion.div
                  animate={container}
                  variants={{
                    filter: {
                      display: "block",
                    },
                  }}
                  className="hidden w-full text-first font-bold h-[20px] px-[10px] sm:text-[20px]"
                >
                  <motion.div
                    animate={filter}
                    variants={{
                      age: {
                        display: "none",
                        opacity: 0,
                      },
                      post: {
                        display: "none",
                        opacity: 0,
                      },
                    }}
                    transition={
                      filter !== "none" && {
                        display: { delay: 1 },
                        opacity: { delay: 0.2, duration: 1 },
                      }
                    }
                    className="w-full h-full flex items-center justify-evenly"
                  >
                    <motion.p
                      animate={filter}
                      variants={{
                        age: {
                          scale: 1.3,
                        },
                        post: {
                          scale: 0.7,
                        },
                      }}
                      onClick={() => setFilter("age")}
                    >
                      הגבלת גיל
                    </motion.p>
                    <motion.p
                      animate={filter}
                      variants={{
                        age: {
                          scale: 0.7,
                        },
                        post: {
                          scale: 1.3,
                        },
                      }}
                      onClick={() => setFilter("post")}
                    >
                      מיון פוסטים
                    </motion.p>
                  </motion.div>
                  <motion.div
                    animate={filter}
                    variants={{
                      post: {
                        display: "flex",
                        opacity: 1,
                      },
                    }}
                    transition={
                      filter === "post" && {
                        display: { delay: 1.2 },
                        opacity: { delay: 1.2 },
                      }
                    }
                    className="w-full min-w-full h-[20px] hidden opacity-0 flex gap-[15px] items-center overflow-x-auto overflow-y-hidden"
                  >
                    <div className="h-full w-max px-[10px] bg-first rounded-[5px] text-second flex items-center">
                      <p>חדש-ישן</p>
                    </div>
                    <div className="h-full w-max px-[10px] bg-first rounded-[5px] text-second flex items-center">
                      <p>ישן-חדש</p>
                    </div>
                    <div className="h-full w-max px-[10px] bg-first rounded-[5px] text-second flex items-center">
                      <p>לייקים</p>
                    </div>
                    <div className="h-full w-max px-[10px] bg-first rounded-[5px] text-second flex items-center">
                      <p>תגובות</p>
                    </div>
                  </motion.div>
                  <motion.div
                    animate={filter}
                    variants={{
                      age: {
                        display: "flex",
                        opacity: 1,
                      },
                    }}
                    transition={
                      filter === "age" && {
                        display: { delay: 1.2 },
                        opacity: { delay: 1.2 },
                      }
                    }
                    className="w-full min-w-full h-[20px] hidden opacity-0 flex items-center justify-between overflow-hidden"
                  >
                    <p>ללא הגבלה</p>
                    <p className="text-first/25">18+</p>
                    <p className="text-first/25">16+</p>
                    <p className="text-first/25">12+</p>
                  </motion.div>
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
                      display: "none",
                    },
                  }}
                  className="h-[20px] sm:h-[30px]"
                >
                  <MagnifyingGlassIcon
                    onClick={() =>
                      container !== "serch"
                        ? setContainer("serch")
                        : setContainer("none")
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
