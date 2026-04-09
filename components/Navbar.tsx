"use client";

import React, { useState } from 'react';
import UploadModal from './UploadModal';

// --- Sub-component: MobileNav ---
interface MobileNavProps {
  onOpenModal: () => void;
}

const MobileNav = ({ onOpenModal }: MobileNavProps) => {
  // ... rest of your code
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-[#050505]/80 backdrop-blur-md border-t border-[#30363D] pb-safe">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center text-[#00D4FF]">
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <span className="text-xl">🔍</span>
          <span className="text-[10px] font-bold">Explore</span>
        </button>
        
        {/* Central Create Button */}
        <button 
          onClick={onOpenModal}
          className="bg-gradient-to-t from-[#00D4FF] to-[#BD00FF] w-12 h-12 rounded-2xl flex items-center justify-center text-black shadow-lg -translate-y-4 border-4 border-[#050505] active:scale-95 transition-transform"
        >
          <span className="text-2xl font-bold">+</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <span className="text-xl">🔖</span>
          <span className="text-[10px] font-bold">Saved</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <span className="text-xl">👤</span>
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </div>
  );
};

// --- Main Component: Navbar ---
const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-[#30363D] bg-[#050505]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#00D4FF] to-[#BD00FF] rounded-lg shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
            <span className="text-xl font-bold text-white tracking-tighter font-mono">
              PROMPT<span className="text-[#00D4FF]">HUB</span>
            </span>
          </div>

          {/* Search Bar - Hidden on small screens */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <input 
              type="text" 
              placeholder="Search prompts ..."
              className="w-full bg-[#161B22] border border-[#30363D] text-gray-300 text-sm rounded-full py-2 px-6 focus:outline-none focus:border-[#00D4FF] transition-all"
            />
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center gap-4">
            <a href="/login" className="hidden sm:block text-gray-400 hover:text-white text-sm font-medium transition-colors">
              Sign in
            </a>
            <button 
              onClick={() => setModalOpen(true)}
              className="bg-[#00D4FF] hover:bg-[#00b8e6] text-black text-sm font-bold py-2 px-5 rounded-full transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:scale-105"
            >
              Create
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <MobileNav onOpenModal={() => setModalOpen(true)} />

      {/* Shared Upload Modal */}
      <UploadModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;