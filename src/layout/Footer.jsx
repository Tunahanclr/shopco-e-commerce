import React from 'react'

export default function Footer() {
  return (
<footer className="bg-gray-200 py-6 relative bottom-0 top-20 w-full">
  <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-0">
    <div className="flex items-center mb-4 sm:mb-0">

      <h1 className="text-black font-bold text-xl sm:text-2xl">SHOP.CO</h1>
    </div>
    <ul className="flex flex-wrap sm:flex-nowrap space-y-2 sm:space-y-0 sm:space-x-4">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/urunler">Products</a>
      </li>
      <li>
        <a href="/hakkimizda">About</a>
      </li>
      <li>
        <a href="/iletisim">Contact </a>
      </li>
    </ul>
  </div>
</footer>
  )
}
