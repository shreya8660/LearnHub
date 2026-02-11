import React from 'react'

function Home() {
  return (
    <section className='bg-white min-h-screen flex items-center justify-center  '>
        <div className='text-center max-w-2xl'>
            <h1 className='text-4xl md:text-6xl font-bold'>Learn Smarter,
                <span className='text-[#39FF14]'>Grow Faster</span>
                </h1>

                <p className='mt-6 text-[#0B0B0B] text-lg'>Master new skills with interactive courses and practical projects.
          Start your journey today.</p>

          <div className='mt-8 flex justify-center gap-4'>
            <button className='bg-[#0B0B0B] text-white px-6 py-3 rounded-lg hover:bg-[#39FF14] hover:text-[#0B0B0B] transition'>
                Get Started
            </button>

            <button className='border border-[#39FF14] text-[#0B0B0B] px-6 py-3 rounded-lg hover:bg-[#0B0B0B] hover:text-[#39FF14] transition'>
                Learn More
            </button>
          </div>

        </div>

    </section>
  )
}

export default Home