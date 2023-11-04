/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { setUser } from '../../../../store/redux/auth/auth.slice'

const HeaderUserMenu: FC = () => {
  //const navigate = useNavigate()
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const {currentUser} = useSelector((store: any) => ({
    currentUser: store.auth.currentUser,
  }))

  //navigate('/auth/login')
  const signoutHandler = () => {
    localStorage.removeItem('currentUser');
    dispatch(setUser(null))
  }
  
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-2'>
        <div className='menu-content d-flex align-items-center px-3'>
          {currentUser ? (
              <div className='symbol symbol-35px symbol-circle'>
                <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                  {currentUser.user.firstName[0] + "" + currentUser.user.lastName[0]}
                </span>
              </div>
            ) : (
              <div className='symbol symbol-35px symbol-circle'>
                  <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                  </span>
              </div>
            )}

          <div className='d-flex flex-column mx-2'>
            <div className='fw-bolder d-flex align-items-center fs-6'>
             {currentUser.user.firstName[0] + "" + currentUser.user.lastName[0]} 
            </div>
            <div className='fw-bold text-muted text-hover-primary fs-8'>
              {currentUser.user.email}
            </div>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to='/account/overview' className='menu-link px-5'>
          My Profile
        </Link>
      </div>
      <div className='menu-item px-5 my-1'></div>

      <div className='menu-item px-5'>
        <a onClick={signoutHandler} className='menu-link px-5'>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
