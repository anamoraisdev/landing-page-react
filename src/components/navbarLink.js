import React from 'react';

const NavbarLink = ({ name, link }) => {
  return (
    <a className='text-white text-2xl font-bold hover:scale-105' href={link}>
      {name}
    </a>
  );
};

export default NavbarLink;
