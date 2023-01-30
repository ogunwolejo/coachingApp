/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const HeaderUserMenu: FC = () => {
  const navigate = useNavigate()

  const {currentUser} = useSelector((store: any) => ({
    currentUser: store.authReducer.currentUser,
  }))

  let _currentUser = JSON.parse(currentUser);

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-2'>
        <div className='menu-content d-flex align-items-center px-3'>
          {_currentUser?.photoURL !== null && _currentUser?.photoURL?.length > 0 ? (
            <div className='symbol symbol-50px me-5'>
              <img alt='' src={_currentUser?.photoURL} />
            </div>
          ) : (
            <div className='symbol symbol-35px symbol-circle'>
              <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                {_currentUser?.displayName[0]}
              </span>
            </div>
          )}

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-6'>
              {_currentUser?.displayName}
            </div>
            <div className='fw-bold text-muted text-hover-primary fs-8'>
              {_currentUser?.email}
            </div>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to='/account/settings' className='menu-link px-5'>
          My Profile
        </Link>
      </div>
      <div className='menu-item px-5'>
        <Link to='/payment/subscribe' className='menu-link px-5'>
          Payment
        </Link>
      </div>


      <div className='menu-item px-5 my-1'></div>

      <div className='menu-item px-5'>
        <a onClick={() => navigate('/auth/login')} className='menu-link px-5'>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
