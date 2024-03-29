import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IProfileDetails} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from "react-redux";
import {ProfileUpdate} from "../../../../../../interface/interface";

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  country: Yup.string()//.required('Country is required')
})

const ProfileDetails: React.FC = () => {
  const dispatch = useDispatch();

  const {currentUser} = useSelector((store: any) => ({
    currentUser: store.auth.currentUser,
  }))

  const [loading, setLoading] = useState<boolean>(false);

  const initialValues = {
    firstName:currentUser.user.firstName,
    lastName:currentUser.user.lastName,
    phoneNumber:currentUser.user.phoneNumber,
  }

  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: async(values) => {
      setLoading(true)
      console.log(values)
      //@ts-ignore
      //await dispatch(updateUserProfile(valuesToUpdate))
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Profile Details</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} id='kt_update_profile' noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
              <div className='col-lg-8'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/300-1.jpg')})`}}
                  ></div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='First name'
                      {...formik.getFieldProps('firstName')}
                      //onChange={(e:any) => updateFirstName(e.target.value)}
                      //value={data.fName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.firstName}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...formik.getFieldProps('lastName')}
                      //onChange={(e:any) => updateLastName(e.target.value)}
                      //value={data.lName}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lastName}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Contact Phone</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Phone number'
                  {...formik.getFieldProps('phoneNumber')}
                  //onChange={(e:any) => updateContactPhone(e.target.value)}
                  //value={data.contactPhone}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.phoneNumber}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' id='kt_update_profile' className='btn btn-primary' disabled={formik.isSubmitting || !formik.isValid} 
            // disabled={loading}
            >
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export {ProfileDetails}
