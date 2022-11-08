import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Filter({ container }) {
  const [filter, setFilter] = useState("none");
  useEffect(() => {
    if (container !== "filter" && filter !== "none") {
      setFilter("none");
    }
  }, [container]);

  return (
    <motion.div
      animate={container}
      variants={{
        filter: {
          display: "block",
        },
      }}
      className="hidden w-full text-first font-bold h-[20px] px-[10px] sm:text-[20px]"
    >
      <motion.div
        animate={filter}
        variants={{
          age: {
            display: "none",
            opacity: 0,
          },
          post: {
            display: "none",
            opacity: 0,
          },
        }}
        transition={
          filter !== "none" && {
            display: { delay: 1 },
            opacity: { delay: 0.2, duration: 1 },
          }
        }
        className="w-full h-full flex items-center justify-evenly"
      >
        <motion.p
          animate={filter}
          variants={{
            age: {
              scale: 1.3,
            },
            post: {
              scale: 0.7,
            },
          }}
          onClick={() => setFilter("age")}
        >
          הגבלת גיל
        </motion.p>
        <motion.p
          animate={filter}
          variants={{
            age: {
              scale: 0.7,
            },
            post: {
              scale: 1.3,
            },
          }}
          onClick={() => setFilter("post")}
        >
          מיון פוסטים
        </motion.p>
      </motion.div>
      <motion.div
        animate={filter}
        variants={{
          post: {
            display: "flex",
            opacity: 1,
          },
        }}
        transition={
          filter === "post" && {
            display: { delay: 1.2 },
            opacity: { delay: 1.2 },
          }
        }
        className="w-full min-w-full h-[20px] hidden opacity-0 flex gap-[15px] items-center overflow-x-auto overflow-y-hidden"
      >
        <div className="h-full w-max px-[10px] bg-first rounded-[5px] text-second flex items-center">
          <p>חדש-ישן</p>
        </div>
        <div className="h-full w-max px-[10px] bg-first rounded-[5px] text-second flex items-center">
          <p>ישן-חדש</p>
        </div>
        <div className="h-full w-max px-[10px] bg-first rounded-[5px] text-second flex items-center">
          <p>לייקים</p>
        </div>
        <div className="h-full w-max px-[10px] bg-first rounded-[5px] text-second flex items-center">
          <p>תגובות</p>
        </div>
      </motion.div>
      <motion.div
        animate={filter}
        variants={{
          age: {
            display: "flex",
            opacity: 1,
          },
        }}
        transition={
          filter === "age" && {
            display: { delay: 1.2 },
            opacity: { delay: 1.2 },
          }
        }
        className="w-full min-w-full h-[20px] hidden opacity-0 flex items-center justify-between overflow-hidden"
      >
        <p>ללא הגבלה</p>
        <p className="text-first/25">18+</p>
        <p className="text-first/25">16+</p>
        <p className="text-first/25">12+</p>
      </motion.div>
    </motion.div>
  );
}

export default Filter;
