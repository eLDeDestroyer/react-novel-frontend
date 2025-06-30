import React from 'react'
import { useParams } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: "Dewa Pedang Pedang Pedang Pedang PedangPedang",
    author: "Hasbullah",
    genre: "Pedang",
    views: "6.7M",
    description: "Kisah seorang pendekar legendaris yang mencari makna kekuatan sejati.",
    cover:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ab39a405-23d5-4e0b-9a80-a9a81523609d.png",
  },
  {
    id: 2,
    title: "Sang Tabib",
    author: "Raka",
    genre: "Medis",
    views: "1.2M",
    description: "Seorang dokter jenius yang menyembuhkan penyakit dengan kekuatan misterius.",
    cover:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4b5f511-640e-4fab-b0c5-2649be01a838.png",
  },
    {
    id: 3,
    title: "Dewa Pedang",
    author: "Hasbullah",
    genre: "Pedang",
    views: "6.7M",
    description: "Kisah seorang pendekar legendaris yang mencari makna kekuatan sejati.",
    cover:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ab39a405-23d5-4e0b-9a80-a9a81523609d.png",
  },
  {
    id: 4,
    title: "Sang Tabib",
    author: "Raka",
    genre: "Medis",
    views: "1.2M",
    description: "Seorang dokter jenius yang menyembuhkan penyakit dengan kekuatan misterius.",
    cover:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4b5f511-640e-4fab-b0c5-2649be01a838.png",
  },
    {
    id: 5,
    title: "Dewa Pedang",
    author: "Hasbullah",
    genre: "Pedang",
    views: "6.7M",
    description: "Kisah seorang pendekar legendaris yang mencari makna kekuatan sejati.",
    cover:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ab39a405-23d5-4e0b-9a80-a9a81523609d.png",
  },
  {
    id: 6,
    title: "Sang Tabib",
    author: "Raka",
    genre: "Medis",
    views: "1.2M",
    description: "Seorang dokter jenius yang menyembuhkan penyakit dengan kekuatan misterius.",
    cover:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4b5f511-640e-4fab-b0c5-2649be01a838.png",
  },
];


const ActionBook = () => {
  const {action} = useParams()
  return (
    <>
    <div className='relative max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col pb-[5rem]'>
           <div className="m-[1rem] pt-[0.8rem] bg-[#090909] rounded-md">
        <div className="px-4 flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg text-white">{action}</h2>
        </div>

        {categories.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-3 rounded-md"
          >
            <div className="relative">
              <img
                src={item.cover}
                alt={`Cover of ${item.title}`}
                className="w-36 h-32 rounded-md object-cover flex-shrink-0"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f19a5c4e-4712-4597-9c84-14c6789cbc72.png";
                }}
              />
            </div>

            <div className="flex flex-col flex-grow overflow-hidden min-w-0">
              <h2 className="text-white font-semibold truncate select-text">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm truncate select-text">
                {item.author} | {item.genre}
              </p>
              <div className="text-gray-400 text-xs mt-1 select-text truncate">
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
                  aria-hidden="true"
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
                {item.views}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ActionBook