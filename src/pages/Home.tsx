import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import Dashboard from '@/components/Dashboard'

function Home() {
  const handleLogout = async () => {
    await signOut(auth)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">🌱 Seed Tanc</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </nav>
      <Dashboard />
    </div>
  )
}

export default Home