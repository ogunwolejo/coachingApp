//import clsx from 'clsx'
import {useNavigate} from 'react-router-dom'
//import {firebaseApp} from '../../../firebase.config.js';


export function EmailVerification() {
  const navigation = useNavigate();
  const onVerifcationHandler = () => {
    navigation("/auth/login");
  }
  return (
      <div className='d-flex flex-column flex-wrap justify-content-center pb-lg-0'>
        <div className='text-gray-500 fw-semibold fs-6'>Verify Your Email Address</div>
        <button type='submit' id='kt_password_reset_submit' className='btn btn-primary me-4 text-uppercase fw-bold' onClick={onVerifcationHandler}>
            verified
        </button>
      </div>
  )
}
