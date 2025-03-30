import React from 'react';

import githublogo from "../assets/githubsvg.svg";
import CodeONCut from "../assets/codeonLogo.svg";
import GITHUBSVG from "../assets/githubsvg.svg";
import Leetcode from "../assets/leetcode.svg";
import Codeforces from "../assets/stats.svg";

const CardBack = ({color, platform , totalPlayers}) => {
  const platformImages = {
    github: GITHUBSVG,
    codeforces: Codeforces,
    leetcode: Leetcode,
  };
  const bgImg = platformImages[platform];
  return (
    <div className={` w-[500px] h-[700px] rounded-[32px] flex justify-center items-center relative`} style={{
      background:color,
    }}>

      {/* Inner Card Background */}
      <div className='rounded-[30px] bg-[#233050] w-[488px] h-[689px] flex flex-col items-center p-0 relative'>

        {/* CodeON Logo (Big and on Top) */}
        <div className="w-full flex justify-center mt-[30px] mb-[10px]" style={{
          paddingTop: "20px"
        }}>
          <img src={CodeONCut} alt="CodeON Logo" className="w-[380px] h-auto drop-shadow-lg" />
        </div>

        {/* GitHub Logo (Directly Below CodeON) */}
        <div className="flex justify-center items-center  " style={{
          paddingTop: "50px",
        }}>
          <img src={bgImg} alt="GitHub Logo" className="w-[300px] h-[250px] opacity-90" />
        </div>

        {/* Footer (Bottom) */}
        <div className="absolute bottom-[20px] text-white text-[8px] text-center">
          <span>&copy; THE CONTENTS OF THE CARD WERE GENERATED WITH {totalPlayers} USERS</span>
        </div>

      </div>

    </div>
  );
}

export default CardBack;
