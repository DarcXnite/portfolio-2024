import React from 'react'
import { MovingCards } from './ui/MovingCards'
import { testimonials } from '../../data'

function Clients() {
  return (
    <div id='projects' className='py-20'>
      <h1 className='heading'>
        Testimonials and <span className='text-purple'>Recommendations</span>{' '}
      </h1>
      <div className='flex flex-col items-center'>
        <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
          <MovingCards items={testimonials} direction='right' speed='slow' />
        </div>
      </div>
    </div>
  )
}

export default Clients
