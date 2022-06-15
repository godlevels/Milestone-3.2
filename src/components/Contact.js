import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="col1">
                <div className="content">
                    <div>
                        <h2>Get in touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur recusandae tenetur laboriosam magnam! Id, magni adipisci? Perferendis, reprehenderit minus!</p>
                    </div>
                    <div className="address">
                        <p>742 Evergreen Terrace</p>
                        <p>Springfield, OR 12345</p>
                    </div>
                    <div className="icons">
                        <FaPhone style={{marginRight: '1rem'}} />
                        <p>+1 (555) 123-5467</p>
                    </div>
                    <div className="icons">
                        <FaEnvelope style={{marginRight: '1rem'}} />
                        <p>support@example.com</p>
                    </div>
                    <div className="careers">
                        <p>Lookin for careers? <span>View all job openings</span></p>
                    </div>
                </div>
            </div>
            <div className="col2">
                <form action="">
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Email' />
                    <input type="phone" placeholder='Phone' />
                    <textarea name="Message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <div className="checkbox">
                        <input type='checkbox' />
                        <p>By checking this box, you agree to the <span>Privacy policy</span>and <span>Cookie policy</span>.</p>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact