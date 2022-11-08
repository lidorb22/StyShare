import React from "react";

function Serch({ input }) {
  return (
    <div className="w-full h-full flex flex-col gap-[30px] bg-gradient-to-b from-first to-first/90 overflow-y-auto backdrop-blur-[2px] pb-[40px] pointer-events-auto xl:px-[40px] xl:pt-[80px]">
      <div className="w-full ">
        <div className="w-full flex flex-col justify-center items-end gap-[10px] p-[20px] xl:text-[20px]">
          <div className="px-[10px] py-[2px] rounded-[5px] bg-second text-first font-bold">
            <p>{input}</p>
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
      <div className="w-full flex flex-col gap-[30px]"></div>
    </div>
  );
}

export default Serch;
