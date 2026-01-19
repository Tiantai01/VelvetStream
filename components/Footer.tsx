import React from 'react';
import { Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-display font-bold tracking-tight text-white">
                    Velvet<span className="text-brand-500">Stream</span>
                    </span>
                </div>
                <p className="text-gray-500 text-sm max-w-xs mb-6">
                    The premium destination for authentic adult connections and live entertainment. Secure, discreet, and world-class.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
                </div>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-4">Discover</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Live Cams</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Trending</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">New Models</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Categories</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Community</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Forum</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Trust & Safety</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Become a Creator</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Billing</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Report Abuse</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a></li>
                    <li><a href="#" className="hover:text-brand-400 transition-colors">2257 Compliance</a></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
                © 2024 VelvetStream Inc. All rights reserved. 18+ Only.
            </p>
            <p className="text-xs text-gray-700">
                US 2257 Record-Keeping Requirements Compliance Statement
            </p>
        </div>
      </div>
    </footer>
  );
};