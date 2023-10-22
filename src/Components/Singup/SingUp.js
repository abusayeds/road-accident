import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/Context';

const SingUp = () => {
    
    const [error , seterror] = useState(null)
    const {createUser, user} =useContext(authContext)
    const navigate = useNavigate()


    const hendelSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
     
         
        if(password.length < 6) {
            seterror('password should be 6 characters long !')
            return;
        }

        if(password !== confirm){
          seterror('password did not match !')
          return;
        }
        createUser(email ,password)
        .then(result => {
            const user = result.user;
          
            form.reset();
            navigate('/dashboard')
        })
        .catch(error => console.error('error' , error))
        
    }
     

  

    return (
        <main className='m-2'>
        <div className=' mt-10 border-2 text-start md:w-2/6 mx-auto rounded p-4'>
         <p className='text-center'>Create your account !</p>
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
              <p className=''>re-type password</p>
              <input className='  w-full  rounded mt-2  border-2 p-1'  type="confirm-password" name="confirm"  placeholder='re-type password' />
              </div>
              
              <div>
             
              <input className='  w-full border-2 p-1 rounded mt-2 text-white bg-cyan-800 hover:bg-cyan-700 zoom' type="submit" value="singup" />
              <Link to='/form'> <p className='text-center text-sky-600'> <small>Alrade have an account </small>  </p></Link> 
              <p className='text-rose-500'>{error}</p>
              </div>
          </form>

         </div>
      </div>
    </main>
    );
};

export default SingUp;