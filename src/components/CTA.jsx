import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have A project in mind? <br className='sm:block hidden'/>
            Let's Build Something Together
        </p>
        <Link to='/contact' className='btn'>Contact</Link>
    </section>
  )
}

export default CTA