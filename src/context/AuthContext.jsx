import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)
export const useAuth = () => useContext(AuthContext)

const STORAGE_KEY = 'cm-auth'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = (email) => {
    const u = { email }
    setUser(u)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
  }
  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
