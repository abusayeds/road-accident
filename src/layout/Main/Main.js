import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Recommeded from '../../Components/Recommeded/Recommeded';
import './Main.css'
import Footer from '../../Components/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Header></Header>
           <div className='main' >
           <div>
           <Outlet></Outlet>
           <Footer></Footer>
           </div>
           <div><Recommeded></Recommeded></div>
           </div>
            
        </div>
    );
};

export default Main;