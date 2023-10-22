import React, { useContext } from 'react';
import { authContext } from '../../Context/Context';

import { Link, useNavigate } from 'react-router-dom';

const From = () => {
    const {hendelgoogleprovider} =useContext(authContext)
    const {singIn} = useContext(authContext)
    const navigate = useNavigate()
    
    const hendelSubmit = event =>{
      event.preventDefault()
      const form = event.target;
      const email =form.email.value;
      const password = form.password.value;

      singIn(email , password)
      .then(result => {
       navigate('/dashboard')
        
        form.reset();
      })
      .catch(error => console.error(error))
    }
   
   
    
    return (
      <main className='m-2'>
          <div className=' mt-10 border-2 text-start md:w-2/6 mx-auto rounded p-4'>
            <p className='p-2 text-center' >If you went to show dashbord please login !! </p>
            <p className='text-center font-bold'>Log-In</p>
           <div className=''>
            <form onSubmit={hendelSubmit} className='w-5/6 mx-auto mt-6 '>
                <div>
                <p>Email</p>
                <input className=' w-full  rounded  border-2 p-1 mt-2' type="email" name="email"  placeholder='your email' />
                </div>
                
                <div>
                    <p className=''>Password</p>
                <input className='  w-full  rounded mt-2  border-2 p-1'  type="password" name="password"  placeholder='password' />
                </div>
                
                <div>
                <input className='  w-full border-2 p-1 rounded mt-2 text-white bg-cyan-800 hover:bg-cyan-700 zoom' type="submit" value="Login" />
               
                 <Link to = '/singup' > <p className='text-center text-sky-600'> <small>or create a new account </small>  </p></Link> 
                </div>
            </form>
            <div className='w-5/6 mx-auto'>
            <button onClick={ () => hendelgoogleprovider(navigate)} className='border-2 w-full p-1 rounded mt-2 text-black zoom'> <small  className='text-1xl'> Login with </small><small className='text-1xl text-sky-500'>G</small><small className='text-1xl text-red-600'>o</small><small className='text-1xl text-orange-500'>o</small><small className='text-1xl text-sky-500'>g</small><small  className='text-1xl text-lime-500'>l</small><small  className='text-1xl  text-red-600'>e</small></button>
            </div>
            
           
            
           </div>
        </div>
      </main>
    );
};

export default From;