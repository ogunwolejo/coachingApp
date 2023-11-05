/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useMemo} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";

export function Overview() {

  const {currentUser} = useSelector((store: any) => ({
    currentUser: store.auth.currentUser,
  }))

  
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>

          <Link to='/account/settings' className='btn btn-primary align-self-center'>
            Edit Profile
          </Link>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{currentUser.user.firstName + " " + currentUser.user.lastName}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>email</label>

            <div className='col-lg-8 d-flex align-items-center '>
              <span className='fw-bolder me-2 fs-6'>{currentUser.user.email}</span>
              {currentUser.user.emailVerified && <span className='badge badge-success'>Verified</span>}
              {!currentUser.user.emailVerified && <span className='badge badge-warning'>Not Verified</span>}
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Contact Phone
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bolder fs-6 '>{currentUser.user.phoneNumber ?? ''}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Sport Interest
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Sport interest'
              ></i>
            </label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{currentUser.user.interest ?? ''}</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
