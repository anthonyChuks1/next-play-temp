import React from 'react'

const NavBar = () => {
  return (
   
      <nav className="flex justify-between items-center bg-gray-800 ">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/dashboard/analytics">Analytics</a>
        <a href="/dashboard/users">Users</a>
        <a href="/books">Books</a>
        <a href= "/about">About</a>
        <a>≡</a>
      </nav>
      
   
  )
}

export default NavBar
