import Post from '../components/post'
import {motion} from "framer-motion"
import { useState } from 'react';

export default function Home() {
  const [isFocusing, setIsFocusing] = useState("off");
  return (
    <div className="bg-first w-full h-[100vh] pt-[140px] overflow-hidden pb-[20px] sm:pt-[180px] xl:pl-[360px]">
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
        className="w-full h-full  max-h-full overflow-y-auto relative flex flex-col gap-[30px]">
        <Post setIsFocusing={setIsFocusing}/>
        <Post setIsFocusing={setIsFocusing}/>
        <Post setIsFocusing={setIsFocusing}/>
        <Post setIsFocusing={setIsFocusing}/>
        <Post setIsFocusing={setIsFocusing}/>
        <Post setIsFocusing={setIsFocusing}/>
        </motion.div>
    </div>
  )
}
