"use client"; // This is required for interactivity in Next.js

import React, { useState } from 'react';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadModal = ({ isOpen, onClose }: UploadModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#0D1117] border border-[#30363D] rounded-2xl p-8 shadow-[0_0_50px_rgba(0,212,255,0.1)]">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Share a <span className="text-[#BD00FF]">Prompt</span></h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white text-xl">&times;</button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-[#00D4FF] uppercase mb-2">Title</label>
            <input type="text" placeholder="e.g. Neon Samurai" className="w-full bg-[#161B22] border border-[#30363D] rounded-lg p-3 text-white focus:border-[#00D4FF] outline-none transition-all" />
          </div>

          <div>
            <label className="block text-xs font-mono text-[#00D4FF] uppercase mb-2">AI Tool</label>
            <select className="w-full bg-[#161B22] border border-[#30363D] rounded-lg p-3 text-white outline-none">
              <option>Midjourney</option>
              <option>DALL-E 3</option>
              <option>Stable Diffusion</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#00D4FF] uppercase mb-2">Prompt Text</label>
            <textarea rows={3} placeholder="Paste your prompt here..." className="w-full bg-[#161B22] border border-[#30363D] rounded-lg p-3 text-white focus:border-[#00D4FF] outline-none transition-all resize-none"></textarea>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#00D4FF] uppercase mb-2">Image URL</label>
            <input type="text" placeholder="https://..." className="w-full bg-[#161B22] border border-[#30363D] rounded-lg p-3 text-white focus:border-[#00D4FF] outline-none transition-all" />
          </div>

          <button className="w-full bg-gradient-to-r from-[#00D4FF] to-[#BD00FF] text-black font-bold py-3 rounded-lg mt-4 hover:opacity-90 transition-opacity">
            Publish Prompt
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;