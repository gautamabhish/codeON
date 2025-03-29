import React, { useState } from 'react';
import CodeOnSVG from "../assets/codeonLogo.svg";
import LoginSVG from "../assets/login.svg";
import GITHUBSVG from "../assets/githubsvg.svg";
import Leetcode from "../assets/leetcode.svg";
import Codeforces from "../assets/stats.svg";
import X from "../assets/x.svg";
import Reddit from "../assets/reddit.svg";
import LinkedIn from "../assets/linkedin.svg";
import { FiDownload, FiCheck, FiTrendingUp } from 'react-icons/fi';
import axios from "axios";
import CardFront from "./CardFront";

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCard, setGeneratedCard] = useState(null);
  const [generateCount, setGenerateCount] = useState(0);

  const platforms = [
    { id: 'github', name: 'GitHub', icon: GITHUBSVG },
    { id: 'leetcode', name: 'LeetCode', icon: Leetcode },
    { id: 'codeforces', name: 'CodeForces', icon: Codeforces }
  ];

  const handlePlatformSelect = (platformId) => setSelectedPlatform(platformId);

  const handleGenerate = () => {
    if (!username || !selectedPlatform) return;

    setIsGenerating(true);

    // Simulating API call
    setTimeout(() => {
      setGeneratedCard({ username, platform: selectedPlatform });
      setIsGenerating(false);
      setGenerateCount(prevCount => prevCount + 1);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#090c10] text-[#e0e0e0] font-mono flex flex-col gap-8 items-center overflow-hidden w-full">
      
      {/* Navigation */}
      <nav className="px-6 py-4 w-full flex justify-between items-center">
        <img src={CodeOnSVG} alt="CodeOn Logo" className="h-14" />
        <button className="flex items-center gap-2 text-white px-4 py-2 rounded-lg transition-all">
          <span className="text-sm font-sans">Guest Mode Only</span>
         
          <img src={LoginSVG} alt="Login" className="hidden h-5 md:visible" />
         
         
        </button>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col items-center px-4">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6 bg-[#1a1b26]/80 p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
          
          {/* Left Panel - Controls */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-[#9b5de5]">Customize Your Profile Card</h2>
            <input 
              type="text" 
              className="h-12 rounded-xl w-full bg-[#2a2d3a] px-5 text-white focus:outline-none focus:ring-1 focus:ring-[#723f94] transition-all" 
              placeholder="Enter your coding username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <h2 className="text-xl font-bold text-[#9b5de5]">Select Your Coding Platform</h2>
            <div className="grid grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  className={`relative flex flex-col items-center justify-center p-5 rounded-xl transition-all ${
                    selectedPlatform === platform.id 
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
            
            <button 
              type='submit'
              className={`py-3 px-6 h-12 rounded-xl text-lg font-semibold transition-all ${
                username && selectedPlatform 
                  ? 'bg-[#7e22ce] hover:bg-[#9b5de5] cursor-pointer text-black' 
                  : 'bg-gray-700 cursor-not-allowed opacity-50'
              }`}
              onClick={handleGenerate}
              disabled={!username || !selectedPlatform || isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Your Card'}
            </button>

            {/* Share & Download */}
            {generatedCard && (
              <div className="flex w-full justify-between mt-6">
                <div className="flex gap-4 bg-[#9c7dc2] px-6 rounded-lg">
                  <button className="px-1  transition-colors">
                    <img src={LinkedIn} alt="LinkedIn" className="h-10 w-10" />
                  </button>
                  <button className="px-1  transition-colors">
                    <img src={X} alt="X" className="h-10 w-10" />
                  </button>
                  <button className="px-1 transition-colors">
                    <img src={Reddit} alt="Reddit" className="h-10 w-10" />
                  </button>
                </div>
                <button className="p-3  transition-colors">
                  <FiDownload color='9b5de5' className="h-10 w-10" />
                </button>
              </div>
            )}
          </div>
        {/* Right Panel - Card Preview */}
<div className="flex justify-center items-center h-full w-full flex-1">
  <div className="bg-[#2a2d3a]/50 rounded-2xl border-2 w-full h-full flex items-center justify-center overflow-hidden">
    <div className="w-full h-auto max-w-[90%] max-h-[400px] aspect-video flex justify-center items-center transform scale-[0.5] sm:scale-[0.4] md:scale-[0.6]">
      {generatedCard ? (
        <CardFront username={username} platform={selectedPlatform} />
      ) : (
        <p className="text-[#a6a6a6]">Your Card Preview</p>
      )}
    </div>
  </div>
</div>





        </div>
      </main>

      {/* Trending Icon */}
      <div className="fixed bottom-6 right-6 flex items-center bg-[#7e22ce] text-white px-4 py-2 rounded-full shadow-lg cursor-pointer">
        <FiTrendingUp className="mr-2 text-lg" />
        <span>{generateCount}+ users </span>
      </div>

    </div>
  );
};

export default HomePage;
