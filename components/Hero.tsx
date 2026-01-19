import React from 'react';
import { Play, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface HeroProps {
  onJoin: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoin }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dark-bg">
      {/* 极简背景，去除复杂的渐变球，改用微弱的聚光灯效果 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-brand-900/20 blur-[150px] rounded-full pointer-events-none -z-10 opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* 左侧文字区：更犀利的排版 */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 border-l border-brand-600 pl-4">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
                </span>
                <span className="text-xs font-semibold text-brand-100 tracking-[0.2em] uppercase">Live Now</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl editorial-text font-medium leading-[0.9] text-white tracking-tight">
              Unfiltered <br />
              <span className="text-brand-600 italic font-normal">Intimacy.</span>
            </h1>
            
            <p className="text-lg text-neutral-400 max-w-lg leading-relaxed font-light border-l-2 border-neutral-800 pl-6">
              Forget the scripts. Experience raw, real-time connections with verified creators in 4K resolution. The most discreet platform for the discerning taste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button 
                onClick={onJoin}
                className="px-10 py-4 bg-white text-black hover:bg-neutral-200 text-sm font-bold tracking-widest uppercase transition-colors duration-300"
              >
                Join Free
              </button>
              
              <button className="px-10 py-4 border border-neutral-800 text-neutral-300 hover:border-white hover:text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3">
                <Play className="w-3 h-3 fill-current" />
                Preview
              </button>
            </div>
          </div>

          {/* 右侧视觉区：去除复杂的浮动卡片，改用更有质感的单图呈现 */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative z-10">
                {/* 主图：更有电影质感的比例和处理 */}
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-700 ease-out">
                    <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
                        alt="Featured Model" 
                        className="w-full h-full object-cover opacity-80" 
                    />
                    
                    {/* 极简的信息遮罩 */}
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                        <div className="flex items-end justify-between border-b border-white/20 pb-4 mb-4">
                            <div>
                                <h3 className="text-2xl editorial-text italic text-white">Elena_V</h3>
                                <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">Paris • Online</p>
                            </div>
                            <Activity className="text-brand-500 w-5 h-5" />
                        </div>
                        <div className="flex gap-2">
                             <span className="px-2 py-1 bg-white/10 text-white text-[10px] uppercase tracking-wider backdrop-blur-md">Exclusive</span>
                             <span className="px-2 py-1 bg-white/10 text-white text-[10px] uppercase tracking-wider backdrop-blur-md">4K Cam</span>
                        </div>
                    </div>
                </div>

                {/* 装饰性边框，增加设计感 */}
                <div className="absolute -top-4 -right-4 w-full h-full border border-neutral-800 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-brand-900/30 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};