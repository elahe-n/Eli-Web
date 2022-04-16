import React from 'react'

function contact() {

  const submitHandler = () => {
    window.alert("Thanks for writting for me");

  }

  return (
    <section >
      
        <form id="form" onSubmit={submitHandler}>   
        <h2>Get In Touch</h2> 
        <div >     
            <input  type="text" placeholder="Your Name" id="name" required></input>
            <input  type="email" placeholder="Your Email" id="Email"></input>
        </div> 
            <textarea placeholder="Your message" id="message" required></textarea>
            <br/>
            <button type="submit" >Submit</button>
        </form>  
     </section>
  )
}

export default contact
