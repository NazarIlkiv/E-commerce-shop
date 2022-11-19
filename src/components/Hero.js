import React from 'react';
// import images
import WomanImg from '../img/woman_hero.png';

const HeroSlider = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto h-full flex justify-around'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center'>
            <div className='w-10 h-[2px] bg-red-600 mr-3'></div> NEW TREND
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>WOMENS</span>
          </h1>
          <div className='self-start uppercase font-semibold border-b'>
            Discover More
          </div>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
