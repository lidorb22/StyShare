import React from "react";
import {
  HeartIcon,
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/20/solid";

function Post() {
  return (
    <div className="w-full h-[130px] min-h-[130px] flex justify-between px-[20px] gap-[10px] mt-[20px]">
      {/*icons bar*/}
      <div className="w-max h-full flex flex-col justify-between items-center text-second py-[10px]">
        <HeartIcon className="h-[25px]" />
        <ChatBubbleBottomCenterTextIcon className="h-[25px]" />
        <ShareIcon className="h-[25px]" />
      </div>
      {/*gold glowing strip*/}
      <div className="w-[2px] h-full bg-gradient-to-t from-third/0 via-third to-third/0"></div>
      {/*text and info*/}
      <div className="w-full h-full flex flex-col">
        {/*text showing area*/}
        <div className="bg-second w-full h-full rounded-[5px] p-[5px] text-right text-first font-bold text-[16px]">
          <p className="w-full">
            ניצחון מוחץ לימין בנוסף לניסיון הרמאות במעטפות הקפולות. לא ניתן להם
            את התענוג לקחת לנו את המדינה
          </p>
        </div>
        {/*publisher info*/}
        <div className="w-full h-max flex items-center justify-between text-[14px] text-second/50 font-bold ">
          <p>22/10/2022</p>
          <p>ליפז סטמקאר</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
