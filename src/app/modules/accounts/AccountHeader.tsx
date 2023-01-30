/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useMemo} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router'
import {useSelector} from 'react-redux'

const AccountHeader: React.FC = () => {
  const location = useLocation()

  const {currentUser} = useSelector((store: any) => ({
      currentUser: store.authReducer.currentUser,
    }))

    let _currentUser = JSON.parse(currentUser);

  const {loading, error, profile} = useSelector((store:any) => ({
    loading:store?.profile.loading,
    error:store?.profile.error,
    profile:store?.profile.profile
  }))

  const profileCompletion = useMemo(() => {
    let profileCompletionCal = 0;

    if(_currentUser.displayName.length > 0) {
      profileCompletionCal += 25;
    }

    if(_currentUser.email.length > 0) {
      profileCompletionCal += 20;
    }

    if(_currentUser.emailVerified) {
      profileCompletionCal +=5;
    }

    if(profile.phoneNumber && profile.phoneNumber?.length > 0) {
      profileCompletionCal +=25;
    }

    if(profile.country && profile.country?.length > 0) {
      profileCompletionCal += 25;
    }

    return profileCompletionCal;
  }, [currentUser, profile])


  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-100px symbol-fixed position-relative'>
              {_currentUser?.photoURL !== null && _currentUser?.photoURL?.length > 0 ? (
                <div className='symbol symbol-50px me-5'>
                  <img alt='' src={_currentUser?.photoURL} />
                </div>
              ) : (
                <div className='symbol symbol-35px symbol-circle'>
                  <h3 className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                    {_currentUser?.displayName[0]}
                  </h3>
                </div>
             )}
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <div className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                    {_currentUser?.displayName}
                  </div>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <div
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com006.svg'
                      className='svg-icon-4 me-1'
                    />
                    Developer
                  </div>
                  <div
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/general/gen018.svg'
                      className='svg-icon-4 me-1'
                    />
                    SF, Bay Area
                  </div>
                  <div
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com011.svg'
                      className='svg-icon-4 me-1'
                    />
                    {_currentUser?.email}
                  </div>
                </div>
              </div>
              
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>Profile Compleation</span>
                  <span className='fw-bolder fs-6'>{profileCompletion}%</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-light mb-3'>
                  <div
                    className='bg-success rounded h-5px'
                    role='progressbar'
                    style={{width: `${profileCompletion}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/account/overview' && 'active')
                }
                to='/account/overview'
              >
                Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/account/settings' && 'active')
                }
                to='/account/settings'
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {AccountHeader}
