import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;


const ReadPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const token = localStorage.getItem("token")
  const {book_id} = useParams()
  const {page_id} = useParams()
  const [data, setData] = useState([])
  const [newPage, setNewPage] = useState(page_id)
  const navigate = useNavigate()

  const fetchData = async() => {
      const res = await axios.get(`${apiUrl}/api/auth/book/page/${book_id}/${newPage}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data.data)
      setData(res.data.data)
  }


  useEffect(() => {
    fetchData()

  },[newPage])

  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col">
    <div className="max-w-md min-h-screen bg-[#191919] m-4 text-white p-6 flex flex-col justify-between">
      {/* Judul halaman */}
      <h1 className="text-xl font-bold mb-4 text-center">
        Bab {data.page}
      </h1>

      {/* Isi halaman */}
      <p className="text-gray-300 text-lg leading-relaxed flex-1">
        {data.text}
      </p>

      {/* Tombol navigasi */}
    <div className="flex justify-between mt-8">
    {/* Tombol Sebelumnya */}
    <button
        onClick={() => setNewPage(data.prev_page)}
        disabled={data.prev_page == null}
        className={`flex items-center gap-2 px-4 py-2 rounded font-semibold transition ${
        data.prev_page == null
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-white text-black hover:bg-gray-200"
        }`}
    >
        <ArrowLeft className="w-4 h-4" />
        Prev
    </button>

    {/* Tombol Berikutnya */}
    <button
        onClick={() => setNewPage(data.next_page)}
        disabled={data.next_page == null}
        className={`flex items-center gap-2 px-4 py-2 rounded font-semibold transition ${
        data.next_page == null
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
