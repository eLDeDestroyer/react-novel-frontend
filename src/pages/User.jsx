import React from 'react'
const books = [
  {
    id: 1,
    title: "Aaron Bebas dari Penjara",
    subtitle: "Balas Dendam",
    cover: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f4b5f511-640e-4fab-b0c5-2649be01a838.png",
    views: "629.3K",
  },
  {
    id: 2,
    title: "Dokter Ajaib Calvin Hendra",
    subtitle: "Dokter",
    cover: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec222f7f-d733-4246-bafa-ab03ae4523ea.png",
    views: "1.0M",
  },
  {
    id: 3,
    title: "Kebangkitan Dewa",
    subtitle: "Dewa",
    cover: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/79a83586-acbb-46e9-86da-ba4e9e982275.png",
    views: "1.8M",
  },
  {
    id: 4,
    title: "Jiwa Bela Diri yang Tak Terkalahkan",
    subtitle: "Bela Diri",
    cover: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e0e07b92-b84a-4416-be78-ed201c901f30.png",
    views: "1.0M",
  },
  {
    id: 5,
    title: "Aku Adalah Dewa Pedang!",
    subtitle: "Pedang",
    cover: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df9eb7df-18b9-42b9-8b62-7f555db5e94f.png",
    views: "938.8K",
  },
  {
    id: 6,
    title: "Prajurit Amnesia",
    subtitle: "Dewa Perang",
    cover: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6b94ad79-2385-4ae5-8eea-89a8cd63da61.png",
    views: "514.0K",
  },
];

const User = () => {
  
  return (
    <div className="max-w-md mx-auto bg-black min-h-screen text-white font-sans flex flex-col pb-[5rem]">
      <div className="min-h-screen bg-black text-white px-5 py-6 flex flex-col">
        {/* Header */}
        <header className="flex items-center mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-600 flex-shrink-0">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/711a3ee4-5951-40cb-a2a2-74ea8fa4a4f8.png"
              alt="Football PES2020 gaming logo with purple and pink diagonal stripes"
              className="object-cover w-full h-full"
              onError={(e)=>{e.target.onerror=null; e.target.src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/450c8f2a-0c37-4fe6-9bed-b0c7f7e37146.png"}}
            />
          </div>
          <h1 className="ml-3 text-2xl font-extrabold tracking-wider flex items-center gap-1">
            elgangsing
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
          </h1>
        </header>

              {/* Wajib Dibaca Section */}
      <div className="m-[1rem] pt-[0.8rem] bg-[#090909] rounded-md">
        <section className="px-4 flex-1 flex flex-col">
          <div className="flex items-center mb-3">
            <h2 className="font-bold text-lg">Wajib Dibaca</h2>
            <span className="ml-auto text-gray-600 font-semibold uppercase text-xs select-none">
            
            </span>
          </div>

          {/* Grid of books */}
          <div className="grid grid-cols-3 gap-3 overflow-y-auto pb-4">
            {books.map((book) => (
              <article
                key={book.id}
                className=" rounded-md shadow-inner shadow-black/50 overflow-hidden cursor-pointer hover:shadow-gray-900 transition"
                tabIndex={0}
                aria-label={`${book.title}, genre ${book.subtitle}, ${book.views} views`}
              >
                <div className="relative">
                  <img
                    src={book.cover}
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
                    <span>{book.views}</span>
                  </div>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-semibold truncate" title={book.title}>
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">{book.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

        {/* Menu List */}
        <nav className="bg-black bg-opacity-90 rounded-xl p-5 flex-grow">
          {[
            { name: "Pusat Penulis", icon: 'user', badge: null, badgeClass: '' },
            { name: "Pusat Event", icon: 'gift', badge: 'Koin gratis', badgeClass: 'bg-lime-400 text-black px-2 rounded text-xs' },
            { name: "Kupon Bacaku", icon: 'book', badge: null, badgeClass: '' },
            { name: "Pesan Saya", icon: 'bell', badge: '3', badgeClass: 'bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs' },
            { name: "Yang Saya Posting", icon: 'document', badge: null, badgeClass: '' },
            { name: "Umpan Balik", icon: 'pencil', badge: null, badgeClass: '' },
            { name: "Pengaturan", icon: 'settings', badge: null, badgeClass: '' },
          ].map(({ name, icon, badge, badgeClass }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded px-2"
            >
              <div className="flex items-center gap-3 text-sm font-semibold">
                {icon === 'user' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                    <path d="M12 14c-4 0-7 2-7 6v1h14v-1c0-4-3-6-7-6z" />
                  </svg>
                )}
                {icon === 'gift' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7" />
                    <path d="M12 12V3m-7 9h14" />
                    <path d="M9 7l3 3 3-3" />
                  </svg>
                )}
                {icon === 'book' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7h20M2 17h20" />
                  </svg>
                )}
                {icon === 'bell' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                  </svg>
                )}
                {icon === 'document' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12h6M9 16h6M4 6h16v14H4z" />
                  </svg>
                )}
                {icon === 'pencil' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                )}
                {icon === 'settings' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.7 1.7 0 00.1 1.9l-1.4 1.4a1.7 1.7 0 01-2.4 0l-1.5-1.5a1.7 1.7 0 00-1.9-.1l-2 2a1.7 1.7 0 01-2.4 0l-1.4-1.4a1.7 1.7 0 010-2.4l2-2a1.7 1.7 0 00.1-1.9L5 8.5a1.7 1.7 0 010-2.4l1.4-1.4a1.7 1.7 0 012.4 0l1.5 1.5a1.7 1.7 0 001.9.1l2-2a1.7 1.7 0 012.4 0l1.4 1.4a1.7 1.7 0 010 2.4l-2 2z" />
                  </svg>
                )}
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
      </div>
    </div>
  )
}

export default User

