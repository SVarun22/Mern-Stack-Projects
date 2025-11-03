import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {//event is the object representing the form submission event.
        event.preventDefault();//event.preventDefault() stops the default browser behavior of submitting the form and refreshing the page.
    }
  return (
    <div className = 'text-cenetr'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil nisi eius. Eaque error illum velit autem voluptatem sapiente explicabo totam eligendi. Id enim iste quam commodi sunt, molestias officiis.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email'required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
