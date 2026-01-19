import React from 'react';
import { Lock } from 'lucide-react';

const mockStreamers = [
  { id: 1, name: 'Amber_Rose', viewers: '2.4k', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop' },
  { id: 2, name: 'Velvet_Sky', viewers: '12k', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop', isPrivate: true },
  { id: 3, name: 'Jade_Fox', viewers: '8.1k', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop' },
  { id: 4, name: 'Scarlett_D', viewers: '5.3k', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop' },
];

export const LiveGrid: React.FC = () => {
  return (
    <section id="live" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-8 border-b border-neutral-900 pb-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Trending Now</h2>
            <a href="#" className="text-neutral-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                View All ->
            </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockStreamers.map((streamer) => (
                <div key={streamer.id} className="group relative bg-neutral-900 aspect-[3/4] cursor-pointer overflow-hidden">
                    <img 
                        src={streamer.img} 
                        alt={streamer.name} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                    />
                    
                    {/* 纯净的底部渐变 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                    {/* 状态标 */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        {streamer.isPrivate ? (
                            <span className="bg-brand-900/90 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest flex items-center gap-1">
                                <Lock size={10} />
                                Private
                            </span>
                        ) : (
                            <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest flex items-center gap-1 border border-white/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                Live
                            </span>
                        )}
                    </div>

                    {/* 底部信息：极简 */}
                    <div className="absolute bottom-0 left-0 w-full p-6">
                        <h3 className="text-lg editorial-text italic text-white mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{streamer.name}</h3>
                        <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                             <span className="text-xs text-neutral-400">{streamer.viewers} watching</span>
                             <span className="text-xs text-white border-b border-white pb-0.5">Enter Room</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};