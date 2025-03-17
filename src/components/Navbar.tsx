import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <ul style={{display:"flex",gap:"20px"}}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/service">Service</Link>
        <Link href="/studentlist">Student List</Link>
      </ul>
    </div>
  )
}

export default Navbar
