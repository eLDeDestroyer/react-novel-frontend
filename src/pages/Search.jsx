import React, { useEffect, useState } from 'react'
import Bar from '../components/Bar';
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;


const Search = () => {
  const token = localStorage.getItem("token")
  const [text, setText] = useState("")
  const [data,setData] = useState([])


  const handleText = (e) => {
    setText(e.target.value)
  }

  const fetchSearchData = async() => { 
    const res = await axios.get(`${apiUrl}/api/auth/book/search?title=${text}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    console.log(res.data.data)
    setData(res.data.data)
  }

  useEffect(() => {
    fetchSearchData()
  }, [text]);
  

  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col pb-[5rem]">
      {/* Search Bar */}
      <div className="p-4">
        <input
          type="search"
          onChange={(e) => handleText(e)}
          placeholder="Cari karya"
          className="w-full p-3 rounded-lg bg-[#101010] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Cari karya"
        />
      </div>


      {/* Category Section */}
      <div className="m-[1rem] pt-[0.8rem] bg-[#090909] rounded-md">
        {data.map((item, index) => (
          <a href={`/book/${item.id}`}
            key={item.id}
            className="flex items-start gap-4 p-3 rounded-md"
          >
            {/* Gambar */}
            <div className="w-26 h-34 flex-shrink-0 relative">
              <img
                src={`${apiUrl}/${item.image_path}`}
                alt={`Cover of ${item.title}`}
                className="w-full h-full rounded-md object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f19a5c4e-4712-4597-9c84-14c6789cbc72.png";
                }}
              />
            </div>

            {/* Konten */}
            <div className="flex flex-col flex-grow overflow-hidden min-w-0">
              <h2 className="text-white font-semibold truncate select-text">
                {item.title}
              </h2>
              <div className="text-gray-400 text-xs mt-1 select-text line-clamp-3">
                {item.description}
              </div>
              <div className="flex items-center text-gray-400 text-xs mt-1 select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 
                        9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 
                        0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {item.page_count}
              </div>
            </div>
          </a>

        ))}
      </div>

        <Bar/>

    </div>
  );
};

export default Search