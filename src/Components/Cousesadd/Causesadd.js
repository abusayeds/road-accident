import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';




const Causesadd = (props) => {
  
  
 const resons = props.addcauses;


    return (
        <div className=''>

           <p className='text-xl font-bold'>Causes hear !</p>
            {
                resons.map(reson => <div className='text-start mt-2'  key={reson._id}>
                        
                        <h2 className='text-center'>{reson.name}
                        <button onClick={() => props.removeCause(reson)}  className='ml-2'>  <FontAwesomeIcon className='' icon={faX}></FontAwesomeIcon> </button>
                        </h2>
                    
                </div> )
                
            }
            
           
      
          <p><button className=' mt-6 bg-cyan-800 text-white px-1 py-1 rounded hover:bg-cyan-600 zoom' >sent message</button></p>
        </div>
    );
};

export default Causesadd;