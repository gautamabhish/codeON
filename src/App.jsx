import React, { useState } from 'react';
import { Github, Share2, LineChart, Linkedin, Twitter, Share, MessageCircle } from 'lucide-react';
import CardFront from './components/CardFront';
import CardBack from "./components/CardBack"
function App() {
  const [username, setUsername] = useState('');

  return (
    <div className='m-8 flex flex-row justify-center items-center'>
      {/* <Card></Card>
       */}
       <CardBack></CardBack>
    </div>
  );
}

export default App;