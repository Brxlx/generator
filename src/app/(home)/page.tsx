import Image from 'next/image'
import Script from 'next/script'
// import dynamic from 'next/dynamic';

// const Dynamic = dynamic(() => import('.'))

export default function Home() {
  return (
    <div>
      <Script src='' strategy='lazyOnload' />
      <header className='h-52 bg-gray-950 text-white flex items-center justify-center'>
        <h3>Header</h3>
      </header>
      <main>
        <div className='font-semibold w-full'>
          <div className='w-full h-screen text-white flex justify-center items-center sticky top-0'>
            <Image
              src="https://source.unsplash.com/random/1000x1000"
              alt=''
              width={1000}
              height={1000}
              className='absolute left-0 top-0 w-full h-full object-cover -z-[1] brightness-50'
            />
            <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
              Card 1
            </div>
          </div>
          <div className='w-full h-screen text-white flex justify-center items-center sticky top-0'>
            <Image
              src="https://source.unsplash.com/random/1000x1000"
              alt=''
              width={1000}
              height={1000}
              className='absolute left-0 top-0 w-full h-full object-cover -z-[1] brightness-50'
            />
            <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
              Card 2
            </div>
          </div>
          <div className='w-full h-screen text-white flex justify-center items-center sticky top-0'>
            <Image
              src="https://source.unsplash.com/random/1000x1000"
              alt=''
              width={1000}
              height={1000}
              className='absolute left-0 top-0 w-full h-full object-cover -z-[1] brightness-50'
            />
            <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
              Card 3
            </div>
          </div>
          <div className='w-full h-screen text-white flex justify-center items-center sticky top-0'>
            <Image
              src="https://source.unsplash.com/random/1000x1000"
              alt=''
              width={1000}
              height={1000}
              className='absolute left-0 top-0 w-full h-full object-cover -z-[1] brightness-50'
            />
            <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
              Card 4
            </div>
          </div>
        </div>
      </main>
      <footer className='h-52 bg-gray-950 text-white flex items-center justify-center'>
        <h3>Footer</h3>
      </footer>
    </div>
  )
}
