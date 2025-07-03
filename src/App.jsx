import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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

function App() {
  const router = createBrowserRouter([
    {
      path:"/sign",
      element: <Sign/>,
    },
    {
      path:"/home",
      element: <Home/>
    },
    {
      path:"/search",
      element: <Search/>
    },
    {
      path:"/user",
      element: <User/>
    },
    {
      path:"/book/:id",
      element: <Book/>
    },
    {
      path:"/action/save",
      element: <ActionBookSave/>
    },
    {
      path:"/action/like",
      element: <ActionBookLike/>
    },
    {
      path:"/action/histories",
      element: <ActionBookHistories/>
    },
    {
      path:"/page/:book_id/:page_id",
      element: <ReadPage/>
    },
    {
      path:"/book/add",
      element: <AddBook/>
    },
    {
      path:"/book/update/:id",
      element: <UpdateBook/>
    },
  ])

  return (
    <> 
    <RouterProvider router={router}/>
    </>
  )
}

export default App
