import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import MenuPage from './pages/MenuPage/MenuPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx'
import OrderPage from './pages/OrderPage/OrderPage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx'
import AccountPage from './pages/AccountPage/AccountPage.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import AuthProvider from './context/AuthContext.jsx'
import './styles/_globals.scss'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/menu', element: <MenuPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/contacts', element: <ContactsPage /> },
  { path: '/order', element: <ProtectedRoute><OrderPage /></ProtectedRoute> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/account', element: <ProtectedRoute><AccountPage /></ProtectedRoute> },
])

const root = createRoot(document.getElementById('root'))
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
