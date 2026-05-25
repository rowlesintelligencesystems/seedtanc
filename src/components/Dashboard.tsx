import { useState } from 'react'

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Products</h2>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Listings</h2>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-purple-600">$0</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard