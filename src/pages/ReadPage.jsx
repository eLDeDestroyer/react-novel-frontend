import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";


const halamanIsi = [
  "Farhan membuka matanya perlahan. Dunia di sekelilingnya tampak remang-remang, dan rasa sakit masih menusuk-nusuk tubuhnya.",
  "Ia mengingat kejadian semalam, saat keluarganya menjebaknya. Darahnya masih mendidih mengingat pengkhianatan itu.",
  "Namun, tekad Farhan tak padam. Meski terluka parah, ia bersumpah akan kembali lebih kuat dari sebelumnya.",
  "Pelan-pelan, ia bangkit, menatap langit dengan penuh keyakinan. Hari kebangkitannya telah tiba.",
];

const ReadPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < halamanIsi.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col">
    <div className="max-w-md min-h-screen bg-[#191919] m-4 text-white p-6 flex flex-col justify-between">
      {/* Judul halaman */}
      <h1 className="text-xl font-bold mb-4 text-center">
        Halaman {currentPage + 1}
      </h1>

      {/* Isi halaman */}
      <p className="text-gray-300 text-lg leading-relaxed flex-1">
        {halamanIsi[currentPage]}
      </p>

      {/* Tombol navigasi */}
    <div className="flex justify-between mt-8">
    {/* Tombol Sebelumnya */}
    <button
        onClick={prevPage}
        disabled={currentPage === 0}
        className={`flex items-center gap-2 px-4 py-2 rounded font-semibold transition ${
        currentPage === 0
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-white text-black hover:bg-gray-200"
        }`}
    >
        <ArrowLeft className="w-4 h-4" />
        Prev
    </button>

    {/* Tombol Berikutnya */}
    <button
        onClick={nextPage}
        disabled={currentPage === halamanIsi.length - 1}
        className={`flex items-center gap-2 px-4 py-2 rounded font-semibold transition ${
        currentPage === halamanIsi.length - 1
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-white text-black hover:bg-gray-200"
        }`}
    >
        Next
        <ArrowRight className="w-4 h-4" />
        </button>
        </div>
        </div>
    </div>
  );
};

export default ReadPage;
