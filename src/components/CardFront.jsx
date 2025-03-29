import React from 'react';
import "./card.css";
import topleftNameField from "../assets/topleftName.svg";
import topleftImgField from "../assets/topleftIMg.svg";
import githublogo from "../assets/githublogo.png";
import topleftTaglineField from "../assets/tagline.svg";
import CodeONCut from "../assets/codeONcut.png";
import CharImg from "../assets/charimg.png"
import PlayerNameField from "../assets/playernamefield.svg"
import PlayerRankField from "../assets/RankField.svg"
import Barcode from "../assets/barcode.png"
import Topleft from "../assets/TOPLEFTGITHUB.svg"
const Card = () => {
  return (



    <div className='bg-amber-600 w-[500px] rounded-[32px] h-[700px] ml-4 flex justify-center items-center relative'>
      <div className='rounded-[30px] bg-[#233050] w-[488px] h-[689px] flex justify-center items-center relative'>
        <div className='relative rounded-[17px] m-2 w-[459px] h-[652px] bg-gradient-to-b from-[#16202994] to-[#162029] flex flex-col  '>

          <div className='flex justify-between ' style={{
            paddingTop:"8px",
          }}>

            <img src={Topleft} alt="" />
            <div className='flex flex-row items-baseline 'style={{
              paddingRight:"4px"
            }} >
              <span className='uppercase font-semibold text-sm text-white text-[23px] italic'>xp</span>
              <span className='text-white font-semibold text-[36px] ' >200 </span>

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
        backgroundImage: `url(${CharImg})`,
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
  <div className='absolute text-white top-[12px] w-full'>
    <div className='flex justify-between items-end w-full' style={{ paddingLeft: "14px", paddingRight: "56px" }}>
      <div className='text-[26px] font-bold italic leading-none' style={{
        paddingLeft:"8px"
      }}>gautamabhish</div>
      <div className='text-[36px] font-bold leading-none'>20000</div>
    </div>
  </div>
</div>


          <div className='flex justify-between items-center'>
            <div style={{
              backgroundImage: `url(${Barcode})`,
              height: "100px",
              width: "100px",
              marginLeft:"10px",
              marginTop:"18px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"

            }}>

            </div>
            <div className='relative h-[47px] w-[302.5px] text-white' style={{
              paddingTop:"10px"
            }}>
              <img src={PlayerRankField} alt="" srcset="" />
              <div className='absolute top-[14px] text-3xl font-bold right-[12px]'>
                200/4000
              </div>
            </div>
          </div>


        </div>


      </div>



    </div>


  );
}

export default Card;
