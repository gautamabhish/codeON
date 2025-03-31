import React, { useCallback } from 'react';
// import { useMemo } from 'react';
import "./card.css";
import topleftNameField from "../assets/topleftName.svg";
import topleftImgField from "../assets/topleftIMg.svg";
import githublogo from "../assets/githublogo.png";
import topleftTaglineField from "../assets/tagline.svg";
import CodeONCut from "../assets/codeONcut.png";
// import CharImg from "../assets/charimg.png"
import PlayerNameField from "../assets/playernamefield.svg"
import PlayerRankField from "../assets/RankField.svg"
import Barcode from "../assets/barcode.png"
import TopleftGithub from "../assets/TOPLEFTGITHUB.svg"
import TopleftLeetcode from "../assets/leetcodetopleft.svg"
import TopleftCodeforces from "../assets/codeforcesTopleft.svg"




const Card = ({ name, overallScore, platform, problemSolvingScore, rank, totalUsers, qrCode, color,charImg ,tier}) => {
  const platformImages = {
    github: TopleftGithub,
    codeforces: TopleftCodeforces,
    leetcode: TopleftLeetcode,
  };




  const topleftimg = platformImages[platform] || TopleftLeetcode;

  return (



    <div className={` w-[500px] rounded-[32px] h-[700px] ml-4 flex justify-center items-center relative `} style={{ background: color }}>

      <div style={glossyOverlayStyle}></div> {/* Glossy Effect */}
      {/* <div style={lightReflectionStyle}></div> Light Reflection */}

      <div className='rounded-[30px] bg-[#233050] w-[488px] h-[689px] flex justify-center items-center relative'>
        <div className='relative rounded-[17px] m-2 w-[459px] h-[652px] bg-gradient-to-b from-[#16202994] to-[#162029] flex flex-col  '>

          <div className='flex justify-between items-top' style={{
            paddingTop: "8px",
          }}>

            <img src={topleftimg} alt="" />
            <div className='flex flex-row items-center ' style={{
              paddingRight: "4px",

            }} >
              <span className='uppercase font-semibold text-sm text-white  text-[20px] pr-[4px] pt-[12px] italic' style={{
                color: "#d1d5db",
                fontWeight: "bold",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3), -2px -2px 5px rgba(255, 255, 255, 0.2)"
              }}>xp</span>
              <span style={{
                // color: "#aaa",
                // /textShadow: "1px 1px 0px #666, -1px -1px 0px #fff"
              }} className='text-white font-semibold text-[36px] font-[inter]' >{overallScore} </span>

            </div>
          </div>
          <div className='flex justify-center' style={{ paddingTop: "8.41px" }}>
            <div
              className="relative"
              style={{
                width: "438px",  // Image width + border
                height: "417px", // Image height + border
                padding: "3px",  // Border thickness
                borderRadius: "20px",  // Optional: for rounded borders
                background: "linear-gradient(49deg, #64B5D9 0%, #1E1E1E 16%, #64B5D9 53%, #100D1F 66%, #289DD1 80%, #100D1F 91%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                className="character-image"
                style={{
                  backgroundImage: `url(${charImg})`,
                  width: "100%",  // Ensures image fills container
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "15px" // Optional: Match the wrapper border radius
                }}
              />
            </div>
          </div>

          <div className='relative' style={{ paddingTop: "10px", paddingLeft: "10px" }}>
            <img src={PlayerNameField} className='center w-[439px] h-[37px]' alt="" />

            {/* Ensure this absolute div is full width */}
            <div className='absolute text-white top-[15.4px] w-full'>
              <div className='flex justify-between items-end w-full' style={{ paddingLeft: "14px", paddingRight: "60px" }}>
                <div className='text-[26px] font-[inter] font-bold italic leading-none' style={{
                  paddingLeft: "10px",
                  paddingBottom:"4px"
                }}>{name}</div>
                <div className='text-[32px] font-bold leading-none font-[inter] italic' >{problemSolvingScore}</div>
              </div>
            </div>
          </div>


          <div className='flex justify-between items-center'>
            <div style={{
              backgroundImage: `url(${qrCode})`,
              height: "70px",
              width: "70px",
              marginLeft: "14px",
              marginTop: "28px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"

            }}>

            </div>
            <div className='relative h-[47px] w-[302.5px] text-white' style={{
              paddingTop: "10px"
            }}>
              <img src={PlayerRankField} className='right-[0px]' />
              <div className='absolute top-[8px] text-[32px] font-bold right-[14px] font-[inter] italic'>
                {rank}/{totalUsers}
              </div>

              <div className=' mb-[4px] mt-[4px] ml-[220px]  uppercase italic text-[8px] font-[inter] text-white' >
              {tier}
          </div>
            </div>
            
          </div>

        </div>


      </div>


        
    </div>


  );
}

export default Card;


const lightReflectionStyle = {
  content: '""',
  position: "absolute",
  top: 0,
  left: "-100%",
  width: "150%",
  height: "100%",
  background: "linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
  transform: "skewX(-20deg)",
  opacity: 0.6,
  transition: "0.5s",
};


const glossyOverlayStyle = {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.3), transparent)",
  borderRadius: "32px",
  opacity: 0.5,
  pointerEvents: "none",
};
const hoverEffect = {
  left: "100%",
};
const characterFrameStyle = {
  position: "relative",
  width: "438px",
  height: "417px",
  padding: "3px",
  borderRadius: "20px",
  background: "linear-gradient(49deg, #64B5D9 0%, #1E1E1E 16%, #64B5D9 53%, #100D1F 66%, #289DD1 80%, #100D1F 91%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
