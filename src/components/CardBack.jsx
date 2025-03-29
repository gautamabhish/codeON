import React from 'react';

import githublogo from "../assets/githubsvg.svg";
import CodeONCut from "../assets/codeonLogo.svg";

const CardBack = () => {
  return (
    <div className='bg-black w-[500px] h-[700px] rounded-[32px] flex justify-center items-center relative'>
      
      {/* Inner Card Background */}
      <div className='rounded-[30px] bg-[#233050] w-[488px] h-[689px] flex flex-col items-center p-0 relative'>

        {/* CodeON Logo (Big and on Top) */}
        <div className="w-full flex justify-center mt-[30px] mb-[10px]" style={{
            paddingTop:"20px"
        }}>
          <img src={CodeONCut} alt="CodeON Logo" className="w-[380px] h-auto drop-shadow-lg" />
        </div>

        {/* GitHub Logo (Directly Below CodeON) */}
        <div className="flex justify-center items-center  " style={{
            paddingTop:"50px",
        }}>
          <img src={githublogo} alt="GitHub Logo" className="w-[300px] h-[250px] opacity-90" />
        </div>

        {/* Footer (Bottom) */}
        <div className="absolute bottom-[20px] text-white text-[8px] text-center">
          <span>&copy; THE CONTENTS OF THE CARD WERE GENERATED AT TIME WITH 3,637,838 USERS</span>
        </div>

      </div>

    </div>
  );
}

export default CardBack;
