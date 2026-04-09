import React from 'react';

const menuItems = [
  { name: 'Feed', icon: '🏠' },
  { name: 'Bookmarks', icon: '🔖' },
  { name: 'Trending', icon: '🔥' },
  { name: 'My Prompts', icon: '📁' },
  { name: 'Settings', icon: '⚙️' },
];

const Sidebar = () => {
  return (
<aside className="hidden lg:flex flex-col w-64 h-[calc(100vh-64px)] sticky top-16 border-r border-[#30363D] bg-[#050505] p-6">      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:bg-[#161B22] hover:text-[#00D4FF] transition-all group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto p-4 bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-2xl border border-[#30363D]">
        <p className="text-xs text-gray-500 font-mono mb-2">STORAGE</p>
        <div className="w-full bg-[#30363D] h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#BD00FF] h-full w-[65%] shadow-[0_0_10px_#BD00FF]"></div>
        </div>
        <p className="text-[10px] text-gray-400 mt-2">6.5GB / 10GB used</p>
      </div>
    </aside>
  );
};

export default Sidebar;