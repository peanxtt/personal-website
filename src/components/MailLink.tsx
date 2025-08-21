import { MotionDiv } from '@/hooks/useFramerMotion'

const MailLink = () => {
  return (
    <div className='fixed right-4 lg:right-10 bottom-0 hidden lg:flex flex-col items-center z-10'>
      <MotionDiv delay={12}>
        <a
          href='mailto:huasheng.work@gmail.com'
          className='text-gray2 hover:text-gray1 hover:-translate-y-1 transition-all duration-300 font-work text-xs tracking-widest mb-6'
          style={{ writingMode: 'vertical-rl' }}
        >
          huasheng.work@gmail.com
        </a>
      </MotionDiv>
      <MotionDiv delay={13}>
        <div className='w-px h-20 lg:h-24 bg-gray2'></div>
      </MotionDiv>
    </div>
  )
}

export default MailLink
