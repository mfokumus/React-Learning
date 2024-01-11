import React from 'react'
import "../styles/Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <FaFacebookSquare/>
        <FaInstagram/>
        <FaTwitter/>
      </div>
      <p>Tüm Hakları Saklıdır | MFO</p>
    </div>
  )
}

export default Footer