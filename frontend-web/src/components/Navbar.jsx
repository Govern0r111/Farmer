import React from 'react';

const Navbar = () => {
  return (
    <nav className="#FFFFFF text-gray-700 px-60 py-3 flex justify-between items-center shadow sticky top-0 z-50">
      <div className="font-bold text-xl ">KisanSetu</div>
      <ul className="flex gap-6">
        <li><a href="/" className="hover:underline">Dashboard</a></li>
        <li><a href="/marketplace" className="hover:underline">Marketplace</a></li>
        <li><a href="/cooperative" className="hover:underline">Cooperative</a></li>
        <li><a href="/analytics" className="hover:underline">Analytics</a></li>
        <li><a href="/login" className="hover:underline">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
