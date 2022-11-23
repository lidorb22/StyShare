import React, { useEffect, useState } from "react";
import Post from "../../components/post";
import { motion } from "framer-motion";
import useProfileStore from "../../components/store/profile";
import { useRouter } from "next/router";
import axios from "axios";

function Profile() {
  const router = useRouter();
  const allState = useProfileStore((state) => state);
  const [info, setInfo] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isFocusing, setIsFocusing] = useState("off");
  const following =
    info && allState.following.filter((user) => user === info._id);
  const ownProfile = allState._id === router.query.userID;

  async function getProfile() {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "user/" + router.query.userID
      );
      setInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function putFollow() {
    if (!allState._id) {
      return;
    }
    if (ownProfile) {
      return;
    }
    try {
      const response = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + "follow/user",
        {
          _id: allState._id,
          followerId: info._id,
        }
      );
      if (response.data.success) {
        allState.addFollow(router.query.userID);
      } else {
        allState.removeFollow(router.query.userID);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getPost() {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "post/userAllPosts",
        {
          userID: router.query.userID,
        }
      );
      setPosts(response.data.reverse());
    } catch (error) {
      console.error(error);
    }
  }

  async function deletePost(postID, creatorID, groupId) {
    try {
      await axios.post(process.env.NEXT_PUBLIC_API_URL + "post/remove", {
        _id: postID,
        creatorID: creatorID,
        groupId: groupId || undefined,
      });
      allState.removePost(postID);
      setPosts((oldPosts) => oldPosts.filter((item) => item._id !== postID));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (router.query.userID === undefined) {
      return;
    }
    if (router.query.userID !== allState._id) {
      getProfile();
    } else {
      setInfo(allState);
    }
  }, [router]);

  useEffect(() => {
    if (info !== null && posts.length <= 0) {
      getPost();
    }
  }, [info]);

  useEffect(() => {
    if (!allState._id) {
      router.push("/signup");
    }
  }, [allState._id]);

  return (
    <div className="bg-first w-full h-screen flex flex-col pt-[80px] overflow-y-auto pb-[40px] sm:pt-[120px] xl:pl-[360px] gap-[80px]">
      <div className="w-full min-h-[135px] flex gap-[10px] justify-between px-[20px] sm:min-h-[175px] sm:text-[20px]">
        <div className="min-w-[135px] h-full bg-second rounded-[5px] shadow-[0px_0px_8px_#FBB752] sm:min-w-[175px]"></div>
        <div className="w-full h-full flex flex-col justify-between items-end text-second">
          <div className="flex flex-col gap-[5px] w-full text-right items-end">
            <p className="font-bold xl:text-[40px]">{info && info.fullName}</p>
            <p className="text-second/80">בים של דגים מצאתי את הכריש שלי L&L</p>
            <p className="font-bold">{info && info.age}</p>
          </div>
          <div className="w-full h-[32px] flex items-center gap-[15px] justify-end">
            <p className="text-[12px] sm:text-[14px]">
              {info && info.following.length} +
            </p>
            {!ownProfile ? (
              <motion.div
                animate={
                  following !== null && following.length > 0
                    ? {
                        backgroundColor: "rgb(255 99 99)",
                      }
                    : {
                        backgroundColor: "rgb(255 246 233)",
                      }
                }
                className="h-full px-[20px] text-first bg-second rounded-[5px] flex items-center justify-center font-bold"
              >
                {following !== null && following.length > 0 ? (
                  <p onClick={() => putFollow()}>בטל/י מעקב</p>
                ) : (
                  <p onClick={() => putFollow()}>בצע/י מעקב</p>
                )}
              </motion.div>
            ) : (
              <p className="text-[16px] bg-third rounded-[5px] px-[8px] text-first font-bold">
                במעקב אחרי
              </p>
            )}
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
        className="w-full h-full  max-h-full overflow-y-auto relative xl:px-[60px]"
      >
        {posts.length > 0 &&
          posts.map((post) => (
            <Post
              key={post._id}
              setIsFocusing={setIsFocusing}
              profileName={info && info.fullName}
              info={post}
              deletePost={() => deletePost(post._id, post.creatorID)}
            />
          ))}
      </motion.div>
    </div>
  );
}

export default Profile;
