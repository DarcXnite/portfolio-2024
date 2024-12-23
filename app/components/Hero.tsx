import React from 'react'
// import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import LitUpBtn from './ui/LitUpBtn'
import { FaLocationArrow } from 'react-icons/fa6'
import { BackgroundBeamsWithCollision as BackgroundBeams } from './ui/BackgroundBeams'

const Hero = () => {
  return (
    <div className='pb-30 pt-36'>
      {/* <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md: -top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='top-10 left-full md:-left-32 md: -top-20 h-[80vh] w-[50vh]'
          fill='purple'
        />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
      </div> */}

      {/* <div className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      </div> */}

      <BackgroundBeams className='bg-black-100 rounded-3xl mb-4'>
        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              Welcome to my website
            </h2>

            <TextGenerateEffect
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Hi, My Name is Davis Nguyen'
            />
            <div className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              I&apos;m a developer based in{' '}
              <span className='text-cyan-400'>Chicago</span>
            </div>
            <a href='#projects'>
              <LitUpBtn
                title='Projects'
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
          </div>
        </div>
      </BackgroundBeams>
    </div>
  )
}

export default Hero
