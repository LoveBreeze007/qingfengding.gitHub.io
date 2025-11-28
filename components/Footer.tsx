import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-gray-100 text-center text-gray-400 text-xs font-sans">
      <p>&copy; {new Date().getFullYear()} Qingfeng Ding. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
