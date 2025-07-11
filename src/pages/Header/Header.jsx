import React from 'react';
import img from '../../../src/assets/ace.png'
import { useState } from 'react'; 

// const Header = () => {
//   return (
//     <header className="bg-gray-100 py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-8">
//           {/* Navigation Links */}
//           <nav className="flex space-x-4">
//             <a href="#" className="text-black hover:text-blue-500">Features</a>
//             <a href="#" className="text-black hover:text-blue-500">Solutions</a>
//             <a href="#" className="text-black hover:text-blue-500">Resources</a>
//             <a href="#" className="text-black hover:text-blue-500">Pricing</a>
//           </nav>
//           {/* Brand Logo */}
//           <div className="font-bold text-xl">
//             <span className="text-yellow-500">Ace</span>
//             <span className="text-blue-500">Carts</span>
//           </div>
//         </div>
        
//         <div className="flex items-center space-x-4">
//           {/* Sign Up and Sign In Buttons */}
//           <a href="signUp" className="text-black hover:text-blue-500">Sign up</a>
//           <a href="login" className="text-black hover:text-blue-500">Sign in</a>
//           {/* Cart Icon */}
//           {/* <div className="relative">
//             <button className="bg-black text-white rounded-full p-2 flex items-center">
//               <svg xmlns="../" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.2 9H5.2L3 3z" />
//               </svg>
//               <span className="absolute -top-1 -right-2 bg-red-500 rounded-full text-xs text-white px-1">0</span>
//             </button>
//           </div> */}
//           <div className="relative">
//   <button className="bg-white text-white rounded-full p-2 flex items-center">
//     <img
//       src={img} // adjust the path based on your file
//       alt="cart"
//       className="h-5 w-5"
//     />
//     <span className="absolute -top-1 -right-2 bg-red-500 rounded-full text-xs text-white px-1">
//       0
//     </span>
//   </button>
// </div>


//         </div>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 sticky top-0 z-50 shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="font-bold text-xl">
          <span className="text-yellow-500">Ace</span>
          <span className="text-blue-500">Carts</span>
        </div>

        {/* Hamburger (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Nav Menu - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-black hover:text-blue-500">Features</a>
          <a href="#" className="text-black hover:text-blue-500">Solutions</a>
          <a href="#" className="text-black hover:text-blue-500">Resources</a>
          <a href="#" className="text-black hover:text-blue-500">Pricing</a>
          <a href="signUp" className="text-black hover:text-blue-500">Sign up</a>
          <a href="login" className="text-black hover:text-blue-500">Sign in</a>

          {/* Cart Icon */}
          <div className="relative">
            <button className="bg-white text-white rounded-full p-2 flex items-center">
              <img src={img} alt="cart" className="h-5 w-5" />
              <span className="absolute -top-1 -right-2 bg-red-500 rounded-full text-xs text-white px-1">
                0
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Nav Menu - Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="text-black hover:text-blue-500">Features</a>
            <a href="#" className="text-black hover:text-blue-500">Solutions</a>
            <a href="#" className="text-black hover:text-blue-500">Resources</a>
            <a href="#" className="text-black hover:text-blue-500">Pricing</a>
            <a href="signUp" className="text-black hover:text-blue-500">Sign up</a>
            <a href="login" className="text-black hover:text-blue-500">Sign in</a>

            {/* Cart Icon */}
            <div className="relative mt-2">
              <button className="bg-white text-white rounded-full p-2 flex items-center">
                <img src={img} alt="cart" className="h-5 w-5" />
                <span className="absolute -top-1 -right-2 bg-red-500 rounded-full text-xs text-white px-1">
                  0
                </span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};



export default Header;