import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Causesadd from '../Cousesadd/Causesadd';
import './dashbord.css'

const Dashboard = () => {



    const resons = useLoaderData()
    const [addcauses, setaddcauses ] = useState([])

    const addcouse = cause => {
          const exists = addcauses.find( Ad => Ad._id === cause._id)
          if(exists){
           alert('This reson alrady added')
          } 
          else{
             const Newcause = [...addcauses, cause ] 
             setaddcauses(Newcause) 
      }
          }
          
          const removeCause =(reson) => {
             const newreson = addcauses.filter( re => re._id !==reson._id)
             setaddcauses(newreson)
          }
 
    return (
        <div className='  dashbord '>
        <div className=' mt-2  md:grid grid-cols-3'>
        {
           resons.map( cause => 
                <div onClick={ () => addcouse(cause)}  key={cause._id} className=' bg-slate-200 rounded mx-4 my-4 ' >
            
                <div className='p-2'>
                 <img className='rounded  ' src={cause.picture} alt="" />
                </div>

                 <div className='text-start px-2 py-1'>
                   <p>{cause.name}</p>
                   <p>{cause.percentage}</p>
                   <p ><button className='bg-cyan-800 text-white px-1 py-1 rounded hover:bg-cyan-600 zoom' ><small>Select_cause</small></button></p>
                  </div>

               </div>
               
                    
              
            )
        }
        </div>
        <div>
        <div>
               <Causesadd
               addcauses= {addcauses}
               removeCause={removeCause}
               ></Causesadd>
               
            </div>
           
        </div>
    </div>
    );
};

export default Dashboard;