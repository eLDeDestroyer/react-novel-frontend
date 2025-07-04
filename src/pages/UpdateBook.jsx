import React, { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const UpdateBook = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [data, setData] = useState({});
  const [pageInputs, setPageInputs] = useState({});
  const [selectedPage, setSelectedPage] = useState(null);
  const [currentInput, setCurrentInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/auth/book/detail/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(res.data.data);
      setFormData({
        title: res.data.data.title,
        description: res.data.data.description,
        image: null,
      });
    } catch (error) {
      console.error("Gagal ambil data buku", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = new FormData();
    sendData.append("title", formData.title);
    sendData.append("description", formData.description);
    if (formData.image) sendData.append("image", formData.image);

    try {
      await axios.patch(`${apiUrl}/api/auth/book/update/${id}`, sendData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Buku berhasil diupdate");
      navigate("/user")
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Gagal update buku");
    }
  };

  const handleSubmitPage = async () => {
                  try {
                    if (showModal) {
                      await axios.patch(`${apiUrl}/api/auth/book/page/update`, {
                        book_id: Number(id),
                        page: Number(selectedPage),
                        text: currentInput,
                      }, {
                        headers: { Authorization: `Bearer ${token}` },
                      });
                      alert(`Page ${selectedPage} berhasil diupdate`);
                    }

                    if (showModalAdd) {
                      await axios.post(`${apiUrl}/api/auth/book/page/add`, {
                        book_id: Number(id),
                        text: currentInput,
                      }, {
                        headers: { Authorization: `Bearer ${token}` },
                      });
                      alert(`Page ${selectedPage} berhasil ditambahkan`);
                    }

                    setShowModal(false);
                    setShowModalAdd(false);
                    fetchData();
                  } catch (err) {
                    console.error("Gagal submit halaman:", err);
                    alert("Gagal menyimpan halaman.");
                  }
          }

    const handleDeleteBook = async() => {
      await axios.delete(`${apiUrl}/api/auth/book/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })


      alert("success delete book")
      navigate("/user")
  }

  const openModal = (pageNum) => {
    setSelectedPage(pageNum);
    const selectedText = data.pages?.find((p) => p.page === pageNum)?.text || "";
    setCurrentInput(selectedText);
    setShowModal(true);
  };

  const openModalAdd = () => {
    const nextPage = (data.pages?.length || 0) + 1;
    setSelectedPage(nextPage);
    setCurrentInput("");
    setShowModalAdd(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black text-white min-h-screen">
      <h2 className="text-sm text-gray-400 mb-2">Pages / Update Book</h2>
      <h1 className="text-2xl font-bold mb-6 text-center">Update Buku</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Gambar */}
        <div className="flex flex-col items-center">
          <label htmlFor="image" className="mb-2 font-medium text-center">Gambar Sampul</label>
          <div className="relative">
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 opacity-0 z-10 cursor-pointer"
            />
            <div className="flex items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded cursor-pointer font-semibold shadow hover:bg-lime-300 transition select-none">
              <ImageIcon className="w-4 h-4" />
              <span>Pilih Gambar</span>
            </div>
          </div>
          {preview && (
            <img src={preview} alt="Preview" className="mt-3 rounded shadow-md w-32 h-44 object-cover" />
          )}
          {!preview && data.image_path && (
            <img src={`${apiUrl}/${data.image_path}`} alt="Preview" className="mt-3 rounded shadow-md w-32 h-44 object-cover" />
          )}
        </div>

        {/* Judul */}
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">Judul Buku</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded bg-[#090909] text-white focus:outline-none"
          />
        </div>

        {/* Deskripsi */}
        <div>
          <label htmlFor="description" className="block mb-1 font-medium">Deskripsi</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 rounded bg-[#090909] text-white focus:outline-none"
          />
        </div>

        {/* Navigasi Pages */}
        <nav className="bg-[#090909] bg-opacity-90 rounded-xl p-5 space-y-3">
          <h5 className="text-2xl font-bold mb-2 text-center">Pages</h5>
          {data.pages?.map((page) => (
            <div
              key={page.page}
              onClick={() => openModal(page.page)}
              className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-[#070707] hover:bg-opacity-10 rounded px-2"
            >
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span>{`Bab ${page.page}`}</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          ))}
          <div
            onClick={openModalAdd}
            className="flex items-center justify-between border-b border-gray-700 last:border-none py-3 cursor-pointer hover:bg-[#070707] hover:bg-opacity-10 rounded px-2"
          >
            <div className="flex items-center gap-3 text-sm font-semibold">
              <span>Add Page</span>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </nav>

        {/* Tombol Simpan Buku */}
        <button type="submit" className="w-full bg-lime-400 text-black font-bold py-2 rounded hover:bg-lime-300 transition">
          Simpan Buku
        </button>
      </form>
        <button onClick={handleDeleteBook} className="w-full bg-red-700 mt-2 text-black font-bold py-2 rounded hover:bg-lime-300 transition">
          Hapus Buku
        </button>

      {/* Modal Edit / Add Page */}
      {(showModal || showModalAdd) && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="bg-[#101010] w-full max-w-sm mx-4 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">
              {showModal ? `Edit Page ${selectedPage}` : `Add Page ${selectedPage}`}
            </h3>

            <textarea
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Masukkan isi untuk halaman ini..."
              rows={6}
              className="w-full px-3 py-2 mb-4 rounded bg-[#151515] text-white focus:outline-none resize-none scrollbar-dark"
            />

            <div className="flex justify-between gap-2">
              <button
                onClick={handleSubmitPage}
                className="flex-1 bg-lime-400 text-black font-semibold py-2 rounded hover:bg-lime-300 transition"
              >
                Simpan
              </button>

              <button
                onClick={() => {
                  setShowModal(false);
                  setShowModalAdd(false);
                }}
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
