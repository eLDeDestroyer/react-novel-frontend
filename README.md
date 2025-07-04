# 📖 E-Novel Frontend (React + Vite + Tailwind)

A modern and responsive frontend for the **E-Novel API** built using **React**, **Vite**, and **Tailwind CSS**.  

---

## 🚀 Tech Stack

- **React** — UI library
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first CSS framework
- **Axios** — HTTP client to connect with API
- **React Router DOM** — For routing
- **LocalStorage** — For storing JWT tokens

---

## 📦 Features

- 🔐 JWT-based Login & Register
- 📚 Book Listing with Pagination
- 🔍 Search by Book Title & Category
- ❤️ Book Actions (Like, Read Page, Seen)
- 📁 Category Filtering
- 👤 User Session & Authenticated Routes

---

## 🔗 API Integration

This frontend uses the following API:  
👉 **[E-Novel Golang API](https://github.com/eLDeDestroyer/golang-novel-api)**

To connect, configure your `.env` file:

```env
VITE_API_URL=http://localhost:8000
