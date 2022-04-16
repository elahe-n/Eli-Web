import React, { useState ,useEffect, useRef } from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import {  toast } from 'react-toastify';

function Contact() {
  const isMounted = useRef(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {
    name,
    email,
    message
  } = formData;

  useEffect(() => {
    if (isMounted) {
     
          setFormData({ ...formData });
    }

    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

        const onSubmit = async (e) => {
          e.preventDefault();
      
          const formDataCopy = {
            ...formData,
            timestamp: serverTimestamp(),
          };
      
          await addDoc(collection(db, "messages"), formDataCopy);
          toast.success("Thank you");
          // window.alert("");
          setFormData({
            name: "",
            email: "",
            message: "",
          });

        };
      
        const onMutate = (e) => {
          if (!e.target.files) {
            setFormData((prevState) => ({
              ...prevState,
              [e.target.id]: e.target.value,
            }));
          }
        };

  return (
    <>
    <section className='contact'>
        <form id="form" onSubmit={onSubmit}>   
        <h2>Get In Touch</h2> 
        <div >     
            <input  type="text" placeholder="Your Name" id="name" value={name}  onChange={onMutate} minLength="2" required></input>
            <input  type="email" placeholder="Your Email" id="email" value={email}  onChange={onMutate} className='email'></input>
        </div> 
            <textarea placeholder="Your message" id="message" value={message}  onChange={onMutate} minLength="3" required></textarea>
            <br/>
            <button type="submit" >Submit</button>
        </form>  
     </section>

     </>
  )
}

export default Contact
