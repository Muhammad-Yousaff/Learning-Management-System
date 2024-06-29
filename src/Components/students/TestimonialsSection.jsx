import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800 text-center'>Testimonials</h2>
      <p className='md:text-base text-gray-500 mt-3 text-center'>
        Hear from our learners as they share their journeys of transformation,
        success, and how our <br className='hidden md:block' /> platform has made a difference in their lives
      </p>

      {/* Horizontal scroll container */}
      <div className='flex gap-6 mt-10 overflow-x-auto pb-4'>
        {dummyTestimonial.map((Testimonial, index) => (
          <div key={index} className='min-w-[300px] text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white'>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10 shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
              <img className='h-12 w-12 rounded-full' src={Testimonial.image} alt={Testimonial.name} />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{Testimonial.name}</h1>
                <p className='text-gray-800/80'>{Testimonial.role}</p>
              </div>
            </div>

            <div className='px-5 pt-3'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-5'
                    key={i}
                    src={i < Math.floor(Testimonial.rating) ? assets.star : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{Testimonial.feedback}</p> {/* ✅ FIXED this line */}
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read more</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection
