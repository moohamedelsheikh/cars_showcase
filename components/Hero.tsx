// import React from 'react'
"use client";
import Image from 'next/image'
import CustomButton from './CustomButton'
const Hero = () => {
  const handelScroll = () => {

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          find , book , or rsnt a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handelScroll}

        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png " alt='hero'
            fill className='object-contain' />
          <div className='hero__image-overlay' />

        </div>

      </div>
      
    </div>


  )
}

export default Hero
