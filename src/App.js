                        
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Main from './layout/Main/Main';
import BanglaBD from './Components/BanglaBd/BanglaBD';
import Pk from './Components/PK/Pk';
import Id from './Components/Id/Id';
import Np from './Components/Np/Np';
import Cd from './Components/Cd/Cd';
import Md from './Components/Md/Md';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Causes from './Components/Causes/Causes';
import Longinlaout from './Components/loginlayout/Longinlaout';
import From from './Components/Fromlogin/From';
import SingUp from './Components/Singup/SingUp';



function App() {
  const router =createBrowserRouter([
     {
      path:'/',
      element: <Main></Main>,
      children:[
      {
        path: '',
        element: <Home></Home>
      },
      
         


      ],
     },
     {
      
       path: '/',
       element: <Longinlaout></Longinlaout> ,
       children: [
        {
          path:'dashboard',
          loader: () => fetch('Tools.json'),
          element: <Dashboard></Dashboard>
        },
        {
          path: 'form',
          element: <From></From>
        }
        ,
        {
          path: 'singup',
          element: <SingUp></SingUp>
        },
         {
        path: 'bd',
        element:<BanglaBD></BanglaBD> 
      },
      {
        path: 'pk',
        element: <Pk></Pk>
      },
      {
        path:'id',
        element: <Id></Id>
      },
      {
        path: 'np',
        element: <Np></Np>
      },
      {
        path: 'cd',
        element: <Cd></Cd>
      },
      {
        path: 'md',
        element: <Md></Md>
      },
      {
        path: 'causes',
        loader: () => fetch('Tools.json'),
        element: <Causes></Causes>
      },
       ]
      
     }
  ])
  return (
    <div className="App">
       <RouterProvider
       router= {router}
       ></RouterProvider>
       
    </div>
  );
}

export default App;
