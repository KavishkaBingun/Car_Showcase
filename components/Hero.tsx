import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Find Book or rent a car hassle-free, right here!
            </h1>
            <p className='hero__subtitle'>
            Simplify your car rental journey with our easy and seamless booking system.

            </p>
            <CustomButton/>
        </div>
    </div>
  )
}

export default Hero