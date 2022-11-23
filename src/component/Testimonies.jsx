import React from 'react'

const Testimonies = () => {
  return (
    <main id='testimonies' className='mt-8 px-8'>
        <header className='text-center'>
            <h1 className='font-bold text-3xl md:text-5xl text-homely-red'>Testimonies</h1>
            <p className='text-lg md:text-2xl font-normal text-homely-black'>This is what our clients are saying.</p>
        </header>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-6 my-4'>
            <div className='text-center md:text-left'>
                <h1 className='font-bold text-xl md:text-2xl'>Paul James</h1>
                <small className='font-semibold text-base'>Lagos</small>
                <p className='font-normal text-base md:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus
                </p>
            </div>
            <div className='text-center md:text-left'>
                <h1 className='font-bold text-xl md:text-2xl'>Mercy Jude</h1>
                <small className='font-semibold text-base'>Kogi</small>
                <p className='font-normal text-base md:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus
                </p>
            </div>
            <div className='text-center md:text-left'>
                <h1 className='font-bold text-xl md:text-2xl'>Lara Ruth</h1>
                <small className='font-semibold text-base'>Abuja</small>
                <p className='font-normal text-base md:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus
                </p>
            </div>
        </section>
    </main>
  )
}

export default Testimonies
