import React from 'react'
import { MovingCards } from './ui/MovingCards'
import { companies, testimonials } from '../../data'

const Clients = () => {
  return (
    <div id='testimonials' className='py-20'>
      <h1 className='heading'>
        Testimonials and <span className='text-purple'>Recommendations</span>{' '}
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <MovingCards items={testimonials} direction='right' speed='slow' />
        {/* this is for logos and companies ive worked for */}
        {/* <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={img} alt={name} className='md:w-10 w-5' />
              <img src={nameImg} alt={name} className='md:w-24 w-20' />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Clients
