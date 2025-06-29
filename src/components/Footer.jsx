import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-8 text-sm text-text bg-primary border-t border-neutral">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Reduan Ahmad. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind CSS, and ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;