'use client'

import classNames from '@/lib/classNames'

export default function Notice() {
  return (
    <main className='flex min-h-screen flex-col bg-nero select-none'>
      <div className='container h-full m-auto flex justify-center items-center'>
        <div className='flex flex-col gap-8 items-center justify-center'>
          <div className='font-jetBrain text-2xl text-center text-milk3'>
            Oops! The code is taking a coffee break... ☕
          </div>
          <a
            href='/'
            className='text-gray1 font-medium border border-milk3 px-6 lg:px-7 py-4 lg:py-5 rounded text-sm hover:bg-milk3 hover:text-nero transition-all duration-300 inline-block'
          >
            Come back later
          </a>
        </div>
      </div>
    </main>
  )
}
