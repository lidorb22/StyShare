import React, { useState } from "react";

function Signup() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="w-full h-screen bg-first pt-[80px] flex flex-col items-center justify-center px-[40px] font-bold gap-[30px] pb-[20px] xl:pl-[360px]">
      <div className="w-full h-[330px] relative bg-[#494C5B] rounded-[5px] flex justify-center sm:w-[430px] xl:w-[650px]">
        <div className="absolute w-3/4 bg-second text-center text-first text-[30px] rounded-[5px] -top-[20px]">
          {isRegister ? "הרשמה" : "כניסה"}
        </div>
        <div className="w-full self-center flex flex-row-reverse justify-center xl:justify-between gap-[20px] px-[20px]">
          <form className="w-3/4 flex flex-col items-center gap-[35px] xl:w-full">
            <div className="w-full flex flex-col">
              <label className="self-end text-second pr-[5px]">:שם מלא</label>
              <input
                type="text"
                className="w-full text-right bg-second text-first rounded-[5px] h-[30px] px-[5px]"
                placeholder="....השם שלך"
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="self-end text-second pr-[5px]">:אימייל</label>
              <input
                type="text"
                className="w-full text-right bg-second text-first rounded-[5px] h-[30px] px-[5px]"
                placeholder="....האימייל שלך"
              />
            </div>
            <p className="text-second/50 text-[14px]">
              שכחתי את הפרטים המזהים שלי
            </p>
            <button className="absolute -bottom-[15px] left-[5%] px-[20px] bg-third text-first text-[20px] rounded-[5px]">
              {isRegister ? "הרשמה" : "כניסה"}
            </button>
          </form>
          <div className="hidden xl:block w-[2px] h-[180px] self-center bg-gradient-to-t from-third/0 via-third to-third/0"></div>
          <div className="hidden xl:block w-3/4"></div>
        </div>
      </div>
      <div className="w-full p-[15px] relative bg-[#494C5B] text-[20px] rounded-[5px] sm:w-[430px] sm:p-[25px]">
        {isRegister ? (
          <p className="text-center text-second">
            ?רשומ/ה כבר לאתר <br></br>לחצ/י על כניסה ומלא/י את הפרטים
          </p>
        ) : (
          <p className="text-center text-second">
            ?עדיין לא רשומ/ה לאתר שלנו <br></br>לחצ/י על הרשמה, התקדמ/י בשלבי
            הרישום ותתחיל/י לחקור את האתר שיצרנו
          </p>
        )}
        <div
          onClick={() => setIsRegister(!isRegister)}
          className="absolute -bottom-[15px] left-[5%] bg-third text-center px-[20px] rounded-[5px] text-first"
        >
          {isRegister ? "כניסה" : "הרשמה"}
        </div>
      </div>
    </div>
  );
}

export default Signup;
