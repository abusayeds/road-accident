import React, { createContext, useEffect, useState }  from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/Firebase.init';





export const authContext = createContext()



      const auth =getAuth(app)
      const Context = ({children}) => {
      
        const [user , setUser] = useState({})
  
         
        const logOut = () => {
          signOut(auth)
          .then(() => {
            setUser({})
          })
          .catch(() => {
            setUser({})
          })
        }
  
        const provider = new GoogleAuthProvider()
        const hendelgoogleprovider = (navigate) =>{
          signInWithPopup(auth ,provider)
          .then(result => {
            navigate('/dashboard')
          })
          .catch(error => {
             console.error('error' , error)
          })
         } 


        // ****** cerate user******** //
        const createUser = (email , password) => {
          return createUserWithEmailAndPassword(auth ,email, password)
        }
      


        // ****** sing in******** //
         
         const singIn = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
         }
        
      
        useEffect( () => {
          const unSubscribe = onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)
           })
           return () => unSubscribe()
         },[])
        

      const authinfo ={hendelgoogleprovider, logOut , user, createUser ,singIn}
     

      
    
    return (
        <div>
            <authContext.Provider value={authinfo }>
            
              {children}
             
                
            </authContext.Provider>
        </div>
    );
};

export default Context;