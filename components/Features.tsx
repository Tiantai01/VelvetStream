import React from 'react';
import { Video, Lock, Zap, Star } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-dark-bg border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 标题区：左对齐，更大气 */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-neutral-900 pb-12">
            <div className="lg:col-span-2">
                <h2 className="text-5xl md:text-6xl editorial-text font-normal text-white mb-6">
                    Redefining the <br />
                    <span className="text-neutral-500 italic">Streaming Standard.</span>
                </h2>
            </div>
            <div className="flex items-end">
                <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                    We don't just host streams; we curate experiences. Every feature is designed for maximum immersion and absolute discretion.
                </p>
            </div>
        </div>

        {/* 不对称网格布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-neutral-900 border border-neutral-900">
          
          {/* Feature 1: 大图背景 */}
          <div className="relative group overflow-hidden bg-black aspect-[4/3] md:aspect-auto md:row-span-2 lg:col-span-1 border-r border-b border-neutral-900">
            <img 
                src="https://images.unsplash.com/photo-1616004655123-818cbd4b3143?q=80&w=2070&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                alt="4K Quality" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
                <Video className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl text-white font-medium mb-2 editorial-text">Cinematic 4K</h3>
                <p className="text-neutral-400 text-sm">Ultra-low latency streaming that feels like you're in the same room.</p>
            </div>
          </div>

          {/* Feature 2: 纯色块强调 */}
          <div className="bg-dark-surface p-10 border-r border-b border-neutral-900 flex flex-col justify-between h-full group hover:bg-neutral-900 transition-colors">
            <Lock className="w-6 h-6 text-brand-600 mb-6" />
            <div>
                <h3 className="text-xl text-white font-medium mb-3 editorial-text">Ironclad Privacy</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                    We process payments discreetly. Your data is encrypted with military-grade protocols. Anonymity is our default setting.
                </p>
            </div>
          </div>

          {/* Feature 3: 纯色块 */}
          <div className="bg-dark-surface p-10 border-b border-neutral-900 flex flex-col justify-between h-full group hover:bg-neutral-900 transition-colors">
            <Zap className="w-6 h-6 text-brand-600 mb-6" />
            <div>
                <h3 className="text-xl text-white font-medium mb-3 editorial-text">Interactive Feedback</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                   Sync your lush-enabled toys directly to the stream. Feel the connection with real-time haptic feedback technology.
                </p>
            </div>
          </div>

           {/* Feature 4: 横向长块 */}
           <div className="lg:col-span-2 bg-dark-surface p-10 border-r border-neutral-900 flex flex-col md:flex-row md:items-center gap-8 group hover:bg-neutral-900 transition-colors">
            <div className="flex-1">
                <Star className="w-6 h-6 text-brand-600 mb-6" />
                <h3 className="text-xl text-white font-medium mb-3 editorial-text">Curated Talent</h3>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                   We are invite-only for creators. This ensures a roster of genuine, professional, and captivating personalities you won't find on generic tube sites.
                </p>
            </div>
            <div className="flex -space-x-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/150?u=${i+20}`} className="w-16 h-16 rounded-full border-2 border-dark-bg" alt="Creator" />
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};