import React from 'react';
import {
  Home,
  Search,
  User,
} from 'lucide-react';

const Bar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#090909] border-t border-gray-800 text-gray-400 text-xs font-semibold flex justify-around py-2 select-none z-50">
      <a href='/home'
        className="flex flex-col items-center flex-1 hover:text-green-400 cursor-pointer"
        aria-current="page"
        aria-label="Beranda"
      >
        <Home className="h-6 w-6 mb-1" />
        Beranda
      </a>

      <a href='/search'
        className="flex flex-col items-center flex-1 hover:text-green-400 cursor-pointer"
        aria-label="Telusuri"
      >
        <Search className="h-6 w-6 mb-1" />
        Telusuri
      </a>

      <a href='/user'
        className="flex flex-col items-center flex-1 hover:text-green-400 cursor-pointer"
        aria-label="Pengguna"
      >
        <User className="h-6 w-6 mb-1" />
        Pengguna
      </a>
    </nav>
  );
};

export default Bar;
