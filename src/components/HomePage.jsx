import React, { useState, useCallback, useRef, useEffect } from 'react';
import { toPng } from "html-to-image";
import CodeOnSVG from "../assets/codeonLogo.svg";
import LoginSVG from "../assets/login.svg";
import GITHUBSVG from "../assets/githubsvg.svg";
import Leetcode from "../assets/leetcode.svg";
import Codeforces from "../assets/stats.svg";
import X from "../assets/x.svg";
import Reddit from "../assets/reddit.svg";
import LinkedIn from "../assets/linkedin.svg";
import { FiDownload, FiCheck, FiTrendingUp, FiRefreshCw, FiAlertTriangle } from 'react-icons/fi';
import axios from "axios";
import CardFront from "./CardFront";
import CardBack from './CardBack';
import CustomAlert from '../modals/CustomAlert';
import flipSound from '../assets/flipSound.mp3'

import dvancemale from '../assets/advancemale.jpg';
import beginermale from '../assets/beginermale.jpg';
import beginmale from '../assets/beginmale.jpg';
import beginerdanger2 from '../assets/beginerdanger2.jpg';
import beginerdangeranimal from '../assets/beginerdangeranimal.jpg';
import beginerdanger from '../assets/beginerdanger.jpg';
import beginerfemale from '../assets/beginerfemale.jpg';
import inetrmediatefemale from '../assets/inetrmediatefemale.jpg';
import poweranimal from '../assets/poweranimal.jpg';
import powerfulanimal2 from '../assets/powerfulanimal2.jpg';
import femalegod from '../assets/femalegod.jpg';
import god from '../assets/god.jpg';
import godmale from '../assets/godmale.jpg';
import femaleGod from '../assets/femalegod.jpg'
import { useMemo } from "react";



