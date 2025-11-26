'use client'

export default function Notice() {
  return (
    <main className='flex min-h-screen flex-col bg-[var(--bg)] select-none'>
      <div className='container h-full m-auto flex justify-center items-center'>
        <div className='flex flex-col gap-8 items-center justify-center'>
          <div className='font-mono text-2xl text-center text-[var(--text-primary)]'>
            Oops! The code is taking a coffee break... ☕
          </div>
          <a
            href='/'
            className='text-[var(--text-primary)] font-medium border border-[var(--border)] px-6 lg:px-7 py-4 lg:py-5 rounded text-sm hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all duration-300 inline-block'
          >
            Come back later
          </a>
        </div>
      </div>
    </main>
  )
}
