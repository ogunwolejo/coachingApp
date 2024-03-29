/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect, useMemo} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import { useDispatch, useSelector } from 'react-redux'
import { AuthCredentials } from '../../../../interface/interface'
import { useNavigate } from 'react-router-dom'
import AuthThunk from '../../../../store/redux/auth/thunk'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { clearError } from '../../../../store/redux/auth/auth.slice'

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  phoneNumber: '',
  interest: '',
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .lowercase('a lowercase letter is required')
    .uppercase('an upper case letter is required')
    .required('Password is required'),
  changepassword: Yup.string()
    .required('Password confirmation is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    }),
  phoneNumber:Yup.string()
    .required('phoneNumber is required'),
  interest:Yup.string()
})

export function Registration() {
  
  const [registration, setRegistration] = useState<{error:string; loading:boolean}>({
    error:"",
    loading:false
  })

  const navigate = useNavigate();
  
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const sportList:Array<{value:string; label:string}> = useMemo(() => (
    [
      {value:'Football', label:'Football'},
      {value:'Basketball', label:'Basketball'},
      {value:'Motorsports,', label:'Motorsports,'}, 
      {value:'Bandy,', label:'Bandy,'},
      {value:'Rugby,', label:'Rugby,'},
      {value:'Skiing,', label:'Skiing,'},
      {value:'Shooting', label:'Shooting'}, 
      {value:'Ice Hockey', label:'Ice Hockey'}
    ]
  ), [])


  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setRegistration((reg) => ({
        ...reg,
        loading:true
      }))

      try {
        const credential: AuthCredentials = {
          email: values.email,
          password:values.password,
          firstName:values.firstname,
          lastName:values.lastname,
          phoneNumber:values.phoneNumber,
          interest:values.interest
        };

        console.log(credential)

        //return
        
        const registraion = await dispatch(AuthThunk.signupThunk(credential))
        console.log(registraion)
        
        if(registraion.payload.error) {
          setRegistration((reg) => ({
            ...reg,
            error:registraion.payload.error
          }))
          
          return
        }

        if(!registraion.payload.error) {
          setRegistration({
            loading:false,
            error:''
          })

          navigate('/auth/check-email');
        }

      } catch (error) {
        return null;
      } finally {
        setRegistration((reg) => ({
          ...reg,
          loading:false
        }))
      }
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>Sign Up</h1>
        {/* end::Title */}
      </div>
      {/* end::Heading */}

      
      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      {/* begin::Form group Firstname */}
      <div className='fv-row mb-8'>
        <label className='form-label fw-bolder text-dark fs-6'>First name</label>
        <input
          placeholder='First name'
          type='text'
          autoComplete='off'
          {...formik.getFieldProps('firstname')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.firstname && formik.errors.firstname,
            },
            {
              'is-valid': formik.touched.firstname && !formik.errors.firstname,
            }
          )}
        />
        {formik.touched.firstname && formik.errors.firstname && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.firstname}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}
      <div className='fv-row mb-8'>
        {/* begin::Form group Lastname */}
        <label className='form-label fw-bolder text-dark fs-6'>Last name</label>
        <input
          placeholder='Last name'
          type='text'
          autoComplete='off'
          {...formik.getFieldProps('lastname')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.lastname && formik.errors.lastname,
            },
            {
              'is-valid': formik.touched.lastname && !formik.errors.lastname,
            }
          )}
        />
        {formik.touched.lastname && formik.errors.lastname && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.lastname}</span>
            </div>
          </div>
        )}
        {/* end::Form group */}
      </div>

      {/* begin::Form group Email */}
      <div className='fv-row mb-8'>
        <label className='form-label fw-bolder text-dark fs-6'>Email</label>
        <input
          placeholder='Email'
          type='email'
          autoComplete='off'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group PhoneNumber */}
      <div className='fv-row mb-8'>
        <label className='form-label fw-bolder text-dark fs-6'>Mobile Number</label>
        <input
          placeholder='mobile number'
          type='tel'
          autoComplete='off'
          {...formik.getFieldProps('phoneNumber')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.phoneNumber && formik.errors.phoneNumber},
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

      {/* begin::Form group Password */}
      <div className='fv-row mb-8' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>Password</label>
          <div className='position-relative mb-3'>
            <input
              type='password'
              placeholder='Password'
              autoComplete='off'
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.password && formik.errors.password,
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          {/* begin::Meter */}
          <div
            className='d-flex align-items-center mb-3'
            data-kt-password-meter-control='highlight'
          >
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
            <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
          </div>
          {/* end::Meter */}
        </div>
        <div className='text-muted'>
          Use 8 characters with a mix of letters, numbers & symbols.
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
        <input
          type='password'
          placeholder='Password confirmation'
          autoComplete='off'
          {...formik.getFieldProps('changepassword')}
          className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.changepassword && formik.errors.changepassword,
            },
            {
              'is-valid': formik.touched.changepassword && !formik.errors.changepassword,
            }
          )}
        />
        {formik.touched.changepassword && formik.errors.changepassword && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.changepassword}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Sport Interest</label>
        <select 
        {...formik.getFieldProps('interest')}
        className={clsx(
            'form-control bg-transparent',
            {
              'is-invalid': formik.touched.interest && formik.errors.interest,
            },
            {
              'is-valid': formik.touched.interest && !formik.errors.interest,
            }
          )}
          placeholder='select sport interest'
          //value={null}
          >
            <option value=''>Select Your Sport Interest</option>
            {sportList.map((el, idx:number) => (
              <option className='py-2' value={el.value} key={idx}>{el.label}</option>
            ))}
        </select>
        {formik.touched.interest && formik.errors.interest && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.interest}</span>
            </div>
          </div>
        )}
      </div>

      {
        registration.error && (
          <div className='fv-plugins-message-container mt-5 mb-3'>
            <div className='fv-help-block'>
              <span role='alert'>{registration.error}</span>
            </div>
          </div>
        )
      }

      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!registration.loading && <span className='indicator-label'>Submit</span>}
          
            {registration.loading &&
              <span className='indicator-progress' style={{display: 'block'}}>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            }
        </button>
        <Link to='/auth/login'>
          <button
            onClick={() => dispatch(clearError(null))}
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100 mb-5'
          >
            Cancel
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