const HomePage = () => {
  const [username, setUsername] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCard, setGeneratedCard] = useState(null);
  const [generateCount, setGenerateCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // 🔄 Flip State
  const cardRef = useRef(null);
  const downloadRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [usernameRef, setUsernameRef] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [charImg, setCharImg] = useState(null); // Store chosen image here




  const [totalUsers, setTotalUsers] = useState(() => {
    return localStorage.getItem("totalUsers")
      ? JSON.parse(localStorage.getItem("totalUsers"))
      : 0;
  });
  useEffect(() => {
    if (generatedCard) {
      const { rank, totalUsers } = generatedCard;
      const percentile = (rank / totalUsers) * 100;
      const chosen = chooseImage(percentile);
      setCharImg(chosen);
    }
  }, [generatedCard]);

  function formatNumber(num) {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString(); // Return as is if less than 1K
  }

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const lastFetchTime = localStorage.getItem("lastFetchTime");
        const now = Date.now();

        // Only fetch if more than 10 minutes have passed since last fetch
        if (!lastFetchTime || now - lastFetchTime > 1 * 60 * 1000) {
          const res = await axios.get("http://localhost:9999/userCount"); // Replace with actual API
          localStorage.setItem("totalUsers", JSON.stringify(res.data.totalUsers));
          localStorage.setItem("lastFetchTime", JSON.stringify(now));
          setTotalUsers(formatNumber(res.data.totalUsers));
        }
      } catch (error) {
        console.error("Failed to fetch user count:", error);
      }
    };

    fetchUserCount();
  }, []);
  const platforms = [
    { id: 'github', name: 'GitHub', icon: GITHUBSVG },
    { id: 'leetcode', name: 'LeetCode', icon: Leetcode },
    { id: 'codeforces', name: 'CodeForces', icon: Codeforces }
  ];

  const handlePlatformSelect = useCallback((platformId) => {
    setSelectedPlatform(platformId);
    setErrorMessage(''); // Clear error message when platform changes
  }, []);

  const handleGenerate = async () => {
    if (!username || !selectedPlatform) return;

    setIsGenerating(true);
    setErrorMessage(''); // Clear previous error messages

    try {
      const res = await axios.get(`http://localhost:9999/${selectedPlatform}/${username}`, {
        timeout: 10000
      });

      if (res.data) {
        setGeneratedCard({
          name: username,
          overallScore: res.data.overallScore,
          platform: selectedPlatform,
          problemSolvingScore: res.data.problemSolvingScore || res.data.overallScore,
          rank: res.data.ranking.rank,
          totalUsers: res.data.ranking.totalPlayers,
          qrCode: res.data.qrCode,
          color: res.data.color
        });
        setGenerateCount(prev => prev + 1);
      ;

      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 500) {
          setErrorMessage('Invalid username. Please check and try again.');
        } else {
          setErrorMessage(`Error: ${error.response.data.message || 'Something went wrong'}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        setErrorMessage('Server error. Unable to contact the server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };


  const chooseImage = (percentile) => {
    const beginnerTier = [
     
      beginmale,
     
     
      beginerdanger,
      beginerfemale,
    ];
    const intermediateTier = [ inetrmediatefemale , beginerdanger2,];
    const advancedTier = [ dvancemale , beginermale, beginerdangeranimal,];
    const powerTier = [ poweranimal, powerfulanimal2 ];
    const godTier = [ femalegod, god, godmale ];

    if (percentile <= 5) {
      return godTier[Math.floor(Math.random() * godTier.length)];
    } else if (percentile <= 15) {
      return powerTier[Math.floor(Math.random() * powerTier.length)];
    } else if (percentile <= 30) {
      return advancedTier[Math.floor(Math.random() * advancedTier.length)];
    } else if (percentile <= 70) {
      return intermediateTier[Math.floor(Math.random() * intermediateTier.length)];
    } else {
      return beginnerTier[Math.floor(Math.random() * beginnerTier.length)];
    }
  };

  const handleDownload = () => {
    if (downloadRef.current) {
      downloadRef.current.style.display = "flex";
      toPng(downloadRef.current, { backgroundColor: "#1a1b26", cacheBust: true, pixelRatio: 3 })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `${username}_profile_card.png`;
          document.body.appendChild(link); // Append link to body
          link.click();
          document.body.removeChild(link); // Cleanup
          downloadRef.current.style.display = "none";

        })
        .catch((err) => {
          if (downloadRef.current) {
            downloadRef.current.style.display = "none";
          }


          console.error("Error generating PNG:", err);
        });
    }
  };

  const handleShare = async () => {
    if (!generatedCard) {
      console.error("No generated card data found.");
      return;
    }

    const { name, overallScore, platform, problemSolvingScore, rank, totalUsers } = generatedCard;

    if (downloadRef.current) {
      downloadRef.current.style.display = "flex";

      try {
        const dataUrl = await toPng(downloadRef.current, {
          backgroundColor: "#1a1b26",
          cacheBust: true,
          pixelRatio: 3,
        });

        // Convert data URL to a Blob
        const blob = await (await fetch(dataUrl)).blob();

        // Generate message based on platform
        let message = "";
        switch (platform) {
          case "github":
            message = `Hello everyone! 🚀 Today, I analyzed my GitHub profile and achieved a **GitHub Score** of **${overallScore}**! 🎉  
            Contributing to open source and building projects has been an amazing journey.  
            I'm happy to share my GitHub card! 💻`;
            break;
          case "leetcode":
            message = `Hello everyone! 🏆 Today, I analyzed my LeetCode profile and achieved an **Overall Score** of **${overallScore}**!  
            My **Problem-Solving Score** is **${problemSolvingScore}**, and I'm constantly working on improving my DSA skills.  
            Coding daily helps sharpen problem-solving skills! 💡  
            I'm happy to share my progress! 🚀`;
            break;
          case "codeforces":
            message = `Hello everyone! 🏅 Today, I analyzed my CodeForces profile and ranked **${rank}** out of **${totalUsers}** users!  
            My **Contest Score** is **${overallScore}**, and I enjoy solving competitive programming problems.  
            CodeForces contests push my algorithmic thinking to the next level! ⚡  
            Proud to share my journey! 🔥`;
            break;
          default:
            message = "Check out my coding journey!";
        }

        // Copy text and image to clipboard
        const textBlob = new Blob([message], { type: "text/plain" });

        await navigator.clipboard.write([
          new ClipboardItem({
            "text/plain": textBlob,
            "image/png": blob,
          }),
        ]);

        // alert("Text and image copied to clipboard! Paste it anywhere.");
        setShowAlert(true);
      } catch (err) {
        console.error("Error sharing or copying:", err);
      } finally {
        downloadRef.current.style.display = "none";
      }
    }
  };

  const handleFlip = () => {
    const audio = new Audio(flipSound); // Create audio instance
    audio.play(); // Play sound
    setIsFlipped(!isFlipped); // Toggle flip state
  };


  return (
    <div className="min-h-screen bg-[#090c10] text-[#e0e0e0] font-mono flex flex-col gap-8 items-center justify-center overflow-hidden w-full">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 px-6 py-4 w-full flex justify-between items-center z-10 bg-[#090c10]/90 backdrop-blur-sm">
        <img src={CodeOnSVG} alt="CodeOn Logo" className="h-14" />
        <div className="flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all">
          <span className="text-sm font-sans">Guest Mode Only</span>
          <img src={LoginSVG} alt="Login" className="hidden sm:block h-5" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col   items-center  px-4 mt-20 mb-10 max-w-6xl">
        <div className="w-full lg:min-h-96 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12
         bg-[#1a1b26]/80 rounded-3xl shadow-2xl backdrop-blur-md transform scale-100">

          {/* Left Panel - Controls */}
          <div className="flex flex-col gap-2 p-6 md:p-12 align-center justify-evenly">
           <div>
           <h2 className="text-l font-bold text-[#9b5de5] mt-3 ">Customize Your Profile Card</h2>
            <input
              type="text"
              ref={usernameRef}
              className="h-12 rounded-xl w-full bg-[#2a2d3a] mt-3 px-5 text-white focus:outline-none focus:ring-2 focus:ring-[#723f94] transition-all"
              placeholder="Enter your coding username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrorMessage(''); // Clear error when typing
              }}
            />
           </div>

            {/* Error Message Display */}
            {errorMessage && (
              <div className="mt-2 text-red-400 flex items-center">
                <FiAlertTriangle className="mr-1" />
                <span className="text-sm">{errorMessage}</span>
              </div>
            )}

           <div>
           <h2 className="text-l font-bold text-[#9b5de5] mt-3">Select Your Coding Platform</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  className={`relative flex flex-col items-center justify-center p-5 rounded-xl transition-all ${selectedPlatform === platform.id
                    ? 'bg-[#7e22ce] border-2 border-[#c084fc] text-black'
                    : 'bg-[#2a2d3a] hover:bg-[#7e22ce]'
                    }`}
                  onClick={() => handlePlatformSelect(platform.id)}
                >
                  <img src={platform.icon} alt={platform.name} className="h-12 mb-2" />
                  <span className="text-sm">{platform.name}</span>
                  {selectedPlatform === platform.id && (
                    <FiCheck className="absolute top-2 right-2 text-black" />
                  )}
                </button>
              ))}
            </div>
           </div>

            <button
              type='submit'
              className={`w-full py-3 mt-3 px-6 h-12 rounded-xl text-lg font-semibold transition-all ${username && selectedPlatform
                ? 'bg-[#7e22ce] hover:bg-[#9b5de5] cursor-pointer text-black'
                : 'bg-gray-700 cursor-not-allowed opacity-50'
                }`}
              onClick={handleGenerate}
              disabled={!username || !selectedPlatform || isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Your Card'}
            </button>
          </div>

          {/* Right Panel - Card Preview */}
          <div className="flex justify-center items-center h-full w-full flex-1" >
            <div ref={cardRef} className="bg-[#2a2d3a]/50 min-h-[300px] rounded-2xl border-2 w-full h-full flex items-center justify-center overflow-hidden">
              <div className="w-full h-auto max-w-[90%] max-h-[500px] aspect-video flex justify-center items-center transform ">
                {generatedCard ? (<div
                  className="relative w-64 h-40 perspective-1000 cursor-pointer"
                  onClick={()=>generatedCard&& handleFlip()}
                >
                  <div
                    className={`absolute inset-0 w-full h-full  transition-transform duration-500   transform 
                      }`}
                      style={{
                        transformStyle: "preserve-3d",
                        transform: isFlipped ? "rotateY(180deg)" : "none",
                      }}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold rounded-lg shadow-lg scale-[0.4] sm:scale-[0.3] md:scale-[0.6] lg:scale-[0.5]"  style={{ backfaceVisibility: "hidden" }}>
                      <CardFront name={generatedCard?.name}
                        overallScore={generatedCard?.overallScore}
                        platform={generatedCard?.platform}
                        problemSolvingScore={generatedCard?.problemSolvingScore}
                        rank={generatedCard?.rank}
                        totalUsers={generatedCard?.totalUsers}
                        qrCode={generatedCard?.qrCode}
                        color={generatedCard?.color}
                        charImg={charImg}
                        ></CardFront>
                    </div>

                    {/* Back Side */}
                    <div className={`absolute inset-0 w-full h-full bg-red-500 flex items-center justify-center text-white text-lg font-bold rounded-lg shadow-lg rotate-y-180 scale-[0.4] sm:scale-[0.3] md:scale-[0.6] lg:scale-[0.5] `}  style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}>
                      <CardBack color={generatedCard?.color}
                        platform={generatedCard?.platform}
                        totalPlayers={generatedCard?.totalUsers}  ></CardBack>
                    </div>
                  </div>
                </div>) : (
                  <p className="text-[#a6a6a6]">Your Card Preview</p>
                )}
              </div>
            </div>
          </div>

          {/* Hidden div for downloading both sides */}
        
         
       
        


        </div>
      </main>


      {generatedCard ? (
        <div className="fixed bottom-6 right-6 flex gap-4">

          {/* Download Button */}
          <button onClick={handleDownload} className="bg-[#7e22ce] text-white px-4 py-2 rounded-full shadow-lg cursor-pointer flex items-center">
            <FiDownload className="mr-2 text-lg" />
            Download
          </button>

          {/* Share Button */}
          <button onClick={handleShare} className="bg-[#34D399] text-black px-4 py-2 rounded-full shadow-lg cursor-pointer flex items-center">
            <FiTrendingUp className="mr-2 text-lg" />
            Share
          </button>

        </div>
      ) : (<div className="fixed bottom-6 right-6 flex items-center bg-[#7e22ce] text-white px-4 py-2 rounded-full shadow-lg cursor-pointer">
        <FiTrendingUp className="mr-2 text-lg " />
        <span>{totalUsers}+ users </span>
      </div>)}

    

      <CustomAlert show={showAlert} onClose={() => setShowAlert(false)}  />

      <div className="text-center text-gray-600 text-sm mt-4 mb-6">
        &copy; {new Date().getFullYear()}
        <a href="mailto:blockchaindevabhishek@gmail.com" className="text-blue-500 hover:underline ml-1">
          blockchaindevabhishek@gmail.com
        </a>
      </div>

      <div ref={downloadRef} className=" hidden mr-8 w-[1080px] h-[1080px] justify-evenly items-center flex-row bg-[#1a1b26] gap-8 transform scale-[0.5]">
            <div className='p-2'>
              <CardFront
                name={generatedCard?.name}
                overallScore={generatedCard?.overallScore}
                platform={generatedCard?.platform}
                problemSolvingScore={generatedCard?.problemSolvingScore}
                rank={generatedCard?.rank}
                totalUsers={generatedCard?.totalUsers}
                qrCode={generatedCard?.qrCode}
                color={generatedCard?.color}
                charImg={charImg} 
              />
            </div>
            <div className='ml-4 p--2'>
              <CardBack
                color={generatedCard?.color}
                platform={generatedCard?.platform}
                totalPlayers={generatedCard?.totalUsers}
              />
            </div>
          </div>

    </div>
  );
};

export default HomePage;