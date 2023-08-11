import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header/>

      <h1 className="text-8xl text-white mb-3 mt-24 font-medium text-center">
        Great Coffee
      </h1>

      <figure className="flex justify-center">
        <Image
          src="/assets/brand.png"
          alt="great coffe"
          width={700}
          height={700}
        />
      </figure>

      <figure className="flex justify-center relative z-10">
      <Image
          src="/assets/rocket-coffee.png"
          alt="great coffe"
          width={1000}
          height={1000}
        />
      </figure>

      <Image
          src="/assets/blur-1.png"
          alt="great coffe"
          width={900}
          height={900}
          className='absolute bottom-0 left-0 z-0'
        />

      <Image
        src="/assets/blur-2.png"
        alt="great coffe"
        width={900}
        height={900}
        className='absolute top-0 right-0 z-0'
      />
    </main>
  )
}
