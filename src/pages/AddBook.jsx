import React, { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;


const AddBook = () => {
  const token = localStorage.getItem("token")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    page: ""
  });
  const [preview, setPreview] = useState(null);
  const [data,setData] = useState()
  const [category,setCategory] = useState()
  const navigate = useNavigate()



  const fetchData = async() => {
      const res = await axios.get(`${apiUrl}/api/auth/categories`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res.data.data)
      setData(res.data.data)
  }

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

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.title || !formData.description || !formData.image) {
    alert("Semua field wajib diisi!");
    return;
  }

  const data = new FormData();
  data.append("title", formData.title);
  data.append("description", formData.description);
  data.append("image", formData.image);

  try {
    const res = await axios.post(`${apiUrl}/api/auth/book/add`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    handleAddBookCategory(res.data.data); 
  } catch (err) {
    console.error("Gagal menambahkan buku:", err);
    alert("Gagal menambahkan buku!");
  }
};

const handleAddBookCategory = async (bookId) => {
  try {
    await axios.post(
      `${apiUrl}/api/auth/book/categories/add`,
      {
        book_id: bookId,
        category_id: [parseInt(category)],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    handleAddBookPage(bookId)
  } catch (err) {
    console.error("Gagal menyimpan kategori:", err);
    alert("Kategori gagal ditambahkan!");
  }
};

const handleAddBookPage = async (bookId) => {
  try {
    await axios.post(
      `${apiUrl}/api/auth/book/page/add`,
      {
        book_id: bookId,
        text: formData.page,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("Buku berhasil disimpan!");
    navigate("/user")
  } catch (err) {
    console.error("Gagal menyimpan kategori:", err);
    alert("Kategori gagal ditambahkan!");
  }
};



  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="max-w-md mx-auto p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Tambah Buku</h1>

<form onSubmit={handleSubmit} className="space-y-5">
  {/* Gambar di tengah atas */}
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

  {/* Tampilkan nama file jika ada */}
  {formData.image && (
    <p className="mt-2 text-sm text-gray-400">{formData.image.name}</p>
  )}

  {/* Preview gambar */}
  {preview && (
    <img
      src={preview}
      alt="Preview"
      className="mt-3 rounded shadow-md w-32 h-44 object-cover"
    />
  )}
</div>


  {/* Title */}
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
      className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
      placeholder="Masukkan judul buku"
    />
  </div>

  {/* Description */}
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
        className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
        rows="4"
        placeholder="Masukkan deskripsi buku"
        ></textarea>
    </div>


    {/* Bab 1 */}
    <div>
        <label htmlFor="page" className="block mb-1 font-medium">
        Bab 1
        </label>
        <textarea
        name="page"
        id="page"
        required
        value={formData.page}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
        rows="4"
        placeholder="Masukan cerita untuk memulai"
        ></textarea>
    </div>

    

  {/* Category */}
    <div>
    <label htmlFor="category" className="block mb-1 font-medium">
        Kategori
    </label>
    <select
        name="category"
        id="category"
        required
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
    >
        <option value="" disabled>
        Pilih kategori
        </option>
        {
          data?.map((item) => (
            <>
              <option value={item.id}>{item.category}</option>
            </>
          ))
        }
    </select>
    </div>


  {/* Tombol submit */}
  <button
    type="submit"
    className="w-full bg-lime-400 text-black font-bold py-2 rounded hover:bg-lime-300 transition"
  >
    Simpan Buku
  </button>
</form>

    </div>
  );
};

export default AddBook;
