import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/Routes.jsx'
import { RouterProvider } from "react-router/dom";
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <>
   <AuthProvider>

    <RouterProvider router={router} />
    <Toaster />
    <ToastContainer></ToastContainer>
   </AuthProvider>
    

  </>,
)
