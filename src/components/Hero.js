import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="content">
          <div className="col1">
            <h1>Release your</h1>
            <h1><span className='primary-color'>work to the</span></h1>
            <h1>Internet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores quasi debitis eaque excepturi delectus illum dicta soluta dolor ullam.
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <i><FaDatabase />Staxx</i>
                <i><FaAsterisk />Star AI</i>
                <i><FaAccusoft />Accusoft</i>
              </div>
            </div>
          </div>

          <div className='col2'>
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-text">Sign In with</p>
                <div className="social-login">
                  <i><FaFacebook size={20} /></i>
                  <i><FaTwitter size={20} /></i>
                  <i><FaGithub size={20} /></i>
                </div>
                <div className="divider">
                  <p><span>Or</span></p>
                </div>
                <form action="">
                  <input type="text" placeholder='Name' />
                  <input type="email" placeholder='Email' />
                  <input type="password" placeholder='Password' />
                  <button>Create your account</button>
                </form>
              </div>
              <div className="form-footer">
                <p>By signing up, you agree to our 
                  <span className='primary-color'> Terms, Conditions</span> and 
                  <span className="primary-color"> Cookies Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero