import { useRouter } from "next/router";
import React, { useState } from "react";
import Post from "../post";

function Serch({ posts, users, page, total, setPage }) {
  const router = useRouter();
  const loaded = total > page * 3 ? page * 3 : total;
  const [isFocusing, setIsFocusing] = useState("off");
  return (
    <div className="w-full h-full flex flex-col gap-[30px] bg-gradient-to-b from-first to-first/90 overflow-y-auto backdrop-blur-[2px] pb-[40px] pointer-events-auto xl:px-[40px] xl:pt-[80px]">
      <div className="w-full ">
        <div className="w-full flex flex-col justify-center items-end gap-[10px] p-[20px] xl:text-[20px]">
          {users.length > 0 &&
            users.map((user) => (
              <div className="px-[10px] py-[2px] rounded-[5px] bg-second text-first font-bold">
                <p
                  key={user._id}
                  onClick={() => router.push(`/profile/${user._id}`)}
                >
                  {user.fullName}
                </p>
              </div>
            ))}
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <div className="flex flex-col w-full items-center text-white/50 font-bold text-[14px]">
            <p>{`${total} טען ${loaded} מתוך`}</p>
            <p onClick={() => setPage(page + 1)}>טען עוד</p>
          </div>
          <div className="w-full h-[2px] bg-gradient-to-r from-third/0 via-third to-third/0"></div>
        </div>
      </div>
      <div className="w-full h-full max-h-full flex flex-col gap-[30px]">
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post._id}
              setIsFocusing={setIsFocusing}
              info={post}
              isSerching={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Serch;
