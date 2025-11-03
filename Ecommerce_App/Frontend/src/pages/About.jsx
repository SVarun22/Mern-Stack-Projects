import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 borer-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-start'>
          <p>Forever was born out of a passion dolor sit amet consectetur, adipisicing elit. Iste hic iusto at natus eligendi quia enim minima quam veniam placeat esse, odio enim facilis iure nostrum.</p>
          <p>Since our inception we have worked, sit amet  elit. illo quam, veritatis fuga dolore quo possimus expedita porro provident at harum quibusdam soluta voluptates deserunt impedit omnis </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To provide our customers with high-quality products that combine style, comfort, and sustainability. We believe in fashion that not only looks good but also feels good and does good for the planet.</p>
        </div>
      </div>
      <div className='text-xl py-4 text-left'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className= 'flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance</b>
          <p className='text-gray-600'> text-startWe select and vet each product Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process,Lorem ipsum dolor sit </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our team of dedicated professionals, dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
