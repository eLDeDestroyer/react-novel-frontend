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
import ActionBook from './pages/action/ActionBook'
import ReadPage from './pages/ReadPage'
import AddBook from './pages/AddBook'
import UpdateBook from './pages/UpdateBook'

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
      path:"/book",
      element: <Book/>
    },
    {
      path:"/action/:action",
      element: <ActionBook/>
    },
    {
      path:"/page",
      element: <ReadPage/>
    },
    {
      path:"/book/add",
      element: <AddBook/>
    },
    {
      path:"/book/update",
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
