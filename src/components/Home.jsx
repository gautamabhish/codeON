<div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center p-4">
<div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 bg-slate-900/50 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-bold text-yellow-400 mb-2">CodeON</h1>
      <h2 className="text-2xl font-semibold text-white mb-6">Check Your Profile</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="w-full p-4 rounded-xl bg-slate-700/50 text-white placeholder-slate-400 border-2 border-slate-600 focus:border-yellow-400 focus:outline-none transition-colors"
      />
    </div>

    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">Choose A Platform</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <button className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 transition-colors flex items-center justify-center">
          <Github className="w-8 h-8 text-white" />
        </button>
        <button className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 transition-colors flex items-center justify-center">
          <Share2 className="w-8 h-8 text-white" />
        </button>
        <button className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 transition-colors flex items-center justify-center">
          <LineChart className="w-8 h-8 text-white" />
        </button>
      </div>

      <button className="w-full py-4 px-8 rounded-xl bg-yellow-400 hover:bg-yellow-500 transition-colors text-slate-900 font-bold text-lg">
        Generate
      </button>
    </div>

    <div className="grid grid-cols-4 gap-4">
      <button className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 transition-colors flex items-center justify-center">
        <Linkedin className="w-6 h-6 text-white" />
      </button>
      <button className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 transition-colors flex items-center justify-center">
        <Twitter className="w-6 h-6 text-white" />
      </button>
      <button className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 transition-colors flex items-center justify-center">
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
      <button className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 transition-colors flex items-center justify-center">
        <Share className="w-6 h-6 text-white" />
      </button>
    </div>
  </div>

  <div className="relative aspect-[9/16] bg-slate-800 rounded-3xl p-6 shadow-xl">
    <Card></Card>
  </div>
</div>
</div>

