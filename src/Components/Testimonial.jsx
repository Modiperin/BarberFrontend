import React from 'react'
const Testimonial = ({Image,title,desc}) => {
  return (
    <>
    <article className='testimonial'>
        <div>
        <img  src={Image} alt="Image1" className='testimonial__avatar'/>
        </div>
    <h1>{title}</h1>
    <p>
        {desc}
    </p>
    </article>
    </>
  )
}

export default Testimonial