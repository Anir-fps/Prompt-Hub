import PromptCard from '../components/PromptCard';
import CategoryBar from '../components/CategoryBar';

// 1. This is our data list (Eventually, this will come from your Database)
const MOCK_PROMPTS = [
  {
    id: 1,
    title: "Cyberpunk Street",
    tool: "Midjourney v6",
    promptText: "futuristic street in a neon city, cinematic rain, hyper-realistic, 8k",
    imageUrl: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=1000"
  },
  {
    id: 2,
    title: "Arabic Mosaic Sci-Fi",
    tool: "DALL-E 3",
    promptText: "Interior of a futuristic palace with glowing neon blue zellige patterns",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000"
  },
  {
    id: 3,
    title: "Liquid Gold Avatar",
    tool: "Stable Diffusion",
    promptText: "Portrait of a cyborg made of liquid gold and obsidian, sharp focus",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000"
  }
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6 md:p-12">
      {/* 2. Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
          Explore the <span className="text-[#00D4FF]">Prompt Space.</span>
        </h1>
        
        {/* 3. The new Filter Bar */}
        <CategoryBar />
      </header>
      
      {/* 4. The Grid - Mapping through our list */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">        {MOCK_PROMPTS.map((item) => (
          <PromptCard 
            key={item.id}
            title={item.title} 
            tool={item.tool} 
            promptText={item.promptText}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}