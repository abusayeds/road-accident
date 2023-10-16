import React from 'react';




const Causesadd = (props) => {
  

 const resons = props.addcauses;


    return (
        <div>

           <p>reson{resons.length}</p>
            {
                resons.map(reson => <div key={reson._id}>
                        
                        <h2>{reson.name}
                        <button onClick={() => props.removeCause(reson)}  className='ml-2'>remove</button>
                        </h2>
                </div> )
            }
          
        </div>
    );
};

export default Causesadd;