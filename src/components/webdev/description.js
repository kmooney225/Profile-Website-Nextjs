import React from 'react';

const Description = () => {
  return (
    <div className='h-auto bg-gradient-to-b from-black via-gray-900 to-black bg-fixed z-[2] object-cover'>
      {/* First Section */}
      <div className='p-12 flex flex-col items-center justify-center'>
        <div className='p-4 rounded-md bg-red-600 text-white w-full h-auto md:w-[70%] lg:w-[40%]'>
          <h2 className='flex items-center justify-center mb-6 text-6xl font-sacramento'>
            Curious?
          </h2>
          <img
            src={'./glance.jpg'}
            alt='Glance'
            className='bg-gray-300 rounded-md p-2 items-center justify-center w-full'
          />
          <p className='text-md m-4'>
            Are you looking to create a new business or land that next exciting job?
            Maybe you need to revise some old catalogs for your restaurant, or rejuvenate
            your digital portfolio? I know the challenge of making your mark on this world,
            and I am here to give you assistance!
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className='p-12 flex flex-col items-center justify-center'>
        <div className='p-4 rounded-md bg-red-600 text-white w-full h-auto md:w-[70%] lg:w-[40%]'>
          <h2 className='flex items-center justify-center mb-6 text-6xl font-sacramento'>
            Meet Me
          </h2>
          <img
            src={'./ProgramPic.jpg'}
            alt='Handshake'
            className='bg-gray-300 rounded-md p-2 items-center justify-center w-full'
          />
          <p className='text-md m-4'>
            I am a developer who is here to support your dreams of creating that landing page that
            stands out or a display of your talents.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className='p-12 flex flex-col items-center justify-center'>
        <div className='p-4 rounded-md bg-red-600 text-white w-full h-auto md:w-[70%] lg:w-[40%]'>
          <h2 className='flex items-center justify-center mb-6 text-6xl font-sacramento'>
            Succeed
          </h2>
          <img
            src={'./handshake.jpg'}
            alt='Handshake'
            className='bg-gray-300 rounded-md p-2 items-center justify-center w-full'
          />
          <p className='text-md m-4'>
            Whether it is your chances of landing your dream job or getting more customers,
            the website that represents your business should give you the best chance to put your
            foot forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;