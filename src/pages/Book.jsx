import React, { useEffect, useState } from 'react';
import { Eye, ThumbsUp, FileText,Bookmark } from "lucide-react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;


const Book = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const token = localStorage.getItem("token")
    const {id} = useParams()
    const [data, setData] = useState([])

    const fetchData = async() => {
      const res = await axios.get(`${apiUrl}/api/auth/book/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data.data)
      setData(res.data.data)
    }

    const handleAddViewBook = async() => {
      await axios.post(`${apiUrl}/api/auth/user/action/histories/${id}`,{}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    const handleSaveBook = async() => {
      await axios.post(`${apiUrl}/api/auth/user/action/save/${id}`,{}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    const handleLikeBook = async() => {
      await axios.post(`${apiUrl}/api/auth/user/action/like/${id}`,{}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }

    useEffect(() => {
      fetchData()
      handleAddViewBook()
    },[])

    
  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col">
      <div className="min-h-screen bg-black text-white font-serif flex flex-col justify-between">
        {/* Header */}
        <header className="flex items-center px-4 pt-2 gap-2 text-xl">
        </header>

        {/* Gambar tunggal */}
        <section className="flex justify-center px-4 mt-6">
        <div className="rounded-xl overflow-hidden shadow-lg w-[140px] h-[200px]">
            <img 
            src={`${apiUrl}/${data.image_path}`}
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
          {data.title}
        </h1>

        {/* Penulis dan status */}
        <div className="flex justify-center items-center gap-2 text-gray-400 text-sm px-4">
          <img 
            src={`${apiUrl}/${data.image_path}`} 
            alt="Icon Mawar Merah" 
            className="w-6 h-6 rounded-full object-cover"
            onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/24x24?text=!' }}
          />
          <a href="#" className="hover:underline text-gray-400 font-medium">{data.name}</a> 
          <span>|</span>
          <span>{data.title}</span>
        </div>

        {/* Statistik */}
        <section className="bg-[#090909] rounded-lg mx-4 mt-3 p-4 flex justify-around text-center">
        <div className="flex flex-col items-center">
            <Eye className="w-5 h-5 text-white" />
            <p className="text-2xl font-extrabold">{data?.action?.seen}</p>

        </div>
        <div className="flex flex-col items-center">
            <ThumbsUp className="w-5 h-5 text-white" onClick={handleLikeBook} />
            <p className="text-2xl font-extrabold">{data?.action?.like}</p>
        </div>
        <div className="flex flex-col items-center">
            <FileText className="w-5 h-5 text-white" />
            <p className="text-2xl font-extrabold">{data?.action?.page}</p>
        </div>
        </section>

        {/* Sinopsis */}
        <section className="bg-[#090909] rounded-lg mx-4 p-4 max-w-3xl self-center">
          <h2 className="font-extrabold text-xl mb-3">Sinopsis</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {data.description}
          </p>
        </section>


<nav
  className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-[#070707] bg-opacity-90 rounded-t-xl p-5 transition-transform duration-300 z-40 pb-[7rem] scrollbar-dark
    ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}
    h-1/2 overflow-y-auto`}
>
        {data?.pages?.map(({badge, badgeClass }, idx) => (
          <a href={`/page/${id}/${idx + 1}`}
            key={idx}
            className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-[#050505] hover:bg-opacity-10 rounded px-2"
          >
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span>Bab {idx + 1}</span>
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
          </a>
        ))}
      </nav>

        {/* Footer */}
<footer className="flex justify-between items-center p-4 mt-2 bg-black border-t border-gray-800 z-50">
  <div className="flex gap-8 text-gray-400 text-sm flex-1">
    <button className="flex flex-col items-center gap-1" aria-label="Save" onClick={handleSaveBook}>
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
