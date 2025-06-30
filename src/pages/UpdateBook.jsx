import React, { useState } from "react";
import { ImageIcon } from "lucide-react";

const UpdateBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    category: "",
  });

  const [preview, setPreview] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [pageInputs, setPageInputs] = useState({});
  const [currentInput, setCurrentInput] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.image) {
      alert("Semua field wajib diisi!");
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);

    console.log("Form dikirim:", formData);
    console.log("Input per page:", pageInputs);

    setFormData({ title: "", description: "", image: null, category: "" });
    setPreview(null);
    setPageInputs({});
  };

  const openModal = (pageName) => {
    setSelectedPage(pageName);
    setCurrentInput(pageInputs[pageName] || "");
    setShowModal(true);
  };

  const handleModalSubmit = () => {
    setPageInputs({ ...pageInputs, [selectedPage]: currentInput });
    setShowModal(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black text-white min-h-screen">
      <h2 className="text-sm text-gray-400 mb-2">Pages / Update Book</h2>
      <h1 className="text-2xl font-bold mb-6 text-center">Update Buku</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Gambar */}
        <div className="flex flex-col items-center">
          <label htmlFor="image" className="mb-2 font-medium text-center">
            Gambar Sampul
          </label>

          <div className="relative">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 opacity-0 z-10 cursor-pointer"
              required
            />

            <div className="flex items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded cursor-pointer font-semibold shadow hover:bg-lime-300 transition select-none">
              <ImageIcon className="w-4 h-4" />
              <span>Pilih Gambar</span>
            </div>
          </div>

          {formData.image && (
            <p className="mt-2 text-sm text-gray-400">{formData.image.name}</p>
          )}

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 rounded shadow-md w-32 h-44 object-cover"
            />
          )}
        </div>

        {/* Judul */}
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">
            Judul Buku
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-[#090909] text-white focus:outline-none"
            placeholder="Masukkan judul buku"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label htmlFor="description" className="block mb-1 font-medium">
            Deskripsi
          </label>
          <textarea
            name="description"
            id="description"
            required
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-[#090909] text-white focus:outline-none"
            rows="4"
            placeholder="Masukkan deskripsi buku"
          ></textarea>
        </div>

        {/* Kategori */}
        <div>
          <label htmlFor="category" className="block mb-1 font-medium">
            Kategori
          </label>
          <input
            type="text"
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-[#090909] text-white focus:outline-none"
            placeholder="Masukkan kategori buku"
          />
        </div>

        {/* Navigasi Pages */}
        <nav className="bg-[#090909] bg-opacity-90 rounded-xl p-5 space-y-3">
          <h5 className="text-2xl font-bold mb-2 text-center">Pages</h5>
          {Array.from({ length: 12 }, (_, i) => `Page ${i + 1}`).map((page, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-[#070707] hover:bg-opacity-10 rounded px-2"
              onClick={() => openModal(page)}
            >
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span>{page}</span>
                {pageInputs[page] && (
                  <span className="text-xs text-lime-400">✓</span>
                )}
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
            <div
              className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-[#070707] hover:bg-opacity-10 rounded px-2"
              onClick={() => setShowModalAdd(true)}
            >
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span>Add Page</span>
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

        {/* Tombol Simpan */}
        <button
          type="submit"
          className="w-full bg-lime-400 text-black font-bold py-2 rounded hover:bg-lime-300 transition"
        >
          Simpan Buku
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="bg-[#101010] w-full max-w-sm mx-4 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">{selectedPage}</h3>
            <textarea
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Masukkan isi untuk halaman ini..."
            rows={6}
            className="w-full px-3 py-2 mb-4 rounded bg-[#151515] text-white focus:outline-none resize-none"
            />
            <div className="flex justify-between gap-2">
              <button
                onClick={handleModalSubmit}
                className="flex-1 bg-lime-400 text-black font-semibold py-2 rounded hover:bg-lime-300 transition"
              >
                Submit
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-600 text-white font-semibold py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}


    {/* Modal Add Page*/}
      {showModalAdd && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="bg-[#101010] w-full max-w-sm mx-4 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">Add Page</h3>
            <textarea
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Masukkan isi untuk halaman ini..."
            rows={6}
            className="w-full px-3 py-2 mb-4 rounded bg-[#151515] text-white focus:outline-none resize-none"
            />
            <div className="flex justify-between gap-2">
              <button
                onClick={handleModalSubmit}
                className="flex-1 bg-lime-400 text-black font-semibold py-2 rounded hover:bg-lime-300 transition"
              >
                Submit
              </button>
              <button
                onClick={() => setShowModalAdd(false)}
                className="flex-1 bg-gray-600 text-white font-semibold py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateBook;
