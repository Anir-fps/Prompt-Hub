import React from 'react';

const MobileNav = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-lg border-t border-[#30363D] px-6 py-3">
      <div className="flex justify-between items-center">
        <button className="text-[#00D4FF] text-xl">🏠</button>
        <button className="text-gray-400 text-xl">🔍</button>
        <button className="bg-gradient-to-r from-[#00D4FF] to-[#BD00FF] w-10 h-10 rounded-full text-black font-bold text-2xl flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.4)]">
          +
        </button>
        <button className="text-gray-400 text-xl">🔖</button>
        <button className="text-gray-400 text-xl">👤</button>
      </div>
    </div>
  );
};

export default MobileNav;