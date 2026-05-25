import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App