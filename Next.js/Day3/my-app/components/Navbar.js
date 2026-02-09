import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="bg-gray-800 p-4">
            <h1 className="text-white text-xl font-bold">My Navbar</h1>
        </div>
        <ul className="flex space-x-4">
            <Link href="/" className="p-2">Home</Link>
            <Link href="/about" className="p-2">About</Link>
            <Link href="/contact" className="p-2">Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar
