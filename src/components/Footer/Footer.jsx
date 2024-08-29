    import React from 'react'

function Footer() {
  return (
    <div>

        <section className='flex justify-between bg-black text-white px-16 py-20'>

            <div className='space-y-5'>
                <h1 className='text-2xl font-extrabold'>P-Ticket</h1>
                <p>P-Ticket is a digital platform to make your daily commuting better.</p>
                <p className='pt-10'>@all rights reserved, P-Ticket services limited.2024</p>
            </div>

            <div>
                <h1>Download our app</h1>
                <div className='flex gap-10 pt-28'>
                    <p>Terms & condition</p>
                    <p>Return & refund policy</p>
                    <p>Privacy policy</p>
                </div>




            </div>

        </section>




    </div>
  )
}

export default Footer