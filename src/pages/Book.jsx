import React, { useState } from 'react';
import { Eye, ThumbsUp, FileText,Bookmark } from "lucide-react";


const Book = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col">
      <div className="min-h-screen bg-black text-white font-serif flex flex-col justify-between">
        {/* Header */}
        <header className="flex items-center px-4 pt-2 gap-2 text-xl">
        </header>

        {/* Gambar tunggal */}
        <section className="flex justify-center px-4 mt-6">
        <div className="rounded-xl overflow-hidden shadow-lg w-[140px] h-[180px]">
            <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/db6f5cd7-5246-4f26-8309-c5b1aebec212.png" 
            alt="Cover Tinju Super Kultivator Sampah"
            className="w-full h-full object-cover"
            onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/120x180?text=No+Image';
            }}
            />
        </div>
        </section>


        {/* Judul */}
        <h1 className="text-center text-3xl font-extrabold px-4 mt-1">
          Tinju Super Kultivator Sampah
        </h1>

        {/* Penulis dan status */}
        <div className="flex justify-center items-center gap-2 text-gray-400 text-sm px-4">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5afc1e4b-11e2-4fbf-b504-77e4d85cbde5.png" 
            alt="Icon Mawar Merah" 
            className="w-6 h-6 rounded-full object-cover"
            onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/24x24?text=!' }}
          />
          <a href="#" className="hover:underline text-gray-400 font-medium">Mawar Merah</a> 
          <span>|</span>
          <span>Bersambung</span>
        </div>

        {/* Statistik */}
        <section className="bg-[#090909] rounded-lg mx-4 mt-3 p-4 flex justify-around text-center">
        <div className="flex flex-col items-center">
            <Eye className="w-5 h-5 text-white" />
            <p className="text-2xl font-extrabold">28</p>

        </div>
        <div className="flex flex-col items-center">
            <ThumbsUp className="w-5 h-5 text-white" />
            <p className="text-2xl font-extrabold">28</p>

        </div>
        <div className="flex flex-col items-center">
            <FileText className="w-5 h-5 text-white" />
            <p className="text-2xl font-extrabold">28</p>
        </div>
        </section>

        {/* Sinopsis */}
        <section className="bg-[#090909] rounded-lg mx-4 p-4 max-w-3xl self-center">
          <h2 className="font-extrabold text-xl mb-3">Sinopsis</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Farhan adalah seorang kultivator genius, tapi malah dihancurkan karena keegoisan keluarga. 
            Dalam semalam, Farhan mengalami luka berat dan menjadi sampah, hingga tidak dapat kultivasi lagi.  
            Farhan mengalami luka berat dan menjadi sampah, hingga tidak dapat kultivasi lagi. 
            Selama dikejar oleh keluarganya, dia tidak sengaja ...
          </p>
        </section>


<nav
  className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-[#070707] bg-opacity-90 rounded-t-xl p-5 transition-transform duration-300 z-40 pb-[7rem] scrollbar-dark
    ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}
    h-1/2 overflow-y-auto`}
>
        {[
          { name: "Page 1", icon: 'user' },
          { name: "Page 2", icon: 'user' },
          { name: "Page 3", icon: 'user' },
          { name: "Page 4", icon: 'user' },
          { name: "Page 5", icon: 'user' },
          { name: "Page 6", icon: 'user' },
          { name: "Page 7", icon: 'user' },
          { name: "Page 8", icon: 'user' },
          { name: "Page 9", icon: 'user' },
          { name: "Page 10", icon: 'user' },
          { name: "Page 11", icon: 'user' },
          { name: "Page 12", icon: 'user' },

        ].map(({ name, icon, badge, badgeClass }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-[#050505] hover:bg-opacity-10 rounded px-2"
          >
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span>{name}</span>
              {badge && <span className={badgeClass}>{badge}</span>}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </nav>

        {/* Footer */}
<footer className="flex justify-between items-center p-4 mt-2 bg-black border-t border-gray-800 z-50">
  <div className="flex gap-8 text-gray-400 text-sm flex-1">
    <button className="flex flex-col items-center gap-1" aria-label="Save">
      <Bookmark className="w-8 h-8 ml-4"  />
      <span className='ml-4'>Save</span>
    </button>
  </div>
  <button 
    className="bg-lime-400 text-black rounded-md px-10 py-3 font-bold uppercase text-sm tracking-wider shadow-lg"
    aria-label="Mulai Baca"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    MULAI BACA
  </button>
</footer>
      </div>
    </div>
  );
};

export default Book;
