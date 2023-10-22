import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import './Cause.css'

const Causes = () => {
    const causes = useLoaderData()



    
    return (
        <div className=''>
            <div className=' reson md:w-5/6 md:mx-auto md:my-4 p-2  '>
            {
                causes.map( cause => 
                    <div   key={cause._id} className=' bg-slate-200 p-2 rounded   ' >
                
                    <div className=' flex items-end justify-center'>
                     <img className=' rounded h-32 w-5/6  ' src={cause.picture} alt="" />
                    </div>

                     <div className='text-start mt-4 md:ml-5'>
                       <p>{cause.name}</p>
                       <p>{cause.percentage}</p>
                       <Link to='/form' ><button className='bg-cyan-800 text-white rounded hover:bg-cyan-600 zoom' ><small>Select_cause</small></button></Link>
                      </div>

                   </div>
                   
                        
                  
                )
            }
            </div>
          
        </div>

    );
};

export default Causes;