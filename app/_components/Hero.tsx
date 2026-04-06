import Image from 'next/image'


export default function Hero() {
  return (
    <div className='md:flex pt-36 items-end'>
        <div className='md:w-[60%]'>
            <Image 
              src="/kanso logo.svg" 
              width={200} 
              height={200} 
              alt="kanso logo" 
              className='w-full h-full' 
            />
        </div>

        <div className='md:w-[40%]'>
          <h1 className='text-lg tracking-tighter font-medium text-gray-500 mt-4 text-right'>
            Kanso is a design studio crafting modern <br className='hidden md:block'/> brand identities and refined web experiences.
          </h1>
        </div>
    </div>
  )
}
