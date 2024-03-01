import React from 'react';

function Headers() {
  return (
<nav className="navbar">
  <ul className="nav-links flex justify-center items-start h-20 mt-14">
    <li className="inline mx-10">
      <a href="#skills" className="text-white text-2xl transition duration-300 transform hover:text-red-700">Skills</a>
    </li>
    <li className="inline mx-10">
      <a href="#projects" className="text-white text-2xl transition duration-300 transform hover:text-red-700">Projects</a>
    </li>
    <li className="inline mx-10">
      <a href="#aboutme" className="text-white text-2xl transition duration-300 transform hover:text-red-700">About Me</a>
    </li>
    <li className="inline mx-10">
      <a href="#contact" className="text-white text-2xl transition duration-300 transform hover:text-red-700">Contact</a>
    </li>
  </ul>
</nav>

  );
}

export default Headers;
