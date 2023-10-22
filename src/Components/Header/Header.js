import React, { useContext } from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import './Header.css'
import { authContext } from '../../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faRightToBracket } from '@fortawesome/free-solid-svg-icons';




const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Dashboard', to: '/form', current: true },

]



const Header = () => {
 const {user} = useContext(authContext)
 const {logOut} = useContext(authContext)

 console.log(user)


  return (
   <Disclosure as="nav" className=" header bg-slate-100 text-black   rounded">
      {({ open }) => (
        <>
          <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
           
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  ">
                <div className="">
                  
                  <div className=' pl-10  text-cyan-900 text-start' >
                   <p className='md:text-2xl font-bold md:mt-3' > Road_accident</p>
                   
                   
                    </div >
                  
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className=" md:flex space-x-4 mt-2 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                       
                      >
                      <p className='py-2 px-2 rounded ml-10 text-xl text-cyan-900  hover:bg-cyan-800 hover:text-white'>  {item.name}</p>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" ml-2 flex items-center justify-center gap-3  ">
            
                <div>
              { user?.email?  <Link onClick={logOut} to='/form' className=' bg-cyan-700 hover:bg-cyan-600 p-2 text-1xl text-white  rounded'>Logout <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon> </Link>  
                :<Link to='/form' className=' bg-cyan-700 hover:bg-cyan-600 p-2 text-1xl text-white  rounded'>Login <FontAwesomeIcon icon={faCircleArrowDown}></FontAwesomeIcon>  </Link>
                   }
               </div>
               <div>
              {
                
                <img className='img' src={user?.photoURL} alt=""/>
                
               }
              
               
              
              
              
              </div>
              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden p-2">
            <div className="">
              {navigation.map((item) => (
                <Link
               
                  key={item.name}
                  as="a"
                  to={item.to}
                 
                >
             <div  className='md:flex mt-2'>
              <p>{item.name}</p>
             </div>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;