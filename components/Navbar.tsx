import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';

interface NavbarProps {
  onJoin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-dark-bg/90 backdrop-blur-md border-dark-border py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-purple-600 flex items-center justify-center">
                <span className="font-serif italic font-bold text-white">V</span>
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-white">
            Velvet<span className="text-brand-500">Stream</span>
            </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#live" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Discover</a>
          <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Premium</a>
          <a href="#creators" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">For Creators</a>
          
          <div className="h-4 w-px bg-gray-700"></div>
          
          <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </button>
          
          <button className="text-sm font-medium text-white hover:text-brand-400 transition-colors">
            Log In
          </button>
          
         <a 
  href="https://t.acrsmartcam.com/339539/8873/0?aff_sub5=SF_006OG000004lmDN"
  className="px-10 py-4 bg-white text-black hover:bg-neutral-200 text-sm font-bold tracking-widest uppercase transition-colors duration-300 inline-block text-center"
>
  Join Free
</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-surface border-b border-dark-border p-4 flex flex-col space-y-4 shadow-2xl">
           <a href="#live" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">Discover</a>
           <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">Premium Benefits</a>
           <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white py-2">Log In</a>
           <button 
             onClick={() => {
                onJoin();
                setMobileMenuOpen(false);
             }}
             className="w-full py-3 rounded-lg bg-brand-600 text-white font-semibold"
            >
             Join Now
           </button>
        </div>
      )}
    </nav>
  );
};
