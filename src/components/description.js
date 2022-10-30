import React from 'react';

const Description = () => {
  return (
    <div className='p-12 text-center relative bg-no-repeat bg-cover bg-bottom rounded-lg h-[600px] bg-[url("https://i0.wp.com/anautrilla.com/wp-content/uploads/2017/08/dise%C3%B1o-interiores-peque%C3%B1o-apartamento-estilo-industrial-masculino-anautrilla.jpg?fit=1600%2C1077&ssl=1")]'>
      <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'>
        <div className='flex justify-center items-center h-full'>
          <div className='text-white flex flex-col h-full justify-end pb-[50px]'>
            <a
              className='z-30 inline-block px-[40px] py-[20px] mb-1 bg-black opacity-[40%] text-white border-2 border-black text-sm leading-snug uppercase font-bold shadow-xl hover:scale-125 rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              href='#!'
              role='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
