import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Recommeded from '../../Components/Recommeded/Recommeded';
import './Main.css'


const Main = () => {
    return (
        <div>
            <Header></Header>
           <div className='main' >
            <Outlet></Outlet>
            <Recommeded></Recommeded>
           </div>
            
        </div>
    );
};

export default Main;