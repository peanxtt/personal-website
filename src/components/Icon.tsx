import Image from 'next/image'

interface Props {
  href?: string
  title?: string
}

const Icon = ({ href, title }: Props) => {
  return (
    // <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
    <div className='rounded-full bg-[#181818] h-[60px] w-[60px] relative'>
      <Image
        src='/hero.png'
        alt='Hero Image'
        className='object-cover rounded-full'
        fill
      />
    </div>
    // </div>
  )
}

export default Icon
