import React, { useEffect, useState } from 'react'
import Bar from '../components/Bar';
import axios from 'axios';
import { href } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;


const User = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem("token")
  const [data,setData] = useState()


  const fetcData = async() => {
    const res = await axios.get(`${apiUrl}/api/auth/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    console.log(res.data.data)
    setData(res.data.data)
  }

  const handleLogout = async() => {
    localStorage.removeItem("token")
    window.location.reload()
  }

  useEffect(() => {
    fetcData()
  }, []);

  return (
    <div className="relative max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col pb-[5rem]">
      
      {/* Icon Menu di pojok kanan atas */}
      <div className="absolute top-5 right-5 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-white bg-opacity-10 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="min-h-screen bg-black text-white px-5 py-6 flex flex-col">
      {/* Header */}
      <header className="flex items-center mb-2">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-600 flex-shrink-0">
          <img
            src="https://imgs.search.brave.com/siyYQpK-IqMdlrWG3sgcnPns-oKc8_xVjoeb0Dg70dA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdXNlci1jaXJj/bGUtb3V0bGluZS1n/cmFkaWVudC1zdHls/ZV83ODM3MC03MDM0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
            alt="User Avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-3 flex flex-col">
          <div className="flex items-center gap-1">
            <h1 className="text-xl font-bold tracking-wide">{data?.name}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14a2 2 0 11-4 0 2 2 0 014 0zM14 10a2 2 0 114 0 2 2 0 01-4 0z" />
            </svg>
          </div>
          <p className="text-sm text-gray-400">{data?.username}</p>
        </div>
      </header>

      {/* Garis pemisah */}
      <div className="border-t border-gray-700 my-4"></div>

        {/* Wajib Dibaca Section */}
        <div className="m-[1rem] pt-[0.8rem] bg-[#090909] rounded-md">
          <section className="px-4 flex-1 flex flex-col">
            <div className="flex items-center mb-3">
              <h2 className="font-bold text-lg">Buku mu</h2>
            </div>

            {/* Grid of books */}
            <div className="grid grid-cols-3 gap-3 overflow-y-auto pb-4">
              {data?.books?.map((book) => (
              <a href={`/book/update/${book.id}`}
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
      </div>

      {/* Menu List - Slide from Bottom */}
      <nav className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-[#090909] bg-opacity-90 rounded-t-xl p-5 transition-transform duration-300 z-40 mb-[3rem] ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}>
        {[
          { name: "Riwayat baca mu", href: '/action/histories' },
          { name: "Buku yang anda sukai", badgeClass: 'bg-lime-400 text-black px-2 rounded text-xs',href: '/action/like' },
          { name: "Buku yang anada simpan", href: '/action/save' },
          { name: "Buat buku anda sekarang", href: '/book/add' },
        ].map(({ name, href, badge, badgeClass }, idx) => (
          <a href={href}
            key={idx}
            className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-opacity-10 rounded px-2"
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
          </a>
        ))}
        <div onClick={handleLogout}
            className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-opacity-10 rounded px-2"
          >
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span>Keluar dari akun anda saat ini</span>
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
      </nav>

      <Bar/>
    </div>
  )
}

export default User
