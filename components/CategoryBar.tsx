import React from 'react';

const categories = ["All", "Images", "Video", "Text-to-Speech", "Code", "3D", "Marketing", "Academic"];

const CategoryBar = () => {
  return (
    <div className="w-full bg-[#050505] py-2">
      <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar touch-pan-x">
        {categories.map((cat) => (
          <button
            key={cat}
            className="whitespace-nowrap px-5 py-2 rounded-full border border-[#30363D] bg-[#161B22] text-gray-400 text-xs font-semibold transition-all hover:border-[#00D4FF] hover:text-white active:scale-95"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;