import React from 'react';
import { useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from './google.png'

const SocialAuth = () => {
    const [signInWithGoogle,user,  loading, error] = useSignInWithGoogle(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const navigate=useNavigate();
    if (loading) {
       <p>Loading...</p>;
      }
      let errorHandle;
      if(error){
          errorHandle=
          <div>
              <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }
      if(user){
          navigate('/home');
      }
      const emailVerify=async () => {
        await sendEmailVerification();
        alert('Sent email');
      }
    return (
        <div> 
            <div className="d-flex align-items-center">
         <div style={{height:'1px'}} className='bg-dark w-50'></div>
         <p className='mt-2 px-2'>Or</p>
         <div style={{height:'1px'}} className='bg-dark w-50'></div>
           
          </div>
          {errorHandle}
        <button onClick={() => {signInWithGoogle();
        emailVerify()}} type="button" className="btn btn-warning mb-5 p-2 w-25">
            <img src={google} alt="" />
            Sign with Google</button>
            


        </div>
           
    );
};

export default SocialAuth;