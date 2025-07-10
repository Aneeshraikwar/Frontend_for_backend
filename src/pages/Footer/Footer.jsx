// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-6">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center">
//         <p className="text-sm text-center md:text-left">
//           &copy; {new Date().getFullYear()} AR Foundation. All rights reserved.
//         </p>

//         <div className="flex gap-6">
//           <a href="#" className="hover:text-blue-400 transition-colors">
//             <FontAwesomeIcon icon={faFacebook} size="lg" />
//           </a>
//           <a href="#" className="hover:text-sky-400 transition-colors">
//             <FontAwesomeIcon icon={faTwitter} size="lg" />
//           </a>
//           <a href="#" className="hover:text-pink-400 transition-colors">
//             <FontAwesomeIcon icon={faInstagram} size="lg" />
//           </a>
//           <a href="#" className="hover:text-gray-400 transition-colors">
//             <FontAwesomeIcon icon={faGithub} size="lg" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }



import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Aneesh Raikwar. All rights reserved.
            </p>
              {/* <p className="text-xs mt-1">
                Built with React and Tailwind CSS.
              </p> */}
          </div>
 
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Aneeshraikwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.701-2.722.593-3.29-1.31-3.29-1.31-.444-1.123-1.09-1.424-1.09-1.424-.892-.604.07-.593.07-.593.987.07 1.503 1.01 1.503 1.01.874 1.494 2.28 1.066 2.83.815.09-.637.345-1.066.622-1.312-2.176-.248-4.463-1.084-4.463-4.837 0-1.066.381-1.937 1.001-2.617-.1-.248-.433-1.234.09-2.571 0 0 .815-.262 2.656 1.005.77-.214 1.58-.322 2.39-.322.81 0 1.62.108 2.39.322 1.84-1.267 2.654-1.005 2.654-1.005.523 1.337.19 2.323.09 2.571.62.68 1.002 1.551 1.002 2.617 0 3.76-2.29 4.585-4.472 4.83-.359.31-.678.92-.678 1.855 0 1.312.012 2.36.012 2.683 0 .267.179.577.688.48C19.137 20.19 22 16.436 22 12.017 22 6.484 17.523 2 12 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aneesh-raikwar-336b99223/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.792v.05c0 4.475 3.197 8.13 7.46 8.944a4.07 4.07 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.008a11.627 11.627 0 006.29 2.243"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
