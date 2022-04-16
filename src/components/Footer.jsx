import React from 'react'
import linkedin from '../assets/linkedin3.svg'
import facebook from '../assets/facebook2.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <div><b>Email: </b> Elahe@gmail.com</div> 
        <div><b>Phone Number: </b> 657555555</div>
      </div>
      <small>copyright &copy; 2022. all rights reserved.</small>
      <div className='socail'>
        <a href='https://www.linkedin.com/in/elahe-n-943a2a181/' target='_blank'><img className="socialLogo" src={linkedin} alt="Linkedin" /></a>
        <a href='https://www.facebook.com/elahe.nourkami'target='_blank'><img className="socialLogo" src={facebook} alt="facebook" /></a>      
      </div>
    </footer>
  )
}

export default Footer
