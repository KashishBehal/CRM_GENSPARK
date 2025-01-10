import React from 'react'
import { GoogleAuthProvider , signInWithPopup } from 'firebase/auth';
import './google.css';

import {toast} from 'react-toastify';
import { auth, db } from './firebase'; // Ensure correct path
import { setDoc, doc } from 'firebase/firestore';

export const  Google=() => {
    function googleLogin(){
        const provider= new GoogleAuthProvider();
        

        
        signInWithPopup(auth , provider).then(async(result)=>{
            console.log(result);
            const user=result.user;
            if(result.user){
               
                        await setDoc(doc(db, 'Users', user.uid), {
                          email: user.email,
                          firstName: user.displayName,
                          lastname:""
                        });
                
                 toast.success('User registered successfully!', {
                          position: 'top-center',
                        });
                window.location.href="./login"
            }
        })
    }
  return (
    <div>
        <p className='or'>--Or continue with--</p>
        <div onClick={googleLogin}><img src="g.png" alt='google ' className='gg'></img></div>
    </div>
  )
}
