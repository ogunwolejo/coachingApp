/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
//import {getUserByToken, login} from '../core/_requests'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useDispatch, useSelector} from 'react-redux'
import {LoginCredentials} from '../../../../interface/interface'
import AuthThunk from '../../../../store/redux/auth/thunk'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { clearError } from '../../../../store/redux/auth/auth.slice'

const loginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Password is required'),
})

const initialValues = {
  phoneNumber:''
}

export function LoginByMobile() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const navigate = useNavigate()

  const {auth} = useSelector((store: any) => ({
    auth: store.auth,
  }))

  const {error, loading} = auth

  
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      const credentials: LoginCredentials = {
        phoneNumber: values.phoneNumber
      }
      await dispatch(AuthThunk.loginViaMobileThunk(credentials))
      
    },
  })

  return (
    <form
      className='form w-100'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        <h1 className='text-gray-700 fw-bolder mb-3 text-captialize'>Sign In With Mobile Number</h1>
      </div>
      {/* begin::Heading */}

      {/* begin::Form group */}
      <div className='fv-row mb-3'>
        <label className='form-label fw-bolder text-dark fs-6 mb-0'>Mobile number</label>
        <input
          type='tel'
          autoComplete='off'
          {...formik.getFieldProps('phoneNumber')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.phoneNumber && formik.errors.phoneNumber || error,
            },
            {
              'is-valid': formik.touched.phoneNumber && !formik.errors.phoneNumber,
            }
          )}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.phoneNumber}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {
        error && (
          <div className='fv-plugins-message-container mt-5'>
            <div className='fv-help-block'>
              <span role='alert'>{error}</span>
            </div>
          </div>
        )
      }

      {/* begin::Wrapper */}
      <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
        <Link to='/auth/login' className='link-primary'>
          Login via email and password
        </Link>
      <div/>

        {/* begin::Link */}
        <Link to='/auth/forgot-password' className='link-primary'>
          Forgot Password ?
        </Link>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* begin::Action */}
      <div className='d-grid mb-10'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading &&(
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
      </div>
      {/* end::Action */}

      <div className='text-gray-500 text-center fw-semibold fs-6'>
        Not a Member yet?{' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign up
        </Link>
      </div>
    </form>
  )
}
