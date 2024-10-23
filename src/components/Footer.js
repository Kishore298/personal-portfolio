import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p className="pb-2">Designed and Developed by KISHORE</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/kishore298"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 text-lg hover:underline transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kishore-k-63b4aa250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 text-lg hover:underline transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/k_i_s_h_o_r_e_02_09_08?igsh=MTlwZzg4Mm5lcXB1aA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 text-lg hover:underline transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
