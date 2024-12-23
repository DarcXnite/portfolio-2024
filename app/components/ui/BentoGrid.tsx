'use client'

import { cn } from '../../../utils/cn'
import Link from 'next/link'
import { BackgroundGradientAnimation } from './GradientBg'
import { GlobeDemo } from './GridGlobe'
import { useState } from 'react'
import { IoDownloadOutline } from 'react-icons/io5'
import { CiLinkedin, CiMail } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa6'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  id?: number
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('davisnguyen@gmail.com')

    setCopied(true)
  }

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-white justify-between flex flex-col space-y-4 border border-white/[0.1]',
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(149,5,5,1) 35%, rgba(219,5,5,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && 'w-full opacity-80'
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center w-full h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 flex items-center justify-center text-white font-bold' />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 lg:p-10'
          )}
        >
          <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>
            {description}
          </div>
          <div className='font-sans font-bold text-lg lg:text-3xl max-w-96 z-50'>
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
              <div className='flex flex-col gap-3 lg:gap-8'>
                {['React.js', 'Next.js', 'TypeScript'].map(item => (
                  <span
                    key={item}
                    className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'
                  >
                    {item}
                  </span>
                ))}
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]' />
              </div>
              <div className='flex flex-col gap-3 lg:gap-8'>
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]' />
                {['Python', 'TailwindCSS', 'Node.js'].map(item => (
                  <span
                    key={item}
                    className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className='mt-5 relative'>
              {/* <div className={`absolute -bottom-9 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  height={200}
                  width={200}
                />
              </div> */}
              {/* <MagicBtn
                title='Resume'
                icon={<IoCopyOutline />}
                position='left'
                otherClasses='`bg-[#161a31]'
                handleClick={handleCopy}
              /> */}
              <div className='inline-flex justify-center items-center'>
                <a href='mailto:davisnguyen98@gmail.com'>
                  <CiMail className='text-3xl mr-4' />
                </a>
                <Link
                  href='https://www.linkedin.com/in/davis-nguyen-98345720b/'
                  target='_blank'
                >
                  <CiLinkedin className='text-3xl mr-4' />
                </Link>
                <Link href='https://github.com/DarcXnite' target='_blank'>
                  <FaGithub className='text-2xl mr-4' />
                </Link>
                <Link
                  href='/docs/Davis_Resume_SWE_2024v3.pdf'
                  target='_blank'
                  download
                >
                  {' '}
                  <p className='inline-flex justify-center items-center '>
                    Resume <IoDownloadOutline className='text-3xl' />{' '}
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
