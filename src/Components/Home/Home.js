import React from 'react';
import img from '../../image/road accident project.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <main >
            <section>
                <div className='flex  justify-center items-center md:mt-3'>
                    <img className='p-2' src={img} alt=""  />
                </div>
            </section>
            <section className='md:w-5/6 md:m-auto pt-4 px-2 '>
            


              <div className='text-start'>
                <p className='font-bold'>Causes of Road Accidents</p>
              <div className='ml-4' >
                <li>Over Speeding</li>
                <li>Drunken Driving</li>
                <li>Distraction to Driver</li>
                <li>Red Light jumping</li>
              </div>
              </div>

              <div className='flex justify-between text-start mt-8'>
                    <div className='w-5/6'>
                    <p className='font-bold'>Project on Road accident !!!!!</p>
                    <p><small>1M + deaths every month in world by road accident !!</small></p>
                    <p className='mt-2'> 
                       
                        <FontAwesomeIcon className='ml-3' icon={faShareNodes}></FontAwesomeIcon>
                        <FontAwesomeIcon  className='ml-3' icon={faEllipsis}></FontAwesomeIcon>
                     </p>
                    </div>
                    <div>
                    <button className='bg-cyan-800 py-1 px-3 text-white rounded hover:bg-cyan-600 zoom'>share <FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon> </button>
                    </div>
                    
                </div>
                   
            </section>
        </main>
    );
};

export default Home;