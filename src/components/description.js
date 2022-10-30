import React from 'react';

const Description = () => {
  return (
    <div className='p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg h-[600px] bg-[url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")]'>
      <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'>
        <div className='flex justify-center items-center h-full'>
          <div className='text-white'>
            <h2 className='font-semibold text-4xl mb-4 text-black shadow-2xl'>
              Product Name
            </h2>
            <h4 className='font-semibold text-xl mb-6 text-black shadow-2xl'>
              Product description
            </h4>
            <a
              className='z-30 inline-block px-7 py-3 mb-1 bg-gray-500 border-2 border-black text-black text-sm leading-snug uppercase font-bold shadow-xl hover:scale-125 rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              href='#!'
              role='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
            >
              Call to action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
