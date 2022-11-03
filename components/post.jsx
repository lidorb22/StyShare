import React from "react";
import {
  HeartIcon,
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/20/solid";

function Post() {
  return (
    <div className="w-full h-max flex justify-between px-[20px] gap-[10px]">
      {/*icons bar*/}
      <div className="w-max h-full flex flex-col justify-between items-center text-second py-[10px] xl:h-[160px] xl:self-center">
        <HeartIcon className="h-[25px]" />
        <ChatBubbleBottomCenterTextIcon className="h-[25px]" />
        <ShareIcon className="h-[25px]" />
      </div>
      {/*gold glowing strip*/}
      <div className="w-[2px] h-full bg-gradient-to-t from-third/0 via-third to-third/0"></div>
      {/*text and info*/}
      <div className="w-full h-max flex flex-col sm:flex-row sm:gap-[10px] xl:flex-col-reverse">
        {/*text showing area*/}
        <div className="bg-second w-full h-max min-h-[130px] rounded-[5px] p-[5px] text-right text-first font-bold text-[16px] xl:text-[20px]">
          <p className="w-full">
            ניצחון מוחץ לימין בנוסף לניסיון הרמאות במעטפות הקפולות. לא ניתן להם
            את התענוג לקחת לנו את המדינה
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
  );
}

export default Post;
