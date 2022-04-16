import React from 'react'
import car from '../assets/car.png'
import house from '../assets/house.png'
import feedback from '../assets/feedback.png'
import ecommerce from '../assets/e-commerce.png'
import elsite from '../assets/elsite.png'
import hobby from '../assets/hobby.png'
import music from '../assets/music.png'
import nasa from '../assets/nasa.png'
import quote from '../assets/quote.png'
import unsplash from '../assets/unsplash.png'


function Example() {
  return (
    <div className='example-list'>

      <div className='example-list-item'>
          <a href="https://car-marketplace100.netlify.app/" target="blank"> 
            <img className="example-img" src={car} alt="Car Market Place" />
          </a>
          <div>
          <a href="https://car-marketplace100.netlify.app/" target="blank"> 
            <h3>Car Market Place</h3></a>
            <p>This site has been developed and designed with HTML, CSS, Java Script, and React. <br/>The Data of the cars and users are being stored in Firebase database.<br/> It has login and profile page. Users can create account or login with their google account.<br/>
            Users can make, change or delete listings. </p>
          </div>
          
      </div>

      <div className='example-list-item' data-aos='fade-left' > 
          <a href="https://house-market-psi.vercel.app/" target="blank" >
            <img className="example-img" src={house} alt="House Market Place" />
          </a>
          <div>
          <a href="https://house-market-psi.vercel.app/" target="blank" ><h3>House Market Place</h3></a>
            <p>This site has been developed and designed with HTML, CSS, Java Script, and React. <br/>The Data of the houses and users are being stored in Firebase database.</p>
          </div>
      </div>
     
      <div className='example-list-item' data-aos='fade-right'>
          <a href="https://elahe-n.github.io/NASAPictures/" target="blank">
            <img className="example-img" src={nasa} alt="nasa" />
          </a>
          <div>
          <a href="https://elahe-n.github.io/NASAPictures/" target="blank"><h3>Nasa Picture of Day</h3></a>
            <p>This site has been developed and designed with HTML, CSS, and Java Script. <br/>The Data of the users' feedback is being stored in Firebase database. It also fetches an api from NASAPOD api </p>
          </div>
      </div>

      <div className='example-list-item' data-aos='fade-left'>
         <a href="https://elahe-n.github.io/Quote-Generator/" target="blank">
          <img className="example-img" src={quote} alt="quote" />
         </a>
         <div>
         <a href="https://elahe-n.github.io/Quote-Generator/" target="blank"><h3>Quote Generator</h3> </a>
           <p>This site has been developed and designed with HTML, CSS, Java Script. <br/>It also uses an api to fetching quotes</p>
         </div>
      </div>

      <div className='example-list-item' data-aos='fade-right'>
        <a href="https://elahe-n.github.io/hobby/" target="blank">
          <img className="example-img" src={hobby} alt="hobby" />
        </a>
        <div>
        <a href="https://elahe-n.github.io/hobby/" target="blank"><h3>Hobby Information</h3></a>
          <p>This site has been developed and designed with HTML, CSS, Java Script. <br/>It also uses an api to fetching Hobby information.</p>
        </div>
      </div>
     
      <div className='example-list-item' data-aos='fade-left'> 
          <a href="https://elahe-n.github.io/unsplash-galley-infinite-scroll/" target="blank">
          <img className="example-img" src={unsplash} alt="unsplash" />
          </a>
          <div>
          <a href="https://elahe-n.github.io/unsplash-galley-infinite-scroll/" target="blank"> <h3>Unsplash Image Loader</h3></a>
            <p>This site has been developed and designed with HTML, CSS, Java Script. <br/>It also uses an api to fetching images from Unsplash.</p>
          </div>
      </div>

      <div className='example-list-item' data-aos='fade-right'> 
        <a href="https://kind-gates-a94a36.netlify.app/" target="blank"> 
          <img className="example-img" src={feedback} alt="Feed back" />
        </a>
        <div>
        <a href="https://kind-gates-a94a36.netlify.app/" target="blank">  <h3>FeedBack Web Application</h3></a>
          <p>This site has been developed and designed with HTML, CSS, Java Script and React.</p>
        </div>
      </div>

      <div className='example-list-item' data-aos='fade-left'>
        <a href="https://elahe-n.github.io/#" target="blank"> 
          <img className="example-img" src={elsite} alt="elsite" />
        </a>
        <div>
        <a href="https://elahe-n.github.io/#" target="blank">  <h3>Resume Site</h3></a>
          <p>This site has been developed and designed with HTML, CSS, Java Script and React.</p>
        </div>
      </div>

      <div className='example-list-item'data-aos='fade-right'>
        <a href="https://e-commerce-site-flax.vercel.app/" target="blank"> 
          <img className="example-img" src={ecommerce} alt="ecommerce" />
        </a>
        <div>
        <a href="https://e-commerce-site-flax.vercel.app/" target="blank"><h3>E-commerce web site</h3></a>
        <p>This site has been developed and designed with HTML, CSS, Java Script and React.</p></div>
      </div>

      <div className='example-list-item'data-aos='fade-left'>
          <a href="https://elahe-n.github.io/Music-Player/" target="blank"> 
            <img className="example-img" src={music} alt="music" />
          </a>
          <div>
          <a href="https://elahe-n.github.io/Music-Player/" target="blank">  <h3>Music Player</h3> </a>
            <p>This site has been developed and designed with HTML, CSS, Java Script. </p>
          </div>
      </div>
      
    </div>
  )
}

export default Example
