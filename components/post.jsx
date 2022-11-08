import React, { useState } from "react";
import {
  HeartIcon,
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

function Post() {
  const [focus, setFocus] = useState("off");
  return (
    <motion.div
      animate={focus}
      variants={{
        on: {
          minHeight: "100%",
          backgroundColor: "rgb(46, 48, 57)",
          position: "sticky",
          top: "0px",
          bottom: "0px",
        },
        off: {
          bottom: "0px",
        },
      }}
      transition={
        focus === "on" && {
          minHeight: { duration: 1.5 },
        }
      }
      onClick={() => (focus === "on" ? setFocus("off") : setFocus("on"))}
      className="w-full min-h-[30%] h-max"
    >
      <div className="w-full h-full flex justify-between px-[20px] gap-[10px]">
        {/*icons bar*/}
        <motion.div
          animate={focus}
          variants={{
            on: {
              height: "150px",
            },
          }}
          className="w-max h-full flex flex-col justify-between items-center text-second py-[10px] xl:h-[160px] xl:self-center"
        >
          <div>
            <HeartIcon className="h-[25px]" />
          </div>
          <motion.div
            animate={focus}
            variants={{
              on: {
                color: "rgb(255 186 82)",
              },
            }}
          >
            <ChatBubbleBottomCenterTextIcon className="h-[25px]" />
          </motion.div>
          <div>
            <ShareIcon className="h-[25px]" />
          </div>
        </motion.div>
        {/*golden glowing strip*/}
        <motion.div
          animate={focus}
          variants={{
            on: {
              height: "150px",
            },
          }}
          className="w-[2px] h-full bg-gradient-to-t from-third/0 via-third to-third/0"
        ></motion.div>
        {/*text and info*/}
        <div className="w-full h-max flex flex-col sm:flex-row sm:gap-[10px] xl:flex-col-reverse">
          {/*text showing area*/}
          <div className="bg-second w-full h-max min-h-[130px] rounded-[5px] p-[5px] text-right text-first font-bold text-[16px] xl:text-[20px]">
            <p className="w-full">
              ניצחון מוחץ לימין בנוסף לניסיון הרמאות במעטפות הקפולות. לא ניתן
              להם את התענוג לקחת לנו את המדינה
            </p>
          </div>
          {/*publisher info*/}
          <div className="w-full h-max flex items-center justify-between text-[14px] text-second/50 font-bold sm:w-max sm:flex-col-reverse sm:text-right sm:h-full xl:flex-row xl:w-full xl:items-end xl:text-[20px]">
            <p>22/10/2022</p>
            <div className="flex sm:flex-col-reverse xl:flex-row xl:items-end xl:gap-[10px]">
              <p>ליפז סטמקאר</p>
              <div className="hidden sm:block sm:bg-second sm:rounded-[5px] sm:w-[70px] sm:h-[70px] self-end"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Post;
