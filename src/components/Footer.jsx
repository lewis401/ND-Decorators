import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="font-serif text-xl font-medium text-gray-900 mb-2">N D Decorators</div>
          <p className="font-sans text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} N D Decorators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}