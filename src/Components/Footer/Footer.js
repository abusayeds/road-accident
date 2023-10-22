import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPerson } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-slate-200 md:flex items-center justify-between md:p-10 mt-8 '>
           <p className='font-bold'><FontAwesomeIcon icon={faPerson} className='text-yellow-700 text-xl ' ></FontAwesomeIcon> Be safe</p>
          <p className=''>create by <FontAwesomeIcon  icon={faHeart}></FontAwesomeIcon> AS (sabbir) </p>
          <p>Email: abusayedstudent855@gmail.com</p>
        </div>
    );
};

export default Footer;