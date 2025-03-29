import React, { useState } from 'react';
// import { Github, Share2, LineChart, Linkedin, Twitter, Share, MessageCircle } from 'lucide-react';
import CardFront from './components/CardFront';
import CardBack from "./components/CardBack"
import ProfileGenerator from './components/HomePage';
function App() {

  return (
    <div >
        <ProfileGenerator></ProfileGenerator>
    </div>
  );
}

export default App;