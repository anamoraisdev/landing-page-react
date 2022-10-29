import React, { useState } from 'react';
import NavbarLink from './navbarLink';
import { GoGrabber } from 'react-icons/go';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const items = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Description',
      link: '#description',
    },
    {
      name: 'Product',
      link: '#product',
    },
  ];

  const openMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  };

  return (
    <div className='h-[100px] bg-black justify-between flex items-center px-8 py-4'>
      <img src='./apartments.png' alt='logo' className='h-full' />
      <div className='gap-4 hidden md:flex'>
        {items.map((item) => (
          <NavbarLink name={item.name} link={item.link} />
        ))}
      </div>
      <div className='md:hidden'>
        <button onClick={() => openMobileMenu()}>
          <GoGrabber className='text-white h-[50px]' />
        </button>
      </div>
      <div
        className={`${
          mobileMenu ? 'right-[-210px] hidden' : 'right-0'
        } flex md:hidden absolute border-4 border-black top-[100px] z-30`}
      >
        <div className='w-[200px] flex flex-col gap-y-4 bg-black text-center'>
          {items.map((item) => (
            <NavbarLink name={item.name} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
