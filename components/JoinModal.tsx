import React from 'react';
import { X, Mail, Facebook, Github } from 'lucide-react';

interface JoinModalProps {
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-dark-surface border border-dark-border w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-float">
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
            <X size={20} />
        </button>

        <div className="p-8">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-white">Join VelvetStream</h3>
                <p className="text-gray-400 text-sm mt-2">Create your free account to start watching.</p>
            </div>

            <div className="space-y-4">
                <button className="w-full flex items-center justify-center gap-3 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-100 transition-colors">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                    Continue with Google
                </button>
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 bg-[#1877F2] text-white rounded-lg font-bold hover:opacity-90 transition-opacity">
                        <Facebook size={18} /> Facebook
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 bg-[#24292F] text-white rounded-lg font-bold hover:opacity-90 transition-opacity">
                        <Github size={18} /> Apple
                    </button>
                </div>
            </div>

            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-dark-surface px-2 text-gray-500">Or continue with email</span>
                </div>
            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
                    <input type="email" className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="you@example.com" />
                </div>
                <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Password</label>
                    <input type="password" className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="••••••••" />
                </div>
                <button type="button" className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-900/50">
                    Create Account
                </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
                By joining, you agree to our Terms of Service and Privacy Policy. 
                <br />This site is protected by reCAPTCHA.
            </p>
        </div>
      </div>
    </div>
  );
};