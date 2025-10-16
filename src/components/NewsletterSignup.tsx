'use client';
import React, { useState } from 'react';

export function NewsletterSignup() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Signup Button */}
      <div className="flex justify-center my-12">
        <button
          onClick={openModal}
          className="px-8 py-4 bg-gradient-to-r from-[#FF4C4C] to-[#FF6B3D] text-white font-bold rounded-lg hover:from-[#FF6B3D] hover:to-[#E63946] transition-all duration-300 transform hover:scale-105 shadow-lg"
          style={{ fontFamily: 'Space Mono, Courier Prime, monospace' }}
        >
          Join The Uprising
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          onClick={closeModal}
        >
          <div 
            className="relative w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
            <iframe 
              src="https://subscribe-forms.beehiiv.com/f0a5cccc-c434-4064-a6b5-b6e1c6fc8e97" 
              className="beehiiv-embed" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no" 
              style={{
                width: '550px',
                height: '350px',
                margin: 0,
                borderRadius: '0px',
                backgroundColor: 'transparent',
                boxShadow: '0 0 #0000',
                maxWidth: '100%'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default NewsletterSignup;
