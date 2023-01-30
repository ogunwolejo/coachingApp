import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IProfileDetails} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useDispatch, useSelector} from "react-redux";
import {updateUserProfile} from "../../../../../../store/redux/profile/profile.thunk";
import {ProfileUpdate} from "../../../../../../interface/interface";

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  country: Yup.string()//.required('Country is required')
})

const ProfileDetails: React.FC = () => {
  const dispatch = useDispatch();
  const {loading, error, profile} = useSelector((store:any) => ({
    loading:store?.profile.loading,
    error:store?.profile.error,
    profile:store?.profile.profile
  }))

  const {currentUser} = useSelector((store: any) => ({
    currentUser: store.authReducer.currentUser,
  }))

  let _currentUser = JSON.parse(currentUser);
  const splitDisplayName:string[] = _currentUser.displayName.split(' ');
  const fName:string = splitDisplayName[0];
  const lName:string = splitDisplayName[1];
  const contactPhone:string = _currentUser.providerData[0].phoneNumber;
  const country:string = profile.country;

  const [data, setData] = useState<IProfileDetails>({
    avatar: _currentUser?.photoURL,
    fName,
    lName,
    contactPhone:!contactPhone ? '' : contactPhone,
    country: !country ? '' : country,
  });

  const updateFirstName = (el:string) => setData(prev => ({...prev, fName:el}));
  const updateLastName = (el:string) => setData(prev => ({...prev, lName:el}));
  const updateContactPhone = (el:string) => {
    console.log('phone Number', typeof el,  el);
    setData(prev => ({...prev, contactPhone:el}));
  }
  const updateCountry = (el:string) => setData(prev => ({...prev, country:el}));


  const formik = useFormik<IProfileDetails>({
    initialValues:data,
    validationSchema: profileDetailsSchema,
    onSubmit: async(values) => {
      //setLoading(true)
      //@ts-ignore
      const valuesToUpdate:ProfileUpdate = {
        fullName: `${values.fName} ${values.lName}`,
        id:_currentUser.uid,
        country:values.country,
        phoneNumber:values.contactPhone
      }
      console.log(values.contactPhone, valuesToUpdate);
      //@ts-ignore
      await dispatch(updateUserProfile(valuesToUpdate))
    },
  })

  console.log(_currentUser, profile);

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
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
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
                    style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
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
                      {...formik.getFieldProps('fName')}
                      //onChange={(e:any) => updateFirstName(e.target.value)}
                      //value={data.fName}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...formik.getFieldProps('lName')}
                      //onChange={(e:any) => updateLastName(e.target.value)}
                      //value={data.lName}
                    />
                    {formik.touched.lName && formik.errors.lName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lName}</div>
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
                  {...formik.getFieldProps('contactPhone')}
                  //onChange={(e:any) => updateContactPhone(e.target.value)}
                  //value={data.contactPhone}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                  </div>
                )}
              </div>
            </div>

            

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Country</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('country')}
                  //value={data.country}
                >
                  <option value=''>Select a Country...</option>
                  <option value='AF'>Afghanistan</option>
                  <option value='AX'>Aland Islands</option>
                  <option value='AL'>Albania</option>
                  <option value='DZ'>Algeria</option>
                </select>
                {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.country}</div>
                  </div>
                )}
              </div>
            </div>



            {/*<div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Time Zone</label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('timeZone')}
                >
                  <option value=''>Select a Timezone..</option>
                  <option value='International Date Line West'>
                    (GMT-11:00) International Date Line West
                  </option>
                  <option value='Midway Island'>(GMT-11:00) Midway Island</option>
                  
                </select>
                {formik.touched.timeZone && formik.errors.timeZone && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.timeZone}</div>
                  </div>
                )}
              </div>
            </div>*/}


          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {ProfileDetails}
