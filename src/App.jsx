import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Sign from './pages/Sign'
import Home from './pages/Home'
import Search from './pages/Search'
import User from './pages/User'
import Book from './pages/Book'
import ActionBookSave from './pages/action/ActionBookSave'
import ReadPage from './pages/ReadPage'
import AddBook from './pages/AddBook'
import UpdateBook from './pages/UpdateBook'
import ActionBookLike from './pages/action/ActionBookLike'
import ActionBookHistories from './pages/action/ActionBookHistory'
import NotFound from './pages/NotFound'

function App() {
  const token = localStorage.getItem("token")

  const router = createBrowserRouter([
    {
      path: "/sign",
      element: token ? <Navigate to="/home" /> : <Sign />,
    },
    {
      path: "/home",
      element: token ? <Home /> : <Navigate to="/sign" />,
    },
    {
      path: "/search",
      element: token ? <Search /> : <Navigate to="/sign" />,
    },
    {
      path: "/user",
      element: token ? <User /> : <Navigate to="/sign" />,
    },
    {
      path: "/book/:id",
      element: token ? <Book /> : <Navigate to="/sign" />,
    },
    {
      path: "/action/save",
      element: token ? <ActionBookSave /> : <Navigate to="/sign" />,
    },
    {
      path: "/action/like",
      element: token ? <ActionBookLike /> : <Navigate to="/sign" />,
    },
    {
      path: "/action/histories",
      element: token ? <ActionBookHistories /> : <Navigate to="/sign" />,
    },
    {
      path: "/page/:book_id/:page_id",
      element: token ? <ReadPage /> : <Navigate to="/sign" />,
    },
    {
      path: "/book/add",
      element: token ? <AddBook /> : <Navigate to="/sign" />,
    },
    {
      path: "/book/update/:id",
      element: token ? <UpdateBook /> : <Navigate to="/sign" />,
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
