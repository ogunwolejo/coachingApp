import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom'
import AuthThunk from '../../../../store/redux/auth/thunk';


export function EmailVerification() {
  const navigation = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const [error, seError] = useState<boolean>(false)

  const verifyAccount = async(id:string) => {
    try {
      const isAccountVerified = await dispatch(AuthThunk.verifyUserAccountThunk({id}))
      console.log(isAccountVerified)
      if(isAccountVerified.payload.status) {
        seError(false)
        return navigation('/auth/login')
      }

      throw new Error()
    } catch(err:any) {
      seError(true)
    }
  } 


  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idFromUrl = params.get('id');
    
    if(idFromUrl) {
      verifyAccount(idFromUrl)
    }

  }, [])
  
  // const onVerifcationHandler = () => {
  //   navigation("/auth/login");
  // }



  return (
      <div className='d-flex flex-column flex-wrap justify-content-center pb-lg-0'>
        <div className='text-gray-500 fw-semibold fs-6'>Verify Your Email Address</div>
        {
          error && (
            <div className='fv-plugins-message-container mt-5 mb-3'>
              <div className='fv-help-block'>
                <span role='alert'>{error}</span>
              </div>
            </div>
          )
      }
      </div>
  )
}

