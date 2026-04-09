import React from 'react';

// This interface fixes the "IntrinsicAttributes" error
interface PromptCardProps {
  title: string;
  tool: string;
  promptText: string;
  imageUrl: string;
}

const PromptCard = ({ title, tool, promptText, imageUrl }: PromptCardProps) => {
  return (
    <div className="group relative bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden hover:border-[#00D4FF] transition-all duration-300 shadow-lg">
      <div className="relative h-48 w-full bg-black overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-[#00D4FF] font-mono border border-[#00D4FF]/30">
          {tool}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <div className="bg-[#161B22] p-3 rounded-lg border border-[#30363D]">
          <p className="text-gray-400 font-mono text-xs line-clamp-3">
            {promptText}
          </p>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <button className="text-gray-500 hover:text-white text-sm">★ Star</button>
          <button className="bg-[#00D4FF]/10 text-[#00D4FF] px-4 py-1.5 rounded-full text-xs font-bold border border-[#00D4FF]/30">
            Fork
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;