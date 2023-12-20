import React from 'react';

const Advertisment = () => {
  return (
    <div className='w-56 h-52 flex flex-col rounded-sm text-md mt-6'
      
    >
        <h1 className='text-xs font-extralight'>ADVERTISMENT</h1>
        <div className='w-56 h-48 bg-cover'
        style={{
            backgroundImage: 'url("https://wpkixx.com/html/socimo/images/resources/ad-widget2.gif")',
          }}>
            
        </div>
    </div>
  );
};

export default Advertisment;
