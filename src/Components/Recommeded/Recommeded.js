import React from 'react';
import { Link } from 'react-router-dom';
import './Recommended.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPerson } from '@fortawesome/free-solid-svg-icons';


const Recommeded = () => {
    return (
        <main> 
            <section><p className='text-start text-2xl font-bold p-2'>Recommended Countries</p></section>

            <section className='flex  mt-1 p-2  '>
                <div className='w-3/6'>
                    <Link to= '/bd'><img className=' zoom rounded' src="https://image.slidesharecdn.com/presentation1-190322171937/75/road-accident-in-bangladesh-1-2048.jpg?cb=1668305366" alt="" srcset="" /></Link>
                </div>
                <div className=' md:mt-4 ml-3 text-start '>
                    <p className='font-bold text-1xl'>Bangladesh   <a className='ml-1' href="https://www.google.com/maps/place/Bangladesh/@23.8085476,89.8005415,7z/data=!4m6!3m5!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b!8m2!3d23.684994!4d90.356331!16zL20vMDE2MmI?entry=ttu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='text-cyan-800' icon={faLocationDot}></FontAwesomeIcon></a> </p>
                    <Link className='text-1xl' to='/bd'><button className=' hover:text-cyan-800 rounded'> see_details</button></Link>
                    <p className=''><small><FontAwesomeIcon icon={faPerson} className='text-yellow-700 ' ></FontAwesomeIcon> Be safe</small></p>
                </div>
            </section>

            <section className='flex   p-2 '>
                <div className='w-3/6'>
                <Link to= '/pk'><img className=' zoom rounded' src="https://i.tribune.com.pk/media/images/kallarkaharaccident41687009981-1/kallarkaharaccident41687009981-1.jpg" alt="" srcset="" /></Link> 
                </div>
                <div className=' md:mt-4 ml-3 text-start '>
                    <p className='font-bold text-1xl'>Pakistan  <a className='ml-1' href="https://www.google.com/maps/place/Pakistan/@30.3593034,68.9966984,6z/data=!3m1!4b1!4m6!3m5!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!8m2!3d30.375321!4d69.345116!16zL20vMDVzYjE?entry=ttu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='text-cyan-800' icon={faLocationDot}></FontAwesomeIcon></a> </p>
                    <Link className='text-1xl' to='/pk'><button className=' hover:text-cyan-800 rounded'> see_details</button></Link>
                    <p className=''><small><FontAwesomeIcon icon={faPerson} className='text-yellow-700 ' ></FontAwesomeIcon> Be safe</small></p>
                </div>
            </section>

            <section className='flex   p-2 '>
                <div className='w-3/6'>
                <Link to= '/id'> <img className=' zoom rounded' src="https://i.ytimg.com/vi/DksPfrGqw4c/hqdefault.jpg" alt="" srcset="" /></Link>
                </div>
                <div className=' md:mt-4 ml-3 text-start '>
                    <p className='font-bold text-1xl'>India   <a className='ml-1' href="https://www.google.com/maps/place/India/@21.0686228,82.7525294,5z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='text-cyan-800' icon={faLocationDot}></FontAwesomeIcon></a> </p>
                    <Link className='text-1xl' to='/id'><button className=' hover:text-cyan-800 rounded'> see_details</button></Link>
                    <p className=''><small><FontAwesomeIcon icon={faPerson} className='text-yellow-700 ' ></FontAwesomeIcon> Be safe</small></p>
                </div>
            </section>

            <section className='flex  mt-1 p-2 '>
                <div className='w-3/6'>
                <Link to= '/np'> <img className=' zoom rounded' src="https://omgnepal.com/wp-content/uploads/2017/11/y.jpg" alt="" srcset="" /></Link> 
                </div>
                <div className=' md:mt-4 ml-3 text-start '>
                    <p className='font-bold text-1xl'>Nepal  <a className='ml-1' href="https://www.google.com/maps/place/Nepal/@28.397455,84.1301506,7z/data=!3m1!4b1!4m6!3m5!1s0x3995e8c77d2e68cf:0x34a29abcd0cc86de!8m2!3d28.394857!4d84.124008!16zL20vMDE2end0?entry=ttu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='text-cyan-800' icon={faLocationDot}></FontAwesomeIcon></a> </p>
                    <Link className='text-1xl' to='/np'><button className=' hover:text-cyan-800 rounded'> see_details</button></Link>
                    <p className=''><small><FontAwesomeIcon icon={faPerson} className='text-yellow-700 ' ></FontAwesomeIcon> Be safe</small></p>
                </div>
            </section>

            <section className='flex   p-2 '>
                <div className='w-3/6'>
                <Link to= '/md'> <img className=' zoom rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEYDHirSWSqfeoiD6od-oAzQzV1Dx6GS91A" alt="" srcset="" /></Link>
                </div>
                <div className=' md:mt-4 ml-3 text-start '>
                    <p className='font-bold text-1xl'>Malaysia  <a className='ml-1' href="https://www.google.com/maps/place/Malaysia/@4.140634,109.6181485,6z/data=!3m1!4b1!4m6!3m5!1s0x3034d3975f6730af:0x745969328211cd8!8m2!3d4.210484!4d101.975766!16zL20vMDlwbWt2?entry=ttu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='text-cyan-800' icon={faLocationDot}></FontAwesomeIcon></a> </p>
                    <Link className='text-1xl' to='/md'><button className=' hover:text-cyan-800 rounded'> see_details</button></Link>
                    <p className=''><small><FontAwesomeIcon icon={faPerson} className='text-yellow-700 ' ></FontAwesomeIcon> Be safe</small></p>
                </div>
            </section>

            <section className='flex   p-2 '>
                <div className='w-3/6'>
                <Link to= '/cd'>  <img className=' zoom rounded' src="https://ukranews.com/upload/media/2021/04/23/6082a2a91d6e3-Trafik._Dorozhnoe_dvizhenie_v_Kitae.jpg" alt="" srcset="" /></Link>
                </div>
                <div className=' md:mt-4 ml-3 text-start '>
                    <p className='font-bold text-1xl'>China  <a className='ml-1' href="https://www.google.com/maps/place/China/@35.780287,104.1374349,4z/data=!3m1!4b1!4m6!3m5!1s0x31508e64e5c642c1:0x951daa7c349f366f!8m2!3d35.86166!4d104.195397!16zL20vMGQwNXcz?entry=ttu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='text-cyan-800' icon={faLocationDot}></FontAwesomeIcon></a> </p>
                    <Link className='text-1xl' to='/cd'><button className=' hover:text-cyan-800 rounded'> see_details</button></Link>
                    <p className=''><small><FontAwesomeIcon icon={faPerson} className='text-yellow-700 ' ></FontAwesomeIcon> Be safe</small></p>
                </div>
            </section>
           
           

        
        </main>
    );
};

export default Recommeded;