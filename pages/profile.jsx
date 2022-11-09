import React, { useState } from "react";
import Post from "../components/post";
import { motion } from "framer-motion";

function Profile() {
  const [isFocusing, setIsFocusing] = useState("off");
  return (
    <div className="bg-first w-full h-screen flex flex-col pt-[80px] overflow-y-auto pb-[40px] sm:pt-[120px] xl:pl-[360px] gap-[80px]">
      <div className="w-full min-h-[135px] flex gap-[10px] justify-between px-[20px] sm:min-h-[175px] sm:text-[20px]">
        <div className="min-w-[135px] h-full bg-second rounded-[5px] shadow-[0px_0px_8px_#FBB752] sm:min-w-[175px]"></div>
        <div className="w-full h-full flex flex-col justify-between items-end text-second">
          <div className="flex flex-col gap-[5px] w-full text-right items-end">
            <p className="font-bold xl:text-[40px]">ליפז סטמקאר</p>
            <p className="text-second/80">בים של דגים מצאתי את הכריש שלי L&L</p>
            <p className="font-bold">31/12/2001</p>
          </div>
          <div className="w-full h-[32px] flex items-center gap-[15px] justify-end">
            <p className="text-[12px] sm:text-[14px]">385+</p>
            <div className="h-full px-[20px] text-first bg-second rounded-[5px] flex items-center justify-center font-bold">
              <p>בצע/י מעקב</p>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={isFocusing}
        variants={{
          off: {
            overflowY: "auto",
          },
          on: {
            overflow: "hidden",
          },
        }}
        className="w-full h-full  max-h-full overflow-y-auto relative flex flex-col gap-[30%] xl:px-[60px]"
      >
        <Post setIsFocusing={setIsFocusing} />
        <Post setIsFocusing={setIsFocusing} />
        <Post setIsFocusing={setIsFocusing} />
        <Post setIsFocusing={setIsFocusing} />
        <Post setIsFocusing={setIsFocusing} />
        <Post setIsFocusing={setIsFocusing} />
        <Post setIsFocusing={setIsFocusing} />
      </motion.div>
    </div>
  );
}

export default Profile;
