import React from 'react'
import pic from '../assets/el.webp'
import Resume from '../assets/Elahe-Nourkami-Resume.pdf'
import Contact from './Contact'
import Education from '../assets/e2.svg'
import Work from '../assets/w5.svg'

function Home() {
  return (
    <div className='home'>
    <article>
    <img className="pic" src={pic} alt="Elahe Nourkami" />
    <div className='about'>
      <div><h1 className='hi'>Hi</h1>, I'm Elahe, a Web Developer and Designer. <br/>I enjoy designing and developing web sites and applications. <br/>
      I'm flexible and enthusiastic to learning new things. I'm also adaptive to change and new ways of working.</div>
      <a href={Resume} download='Elahe-Nourkami-Resume'><button type="submit">Download my resume</button></a>
    </div>
    <br/>
    <section id='Education' className="Experience" >
          <div className='home-title'>
                <div> <img className="skill-logo" src={Education} alt="Education" /> </div>
                <div> <h2>Education</h2> </div>
          </div>

                <div>
                  <ul>

                      <li className='home-item'>
                        <div className='bold'>2021 - 2022</div>
                        <div className='bold'>Web design and Development</div>
                        <div className='text'> Humber College (Toronto) </div>  
                      </li>

                    <li className='home-item'>
                      <div className='bold'>2007 - 2009</div>
                      <div className='bold'>Bachelor of Scientific-Applied Computer Software </div> 
                      <div className='text'>Sadra Institute of Higher Education (Tehran, Iran)</div>
                    </li>
                  
                    <li className='home-item'>
                        <div className='bold'>2005 - 2007</div>
                        <div className='bold'>Diploma of Computer Software</div> 
                        <div className='text'>Technical and Vocational Institute of Semnan (Semnan, Iran)</div>
                      </li>
                    
                  </ul>
                </div> 

      </section>
      <br/>
      <section id="Experience" className="Experience" data-aos='fade-right'>
          <div className='home-title'>
                <div> <img className="skill-logo" src={Work} alt="work" /> </div>
                <div> <h2>Experience</h2></div>
          </div>

                <div>
                  <ul>

                      <li className='home-item'>
                            <div className='bold'>2014 - 2021</div>
                            <div className='bold'>Software Testing Engineer</div>
                            <div className='text'> System Group (R&D division) </div>  
                      </li>

                      
                      <li className='home-item'>
                            <div className='bold'>2011 - 2014</div>
                            <div className='bold'>Software support specialist</div>
                            <div className='text'> System Group (Service Center division) </div>  
                      </li>

                      <li className='home-item'>
                            <div className='bold'>2009 - 2011</div>
                            <div className='bold'>IT manager</div>
                            <div className='text'> Farzan Research Institute </div>  
                      </li>
                  </ul> 
                </div>
               
      </section> 

      </article>
      {/* <Skill  data-aos='fade-left'/> */}

      
 </div>
 
  )
}

export default Home
