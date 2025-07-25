import React, { useEffect, useState } from "react";
import Bar from "../components/Bar";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const banners = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/APue9Y916xzNMk461KTcw0GNeHRtncNzveqXo-8r-No/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/amRhbmRqLmNvbS91/cGxvYWRzLzgvMC8w/LzgvODAwODM0NTgv/dHdpdHRlci1iYW5u/ZXJzLWZvci1ub3Zl/bHMtb3JpZy13ZWJw/X29yaWcud2VicA",
    alt: "Banner 1",
  },
  {
    id: 2,
    image:
      "https://imgs.search.brave.com/0rn9QKt-gdSmhm6zH5NDg0gzZ_UdgwFIG2Dnx8wpL-o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVyYW5nZWRkb2N0/b3JkZXNpZ24uY29t/L3VwbG9hZHMvMi80/LzQvNy8yNDQ3Mjgw/MS9hbWF6b24tYmFu/bmVyLTE1MDB4NzYw/XzJfb3JpZy5qcGc",
    alt: "Banner 2",
  },
  {
    id: 3,
    image:
      "https://imgs.search.brave.com/emgsqc5j0eDznBHZQQ2t9BtOjZcgop7AUexOTo5voTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVyYW5nZWRkb2N0/b3JkZXNpZ24uY29t/L3VwbG9hZHMvMi80/LzQvNy8yNDQ3Mjgw/MS8yMDE5LTAzMTQt/Y3JhdmUtcm95YWwt/bWFmaWEtYmFubmVy/X29yaWcuanBn",
    alt: "Banner 3",
  },
];

const Home = () => {
  const token = localStorage.getItem("token")
  const [currentBanner, setCurrentBanner] = useState(0);
  const [allCategory, setAllCategory] = useState([])
  const [homeData, setHomeData] = useState([])
  const [rankData, setRankData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [pickCategory, setPickCategory] = useState(1)

  const fetchHomeData = async() => {
    const res = await axios.get(`${apiUrl}/api/auth/book/new`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setHomeData(res.data.data)
  }

  const fetcRankData = async() => {
    const res = await axios.get(`${apiUrl}/api/auth/book/like`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setRankData(res.data.data)
  }

  const fetchAllCategory = async() => {
    const res = await axios.get(`${apiUrl}/api/auth/categories`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    console.log(res.data.data)
    setAllCategory(res.data.data)
  }

  const fetcCatgeoryData = async() => { 
    const res = await axios.get(`${apiUrl}/api/auth/book/${pickCategory}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setCategoryData(res.data.data)
  }


useEffect(() => {

  fetchHomeData()
  fetcRankData()
  fetchAllCategory()
  fetcCatgeoryData()
}, [pickCategory]);


  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col pb-[5rem]">
      {/* Banner */}
      <div className="p-4">
        <div className="rounded-xl overflow-hidden w-full h-44 bg-gray-800 relative">
      <div className="relative w-full h-44 overflow-hidden rounded-xl bg-gray-800">
        {banners.map((banner, index) => (
          <img
            key={banner.id}
            src={banner.image}
            alt={banner.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform 
              ${currentBanner === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"}
            `}
          />
        ))}

        {/* Dot Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentBanner === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    {/* Optional: Banner indicator */}
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {banners.map((_, index) => (
        <span
          key={index}
          className={`w-2 h-2 rounded-full ${
            currentBanner === index ? "bg-white" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  </div>
      </div>


      {/* Terbaru */}
      <div className="m-[1rem] pt-[0.8rem] bg-[#090909] rounded-md">
        <section className="px-4 flex-1 flex flex-col">
          <div className="flex items-center mb-3">
            <h2 className="font-bold text-lg">Terbaru</h2>
            <span className="ml-auto text-gray-600 font-semibold uppercase text-xs select-none">
            
            </span>
          </div>

          {/* Grid of books */}
          <div className="grid grid-cols-3 gap-3 overflow-y-auto pb-4">
            {homeData.map((book) => (
              <a href={`/book/${book.id}`}
                key={book.id}
                className=" rounded-md shadow-inner shadow-black/50 overflow-hidden cursor-pointer hover:shadow-gray-900 transition"
                tabIndex={0}
              >
                <div className="relative">
                  <img
                    src={`${apiUrl}/${book.image_path}`}
                    alt={`Cover book titled ${book.title} showing characteristic art`}
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d7fb0e28-254b-44de-ad99-4716934a9b42.png")
                    }
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-xs px-1 flex items-center space-x-1 text-white select-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10l4.553 2.276a1 1 0 010 1.448L15 16m-6 0L4.448 13.724a1 1 0 010-1.448L9 10m6 0L9 16v-6m0 0l6-3"
                      />
                    </svg>
                    <span>{book.page_count}</span>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold truncate" title={book.title}>
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">{book.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Ranking Section */}
      <div className="m-4 pt-3 bg-[#090909] rounded-md">
        <div className="px-4">
          <h2 className="font-bold text-lg mb-3">Ranking</h2>
        </div>

        {/* Scroll area */}
        <div className="overflow-x-auto px-4 scrollbar-dark" style={{ scrollbarWidth: "thin" }}>
          <div className="flex gap-4 pb-4 w-max">
            <div className="flex-shrink-0 flex gap-8">
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {rankData.map((item, index) => (
                  <a href={`/book/${item.id}`}
                    key={item.id}
                    className="flex items-center gap-4 p-1 rounded-lg w-64"
                  >
                    <div className="relative">
                      <img
                        src={`${apiUrl}/${item.image_path}`}
                        alt="Cover"
                        className="w-20 h-28 rounded-md object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f19a5c4e-4712-4597-9c84-14c6789cbc72.png";
                        }}
                      />
                      <div className="absolute top-0 right-0 bg-lime-400 text-black font-bold text-xs px-2 py-0.5 rounded-bl-md select-none">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow overflow-hidden max-w-[150px]">
                      <h2 className="text-white text-[15px] font-semibold leading-snug line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-500 text-sm truncate">
                        {item.description}
                      </p>
                      <div className="flex items-center text-gray-400 text-xs mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
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
            </div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="m-[1rem] pt-[0.8rem] bg-[#090909] rounded-md">
        <div className="px-4 flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg text-white">Category</h2>
          <select
            className="bg-[#202020] text-white text-sm px-3 py-1 rounded-sm"
            onChange={(e) => setPickCategory(e.target.value)} 
          >
            {
              allCategory?.map((data) => (
                <>
                  <option value={data.id}>{data.category}</option>
                </>
              ))
            }
          </select>
        </div>

        {categoryData.map((item, index) => (
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

export default Home;



