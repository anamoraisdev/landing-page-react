import React from 'react';

const NavbarLink = ({ name, link }) => {
  return (
    <a
      className='text-white text-2xl font-bold hover:scale-110 transition duration-400 ease-linear'
      href={link}
    >
      {name}
    </a>
  );
};

export default NavbarLink;
