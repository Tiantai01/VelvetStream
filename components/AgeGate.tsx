import React from 'react';

interface AgeGateProps {
  onVerify: () => void;
}

export const AgeGate: React.FC<AgeGateProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-6 text-brand-500 font-bold text-2xl">
            18+
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Age Verification Required</h2>
        <p className="text-gray-400 mb-8">
          This website contains content intended for adults. By entering, you certify that you are at least 18 years of age (or the age of majority in your jurisdiction) and agree to our Terms of Service.
        </p>
        
        <div className="space-y-3">
          <button 
            onClick={onVerify}
            className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl transition-colors"
          >
            I am 18 or older - Enter
          </button>
          <button 
            onClick={() => window.location.href = 'https://google.com'}
            className="w-full py-4 bg-transparent hover:bg-zinc-800 text-gray-500 font-medium rounded-xl transition-colors"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};