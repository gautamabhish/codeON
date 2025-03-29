import React, { useState } from "react";
import { Github, Share2, LineChart, Linkedin, Twitter, MessageCircle, Share } from "lucide-react";
import Card from "./CardFront";

const ProfileGenerator = () => {
  const [username, setUsername] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [gender, setGender] = useState("male");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-10 bg-gray-800/80 p-10 rounded-3xl shadow-2xl backdrop-blur-lg border border-gray-700">
        
        {/* Left Side */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-extrabold text-amber-400 mb-3">CodeON</h1>
            <h2 className="text-2xl font-semibold text-white mb-6">Check Your Profile</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 outline-none transition-all"
            />
          </div>

          {/* Platform Selection */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Choose A Platform</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { id: "github", icon: <Github className="w-10 h-10 text-white" /> },
                { id: "share", icon: <Share2 className="w-10 h-10 text-white" /> },
                { id: "stats", icon: <LineChart className="w-10 h-10 text-white" /> }
              ].map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`w-full h-16 flex items-center justify-center rounded-lg transition-all border border-transparent ${
                    selectedPlatform === platform.id 
                      ? "bg-amber-400 text-gray-900 border-gray-700 shadow-lg ring-2 ring-amber-300/50"
                      : "bg-gray-700/50 hover:bg-gray-600/50"
                  }`}
                >
                  {platform.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Gender Selection (Properly Aligned) */}
          <div className="grid grid-cols-2 gap-4">
            {["male", "female"].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`w-full py-3 text-lg font-bold rounded-lg transition-all ${
                  gender === g 
                    ? "bg-amber-400 text-gray-900 border-gray-700 shadow-lg"
                    : "bg-gray-700/50 text-white hover:bg-gray-600/50"
                }`}
              >
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </button>
            ))}
          </div>

          {/* Generate Button (Same Width as Gender Selection) */}
          <button className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-500 transition-all text-gray-900 font-bold text-lg shadow-md">
            Generate
          </button>

          {/* Social Media Sharing (Fixed Spacing) */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { id: "linkedin", icon: <Linkedin className="w-8 h-8 text-white" /> },
              { id: "twitter", icon: <Twitter className="w-8 h-8 text-white" /> },
              { id: "message", icon: <MessageCircle className="w-8 h-8 text-white" /> },
              { id: "share", icon: <Share className="w-8 h-8 text-white" /> }
            ].map((social) => (
              <button
                key={social.id}
                className="w-16 h-16 p-4 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-all flex items-center justify-center border border-transparent hover:border-gray-600"
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Card Display */}
        <div className="relative bg-gray-900 rounded-3xl p-6 shadow-xl flex items-center justify-center">
          <Card username={username} platform={selectedPlatform} gender={gender} />
        </div>
      </div>
    </div>
  );
};

export default ProfileGenerator;
