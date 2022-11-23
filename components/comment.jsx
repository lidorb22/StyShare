import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import useProfileStore from "./store/profile";
import { TrashIcon } from "@heroicons/react/20/solid";

function Comment({ info, reply = null, deleteComment }) {
  const [replyState, setReplyState] = useState("off");
  const [creatorName, setCreatorName] = useState("");
  const { _id } = useProfileStore((state) => state);
  const ownComment = info.creatorID === _id;

  const url = "http://localhost:5000/";
  async function getProfileName() {
    try {
      const response = await axios.get(url + "user/" + info.creatorID);
      setCreatorName(response.data.fullName);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (info.creatorID) {
      getProfileName();
    }
  }, [info]);

  return (
    <motion.div layout className="min-h-max font-bold flex flex-col gap-[5px]">
      <p
        onClick={() => replyState === "on" && setReplyState("off")}
        className="bg-second px-[5px] rounded-l-[5px] w-full text-right"
      >
        {info.content}
      </p>
      <div
        onClick={() =>
          replyState === "off" &&
          reply !== null &&
          reply.length > 0 &&
          setReplyState("on")
        }
        className="flex flex-row-reverse gap-[20px] items-center text-right text-second/50 text-[14px] pr-[5px] self-end"
      >
        <p>{creatorName}</p>
        {reply !== null && reply.length > 0 && (
          <motion.p
            animate={replyState}
            variants={{
              on: {
                opacity: 0,
              },
            }}
          >
            הגיבו {reply !== null && reply.length}
          </motion.p>
        )}
        {ownComment && (
          <TrashIcon onClick={deleteComment} className="h-[15px]" />
        )}
      </div>
      <motion.div
        animate={replyState}
        variants={{
          on: {
            height: "auto",
            display: "block",
            opacity: 1,
          },
        }}
        className="h-0 hidden opacity-0 pr-[15px] relative"
      >
        <div className="absolute right-0 w-[2px] h-full bg-gradient-to-t from-third/0 via-third to-third/0"></div>
        {reply !== null && reply.map((comment) => <Comment info={comment} />)}
      </motion.div>
    </motion.div>
  );
}

export default Comment;
