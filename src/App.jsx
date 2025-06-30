import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sign from './pages/Sign'
import Home from './pages/Home'
import Search from './pages/Search'
import User from './pages/User'

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
  ])

  return (
    <> 
    <RouterProvider router={router}/>
    </>
  )
}

export default App
