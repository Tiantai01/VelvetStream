import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      
      {/* 极简的分割线 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-brand-900 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-12 h-12 text-neutral-800 mx-auto mb-12 fill-current" />
        
        <h2 className="text-3xl md:text-5xl editorial-text text-white mb-16 leading-tight">
          "Finally, a platform that treats adult content with the <span className="text-brand-600 italic">sophistication</span> it deserves."
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
                { 
                    text: "The verification process is strict, which I love. No bots, just real people.", 
                    user: "James H.", 
                    loc: "London",
                    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                },
                { 
                    text: "Streaming quality is flawlessly 4K. It feels incredibly intimate.", 
                    user: "Sarah K.", 
                    loc: "New York",
                    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                },
                { 
                    text: "As a creator, I feel safer here than anywhere else. The community is respectful.", 
                    user: "Mika_X", 
                    loc: "Tokyo",
                    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                },
            ].map((review, i) => (
                <div key={i} className="border-t border-neutral-800 pt-6">
                    <div className="flex items-center gap-4 mb-4">
                        <img 
                            src={review.img} 
                            alt={review.user} 
                            className="w-10 h-10 rounded-full object-cover grayscale opacity-80" 
                        />
                        <div>
                            <p className="text-white text-sm font-bold tracking-wide uppercase">{review.user}</p>
                            <p className="text-neutral-600 text-xs">{review.loc}</p>
                        </div>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                        {review.text}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};