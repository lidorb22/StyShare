import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
  PencilIcon,
  XMarkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Comment from "./comment";
import useProfileStore from "./store/profile";
import axios from "axios";
import { useRouter } from "next/router";

function Post({
  setIsFocusing,
  info,
  profileName = null,
  isSerching = false,
  deletePost,
}) {
  const router = useRouter();
  const { addLike, removeLike, liked, _id, addComment, removeComment } =
    useProfileStore((state) => state);
  const isLiked = liked.filter((postid) => postid === info._id);
  const isOwn = info.creatorID === _id;
  const [focus, setFocus] = useState("off");
  const [editState, setEditState] = useState("off");
  const [replyState, setReplyState] = useState("off");
  const [replyInput, setReplyInput] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [commentsArray, setCommentsArray] = useState([]);

  const soloArray = commentsArray.filter((item) => item.parentID === null);
  const replyArray = commentsArray.filter((item) => item.parentID !== null);

  const focusTrigger = (e) => {
    if (isSerching) {
      return;
    }
    if (focus === "off" && replyState === "on") {
      return;
    }
    if (focus === "off") {
      setFocus("on");
      return;
    }
    switch (e.target.id) {
      case "content":
        if (replyState === "on") {
          setReplyState("off");
          setReplyInput("");
        }
        setFocus("off");
        break;

      case "reply":
        if (replyState === "off" && _id) {
          setReplyState("on");
        } else {
          setReplyState("off");
          setReplyInput("");
        }
        break;
    }
  };

  async function getProfileName() {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "user/" + info.creatorID
      );
      setCreatorName(response.data.fullName);
    } catch (error) {
      console.error(error);
    }
  }

  async function getComments(commentID) {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "comment/" + commentID
      );
      setCommentsArray((oldComments) => [response.data, ...oldComments]);
    } catch (error) {
      console.error(error);
    }
  }

  async function putLike() {
    if (!_id) {
      return;
    }
    try {
      const response = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + "post/like",
        {
          _id: info._id,
          userId: _id,
        }
      );
      if (response.data.success === "liked") {
        addLike(info._id);
      } else if (response.data.success === "like removed") {
        removeLike(info._id);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function postComment() {
    if (!_id) {
      return;
    }
    if (!replyInput) {
      return;
    }
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "comment/add",
        {
          postID: info._id,
          creatorID: _id,
          content: replyInput,
          parentID: null,
        }
      );
      setCommentsArray((oldComments) => [response.data, ...oldComments]);
      addComment(response.data._id);
      setReplyState("off");
      setReplyInput("");
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteComment(creatorID, commentID, postID) {
    try {
      await axios.delete(process.env.NEXT_PUBLIC_API_URL + "comment/remove", {
        data: {
          postID: postID,
          creatorID: creatorID,
          commentID: commentID,
        },
      });
      removeComment(commentID);
      setCommentsArray((oldComments) =>
        oldComments.filter((item) => item._id !== commentID)
      );
    } catch (error) {
      console.error(error);
    }
  }

  function delPost() {
    if (focus === "on") {
      setFocus("off");
    }
    deletePost();
  }

  async function editPost(name) {
    if (name === "trigger") {
      try {
        const response = await axios.put(
          process.env.NEXT_PUBLIC_API_URL + "post/edit",
          {
            postID: info._id,
            content: replyInput,
          }
        );
        console.log(response.data);
        info.content = replyInput;
        setReplyState("off");
        setReplyInput("");
        setEditState("off");
      } catch (error) {
        console.error(error);
      }
      return;
    }
    if (replyState === "on") {
      setReplyState("off");
      setReplyInput("");
      return;
    }
    setReplyState("on");
    setReplyInput(info.content);
  }

  useEffect(() => {
    if (profileName === null) {
      getProfileName();
    }
  }, [profileName]);

  useEffect(() => {
    if (focus === "on") {
      setIsFocusing("on");
      if (info && info.comments && commentsArray.length <= 0) {
        info.comments.forEach((comment) => {
          getComments(comment);
        });
      }
    } else {
      setIsFocusing("off");
    }
  }, [focus]);

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
        focus === "on"
          ? {
              minHeight: { duration: 1.5 },
            }
          : {
              position: { delay: 1.5 },
              minHeight: { duration: 1.2 },
            }
      }
      className="w-full h-max flex flex-col pb-[20px]"
    >
      <div className="w-full h-max flex justify-between px-[20px] gap-[10px]">
        {/*icons bar*/}
        <motion.div
          animate={focus}
          variants={{
            on: {
              height: "150px",
            },
          }}
          className="w-max h-[140px] flex flex-col justify-between items-center text-second py-[10px] xl:h-[160px] xl:self-center"
        >
          <motion.div
            animate={
              isLiked.length > 0
                ? {
                    color: "rgb(255 99 99)",
                  }
                : {
                    color: "rgb(255 246 233)",
                  }
            }
            className="h-[25px]"
          >
            {isOwn && editState === "off" ? (
              <PencilIcon
                onClick={() => setEditState("on")}
                className="h-full"
              />
            ) : isOwn && editState === "on" ? (
              <XMarkIcon
                onClick={() =>
                  replyState === "on" ? editPost() : setEditState("off")
                }
                className="h-full"
              />
            ) : (
              <HeartIcon onClick={() => putLike()} className="h-full" />
            )}
          </motion.div>
          {isOwn && editState === "on" ? (
            <motion.div
              animate={replyState}
              variants={{
                on: {
                  color: "rgb(255 186 82)",
                },
              }}
            >
              <PencilSquareIcon
                onClick={() => editPost()}
                className="h-[25px]"
              />
            </motion.div>
          ) : (
            <motion.div
              animate={replyState}
              variants={{
                on: {
                  color: "rgb(255 186 82)",
                },
              }}
              onClick={(e) => focusTrigger(e)}
              id="reply"
            >
              <ChatBubbleBottomCenterTextIcon className="h-[25px] pointer-events-none" />
            </motion.div>
          )}
          {isOwn && editState === "on" ? (
            <div>
              <TrashIcon onClick={() => delPost()} className="h-[25px]" />
            </div>
          ) : (
            <div>
              <ShareIcon className="h-[25px]" />
            </div>
          )}
        </motion.div>
        {/*golden glowing strip*/}
        <motion.div
          animate={focus}
          variants={{
            on: {
              height: "150px",
            },
          }}
          className="w-[2px] h-[140px] bg-gradient-to-t from-third/0 via-third to-third/0"
        ></motion.div>
        {/*text and info*/}
        <div className="w-full h-max flex flex-col sm:flex-row sm:gap-[10px] xl:flex-col-reverse">
          {/*text showing area*/}
          <div
            onClick={(e) => focusTrigger(e)}
            id="content"
            className="bg-second w-full h-max min-h-[130px] rounded-[5px] p-[5px] text-right text-first font-bold text-[16px] relative xl:text-[20px]"
          >
            <motion.p
              animate={replyState}
              variants={{
                on: {
                  display: "none",
                  opacity: 0,
                },
              }}
              className="w-full pointer-events-none h-full break-all"
            >
              {info.content}
            </motion.p>
            <motion.div
              animate={replyState}
              variants={{
                on: {
                  display: "block",
                  opacity: 1,
                },
              }}
              className="absolute top-0 left-0 w-full h-full hidden opacity-0 p-[5px] font-bold pb-[20px]"
            >
              <textarea
                onChange={(e) => setReplyInput(e.target.value)}
                value={replyInput}
                placeholder=".....כתוב כאן את תגובתך"
                className="w-full h-full bg-transparent resize-none text-right focus:outline-none"
              ></textarea>
            </motion.div>
            <motion.div
              animate={replyState}
              variants={{
                on: {
                  display: "block",
                  opacity: 1,
                },
              }}
              onClick={() =>
                editState === "on" ? editPost("trigger") : postComment()
              }
              className="absolute hidden opacity-0 -bottom-[18px] left-0 bg-third rounded-r-[5px] rounded-bl-[5px] px-[15px] py-[5px] text-[14px] z-10"
            >
              <p className="pointer-events-none">
                {editState === "on" ? "אישור" : "הגב/י"}
              </p>
            </motion.div>
          </div>
          {/*publisher info*/}
          <div className="w-full h-max flex items-center justify-between text-[14px] text-second/50 font-bold sm:w-max sm:flex-col-reverse sm:text-right sm:h-full xl:flex-row xl:w-full xl:items-end xl:text-[20px]">
            <motion.p
              animate={replyState}
              variants={{
                on: {
                  opacity: 0,
                },
              }}
            >
              {info.createdAt
                .split("T", 1)
                .toString()
                .split("-", 3)
                .reverse()
                .join("/")}
            </motion.p>
            <div className="flex sm:flex-col-reverse xl:flex-row xl:items-end xl:gap-[10px]">
              <p
                onClick={() =>
                  profileName === null &&
                  router.push("/profile/" + info.creatorID)
                }
              >
                {profileName === null ? creatorName : profileName}
              </p>
              <div className="hidden sm:block sm:bg-second sm:rounded-[5px] sm:w-[70px] sm:h-[70px] self-end"></div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={focus}
        variants={{
          on: {
            display: "flex",
            opacity: 1,
          },
        }}
        transition={
          focus === "on" && {
            opacity: { delay: 1 },
          }
        }
        className="w-full h-full pt-[20px] px-[20px] flex flex-col overflow-y-auto overflow-x-hidden hidden opacity-0 gap-[15px] items-end"
      >
        {soloArray.map((comment) => (
          <Comment
            key={comment._id}
            info={comment}
            reply={replyArray.filter((item) => item.parentID === comment._id)}
            deleteComment={() =>
              deleteComment(comment.creatorID, comment._id, comment.postID)
            }
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Post;
