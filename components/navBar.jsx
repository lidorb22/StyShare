import React, { useState, useEffect } from "react";
import {
  Bars4Icon,
  FunnelIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Serch from "./navBarC/serch";
import Inbox from "./navBarC/inbox";
import Filter from "./navBarC/filter";
import useProfileStore from "./store/profile";
import axios from "axios";

function NavBar() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [container, setContainer] = useState("none");
  const [serchInput, setSerchInput] = useState("");
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const { _id, logout } = useProfileStore((state) => state);

  async function getSerchedItems() {
    try {
      const responsePosts = await axios.get(
        process.env.NEXT_PUBLIC_API_URL +
          `post/serch?page=${page}&limit=3&name=${serchInput}`
      );
      const responseUsers = await axios.get(
        process.env.NEXT_PUBLIC_API_URL +
          `user/serch?page=${page}&limit=3&name=${serchInput}`
      );
      setPosts(responsePosts.data.results);
      setUsers(responseUsers.data.results);
      setTotal(responseUsers.data.total);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (serchInput && _id) {
      getSerchedItems();
    }
  }, [serchInput, page]);

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
      setPage(1);
    }
  }, [container]);

  return (
    <div className="absolute top-0 left-0 w-full h-full text-second z-50 pointer-events-none xl:text-first xl:z-10 overflow-hidden">
      <div className="sticky pointer-events-none bg-scroll top-0 xl:bg-transparent w-full xl:h-screen">
        {/* start of serch */}
        {container !== "none" && (
          <div className="absolute top-0 left-0 h-screen w-full pt-[129px] pointer-events-none sm:pt-[169px] xl:pl-[351px] xl:pt-0">
            {container === "inbox" && <Inbox />}
            {container === "serch" && serchInput && (
              <Serch
                input={serchInput}
                posts={posts}
                users={users}
                page={page}
                total={total}
                setPage={setPage}
              />
            )}
          </div>
        )}
        <div className="bg-first h-full pointer-events-auto pt-[20px] xl:w-[351px] xl:bg-second h-full">
          {menu && (
            <div className="absolute top-0 left-0 w-full h-[100vh] bg-first/90 backdrop-blur-[2px] flex flex-col gap-[60px] items-center justify-center text-[30px] xl:w-[351px] xl:text-second z-10">
              {_id && (
                <div
                  onClick={() => {
                    router.push("/profile/" + _id);
                  }}
                  className="flex gap-[10px] items-center"
                >
                  <p>הפרופיל שלי</p>
                  <div className="bg-gradient-to-tr from-second to-third w-[20px] h-[20px] rounded-full shadow-[0px_0px_8px_#FBB752]"></div>
                </div>
              )}
              <div
                onClick={() => (_id ? logout() : router.push("/signup"))}
                className="flex gap-[10px] items-center"
              >
                <p>{_id ? "יציאה" : "כניסה"}</p>
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
              className="text-[30px] font-bold tracking-[0.2em] text-transparent bg-gradient-to-r from-second to-third bg-clip-text sm:text-[50px] xl:absolute xl:top-0 xl:right-[20px] z-10"
            >
              סתישר
            </p>
            <div className="hidden pointer-events-none xl:block xl:absolute xl:top-0 xl:pl-[351px] xl:w-full h-[70px]">
              <div className="w-full h-full bg-first"></div>
              <div className="w-full h-[2px] bg-gradient-to-r from-third/0 via-third to-third/0"></div>
            </div>
          </div>
          {router.pathname !== "/profile/[userID]" &&
            router.asPath !== "/signup" && (
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
                  <Filter container={container} />
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
