import clsx from 'clsx'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'
import {useSelector} from 'react-redux'

// constants string class
const itemClass:string = 'ms-1 ms-lg-3'
const btnClass:string =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
const userAvatarClass:string = 'symbol-35px symbol-md-40px'
const btnIconClass:string = 'svg-icon-1'

const Navbar = () => {
  const {config} = useLayout()

  const {currentUser} = useSelector((store: any) => ({
    currentUser: store.auth.currentUser,
  }))

  return (
    <div className='app-navbar flex-shrink-0'>
      <div className={clsx('app-navbar-item', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          {currentUser && (
            <div className='symbol symbol-35px symbol-circle'>
              <span className='symbol-label bg-primary text-inverse-primary fw-bolder'>
                {currentUser.user.firstName[0] + "" + currentUser.user.lastName[0]}
              </span>
            </div>
          )}
        </div>
        {currentUser && <HeaderUserMenu />}
      </div>

      {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='kt_app_header_menu_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className={btnIconClass} />
          </div>
        </div>
      )}
    </div>
  )
}

export {Navbar}
