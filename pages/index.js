import Post from '../components/post'
import {motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react';
import axios from 'axios';
import useProfileStore from '../components/store/profile';
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const [isFocusing, setIsFocusing] = useState("off");
  const [postArray, setPostArray] = useState([]);
  const [newPostInput, setNewPostInput] = useState("");
  const { _id, addPost, removePost } = useProfileStore((state) => state);

  async function getPosts() {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + `post/all`);
      setPostArray(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function postPost() {
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'post/new',{
        creatorID: _id, content: newPostInput
      });
      addPost(response.data._id);
      setPostArray(oldPosts => [response.data, ...oldPosts]);
      setNewPostInput("");
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
      removePost(postID);
      setPostArray((oldPosts) =>
        oldPosts.filter((item) => item._id !== postID)
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  useEffect(() => {
    if(!_id){
      router.push("/signup");
    }
  }, [_id])
  
  return (
    <div className="bg-first w-full h-[100vh] pt-[140px] overflow-hidden pb-[20px] sm:pt-[180px] xl:pl-[360px] xl:pt-[90px]">
        <motion.div 
        animate={isFocusing}
        variants={{
          off: {
            overflowY: "auto"
          },
          on: {
            overflow: "hidden"
          }
        }}
        className="w-full h-full max-h-full overflow-y-auto relative flex flex-col gap-[30px]">
          <motion.div 
          animate={isFocusing}
          variants={{
            on: {
              minHeight: "0px",
              height: 0,
              opacity: 0, 
              display: "none"
            }
          }}
          transition={isFocusing === "on" && {display:{delay: 0.25}}}
          className="w-full min-h-[150px] flex flex-col justify-between">
            <div className="w-full px-[20px] h-[120px] px-[20px]">
              <div className="w-full bg-second h-full rounded-[5px] relative pb-[35px]">
                <textarea 
                placeholder="......פרט/י כאן את כל העולה בדעתך"
                onChange={(e) => setNewPostInput(e.target.value)}
                value={newPostInput}
                className="w-full h-full bg-transparent resize-none text-right font-bold p-[5px] focus:outline-none"/>
                <div 
                onClick={() => postPost()}
                className="absolute bottom-[5px] left-[5px] w-[100px] h-[30px] font-bold bg-first rounded-[5px] flex justify-center items-center text-second">
                  <p>פרסום</p>
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-gradient-to-r from-third/0 via-third to-third/0"></div>
          </motion.div>
          <div className="w-full min-h-full relative">
          {postArray.length > 0 && postArray.map(post =>
        <Post key={post._id} setIsFocusing={setIsFocusing} info={post} deletePost={() => deletePost(post._id, post.creatorID)}/>
            )}
          </div>
        </motion.div>
    </div>
  )
}
