import React from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';


const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'Dashboard', to: '/dashboard', current: true },

]



const Header = () => {
  return (
   <Disclosure as="nav" className="text-black mt-4  rounded">
      {({ open }) => (
        <>
          <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
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
                  
                  <div className=' pl-12  text-cyan-900 text-start' >
                   <p className='md:text-2xl text-1xl' > Road_accident</p>
                   <p><FontAwesomeIcon icon={faPerson} className='text-yellow-700 text-xl' ></FontAwesomeIcon> Be_sefe</p>
                   
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
              <div className=" ml-2 ">
               <Link to='/dashboard' className=' bg-cyan-700 hover:bg-cyan-600 p-2 text-1xl text-white  rounded'>Login</Link>
               <Link to ='/dashboard' className='ml-2 bg-cyan-700 hover:bg-cyan-600 p-2 rounded text-1xl text-white' >Singup</Link>
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