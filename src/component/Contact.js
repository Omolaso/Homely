import React from 'react'

const Contact = () => {
  return (
    <main className='px-8 pt-8'>
     <div className='flex flex-col items-center justify-center text-center w-full max-w-[430px] md:max-w-3xl mx-auto '>
      <header>
          <h1 className='font-bold text-homely-black text-[25px] md:text-[40px]'>Subscribe to our Newsletter</h1>
          <p className='text-homely-grey text-[15px] md:text-[20px] font-medium'>Enter your email address to get daily offers and news</p>
        </header>
        <form className='mt-4 flex flex-row gap-x-3 w-full md:w-[430px]'>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter your email'
            className='h-[54px] w-full border border-homely-grey px-2 focus:outline-none'
            autoComplete='off'
            autoFocus
          />
          <button 
            type="submit"
            className="bg-homely-red text-homely-white py-[5px] md:py-[10px] px-2 font-bold text-base"
            >
              Subscribe
          </button>
        </form>
      </div>
    </main>
  )
}

export default Contact
