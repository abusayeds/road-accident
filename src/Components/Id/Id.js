import { faEllipsis, faPerson, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Id = () => {
    return (
        <main >
        <section>
            <div className='flex  justify-center items-center md:mt-3'>
                <img className='p-2 md:w-4/6 md:m-auto ' src='https://i.ytimg.com/vi/DksPfrGqw4c/hqdefault.jpg' alt=""  />
            </div>
        </section>
        <section className='md:w-5/6 md:m-auto pt-4 px-2 '>
        


          <div className='text-start'>
            <p className='font-bold'>Causes of Road Accidents in India</p>
          <div className='  p-2' >
              <div className='flex md:w-4/6'>
                
                <div>
                <Link to='/causes'><p><img className='rounded' src="https://previews.123rf.com/images/markuk97/markuk971704/markuk97170400022/76706331-india-word-3d-illustration-with-a-flag-texture-on-an-isolated-white-background.jpg" alt="" srcset="" /></p></Link>
                </div>
                 <div className='ml-10'>
                  <Link to='/causes'>
                  <button className='bg-cyan-800 text-white px-1 py-1 rounded hover:bg-cyan-600 zoom'>seen_causes</button>
                 <div className='flex mt-4'>
                
                  <p><FontAwesomeIcon icon={faPerson} className='text-yellow-700 text-xl '></FontAwesomeIcon></p>
                  <p className=''>_Be_safe</p>
                 </div>
                  </Link>
                </div>
                
              </div>

              
             
          </div>
          </div>

          <div className='flex justify-between text-start mt-4'>
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

export default Id;