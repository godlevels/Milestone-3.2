import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import './Testimonial.css'


const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="container">
            <div className="testimonial-outline">
                <div className="content">
                    <i><FaDatabase /> Staxx</i>
                    <p className="body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima cum dolorum delectus nam, quaerat repudiandae laboriosam quia. Temporibus, aperiam?
                    </p>
                    <div className="name">
                        <p>Marie Chilvers</p>
                        <p>CEO, Staxx</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Testimonial