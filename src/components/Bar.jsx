import React from 'react'

const Bar = () => {
    return(
        <>
              <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#090909] border-t border-gray-800 text-gray-400 text-xs font-semibold flex justify-around py-2 select-none z-50">
        <button
          className="flex flex-col items-center flex-1 text-green-400"
          aria-current="page"
          aria-label="Beranda"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0v12"
            />
          </svg>
          Beranda
        </button>
        <button
          className="flex flex-col items-center flex-1 hover:text-green-400"
          aria-label="Pustaka"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16v-4M8 12v-4M12 12v4m0-8v4m4 0v4m0-8v4m-6-4h6a2 2 0 012 2v8a2 2 0 01-2 2h-6a2 2 0 01-2-2v-8a2 2 0 012-2z"
            />
          </svg>
          Pustaka
        </button>
        <button
          className="flex flex-col items-center flex-1 hover:text-green-400"
          aria-label="Saya"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a6 6 0 0112 0v2" />
          </svg>
          Saya
        </button>
      </nav>
        </>
    )
}

export default Bar