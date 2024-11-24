import React from 'react'
import Link from 'next/link'
import LitUpBtn from './ui/LitUpBtn'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '../../data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50'
        />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Want to <span className='text-purple'>Build</span> and Collaborate?
        </h1>
        <p className='text-white-100 md:mt-10 my-5 text-center'>
          Reach out and lets create amazing products!
        </p>
        <a href='mailto:davisnguyen98@gmail.com'>
          <LitUpBtn
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Davis Nguyen
        </p>

        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(({ link, img, id }) => (
            <div
              key={id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
            >
              <Link href={link} target='_blank'>
                <img src={img} alt={img} width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer