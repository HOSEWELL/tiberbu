import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer id='contacts' className="bg-gradient-to-br from-blue-50 to-blue-200 text-gray-900 py-8 mt-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-2 w-1/3">
            <p className="text-lg">Call us at : <a href="tel:+254115408139" className="text-blue-400 hover:underline">+2541408139</a></p>

            <p className="text-lg">Email us at : <a href="mailto:tiberbu@gmail.com" className="text-blue-400 hover:underline">tiberbu@gmail.com</a></p>
          </div>

          {/* Media Section */}
          <div className="flex flex-col items-start space-y-4 w-1/3">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-400 flex items-center space-x-2">
              <FaInstagram size={24} /> <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-400 flex items-center space-x-2">
              <FaFacebookF size={24} /> <span>Facebook</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-400 flex items-center space-x-2">
              <FaLinkedinIn size={24} /> <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-400 flex items-center space-x-2">
              <FaTwitter size={24} /> <span>Twitter</span>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="text-center text-sm">
          <p> Copyright &copy; {new Date().getFullYear()} Tiberbu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
