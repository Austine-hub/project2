import React from 'react';

const Header = () => {
  const toggleTheme = () => {
    // Theme toggle functionality would be implemented here
    console.log('Theme toggled');
  };

  const handleSearch = () => {
    const searchInput = document.getElementById('searchInput');
    console.log('Search:', searchInput?.value);
  };

  return (
    <header role="banner" className="w-full">
      {/* Skip Link */}
      <a 
        href="#main-content" 
        className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden focus:left-0 focus:w-auto focus:h-auto focus:bg-blue-600 focus:text-white focus:p-2 focus:z-50"
        style={{position:'absolute', left:'-9999px', top:'auto', width:'1px', height:'1px', overflow:'hidden'}}
      >
        Skip to main content
      </a>

      {/* TopBar */}
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <img 
          src="photos/logo1.png" 
          alt="AjanjaCare Pharmaceuticals logo" 
          className="h-12 w-auto"
        />
        <h1 className="text-2xl font-bold text-center flex-1 mx-4">
          AjanjaCare Pharmaceuticals AFRICA
        </h1>
        <button 
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Toggle Theme
        </button>
        <img 
          src="photos/logo1.png" 
          alt="AjanjaCare Pharmaceuticals logo" 
          className="h-12 w-auto ml-4"
        />
      </div>

      {/* Navbar */}
      <nav role="navigation" aria-label="Main site navigation" className="bg-gray-100 border-b">
        <ul className="flex justify-center space-x-8 py-3">
          <li>
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Branches
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Our Experts
            </a>
          </li>
        </ul>
      </nav>

      {/* Banner */}
      <div className="relative bg-gradient-to-r from-blue-50 to-green-50 py-8" role="region" aria-label="Promotional Banner">
        {/* Search Container */}
        <div className="flex justify-center mb-6" role="search">
          <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
            <input 
              type="text" 
              placeholder="Search..." 
              id="searchInput" 
              aria-label="Search this site"
              className="px-6 py-3 w-80 outline-none text-gray-700"
            />
            <button 
              id="searchBtn" 
              aria-label="Submit search"
              onClick={handleSearch}
              className="px-4 py-3 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Banner Sub-section */}
        <div className="flex items-center justify-between max-w-6xl mx-auto px-6">
          <img 
            src="photos/banner1.png" 
            alt="Smiling pharmacist with a client" 
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          
          <div className="text-center max-w-2xl" role="presentation">
            <p className="text-2xl font-semibold text-gray-800 mb-3">
              Your Trusted Partner in Health &amp; Wellness.
            </p>
            <p className="text-xl text-gray-700 mb-3">
              Serving You, Beyond the Counter.
            </p>
            <p className="text-xl text-gray-700">
              Because Your Health Is Our Priority.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;