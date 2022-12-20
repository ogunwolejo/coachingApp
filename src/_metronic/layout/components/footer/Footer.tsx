/* eslint-disable react/jsx-no-target-blank */
import {useEffect} from 'react'
import {ILayout, useLayout} from '../../core'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

const Footer = () => {
  const {config} = useLayout()
  useEffect(() => {
    updateDOM(config)
  }, [config])

  const {
    REACT_FACE_BOOK_URL,
    REACT_INSTAGRAM_URL,
    REACT_TELEGRAM_URL,
    REACT_TWITTER_URL,
    REACT_YOUTUBE_URL,
  } = process.env

  return (
    <>
      <div className='text-dark order-2 order-md-1'>
        <span className='text-muted fw-semibold me-3'>
          {new Date().getFullYear().toString()}&copy;
        </span>
        <a
          href='https://keenthemes.com/'
          target='_blank'
          className='text-gray-800 text-hover-primary'
        >
          Keenthemes
        </a>
      </div>

      <ul className='menu menu-gray-600 menu-hover-primary fw-semibold order-1'>
        <li className='menu-item'>
          <a href={REACT_FACE_BOOK_URL} target='_blank' className='menu-link px-2'>
            <img src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')} className='h-20px' />
          </a>
        </li>

        <li className='menu-item'>
          <a href={REACT_TWITTER_URL} target='_blank' className='menu-link px-2'>
            <img src={toAbsoluteUrl('/media/svg/brand-logos/twitter.svg')} className='h-20px' />
          </a>
        </li>
        <li className='menu-item'>
          <a href={REACT_TELEGRAM_URL} target='_blank' className='menu-link px-2'>
            <img src={toAbsoluteUrl('/media/svg/brand-logos/telegram.svg')} className='h-20px' />
          </a>
        </li>
        <li className='menu-item'>
          <a href={REACT_INSTAGRAM_URL} target='_blank' className='menu-link px-2'>
            <img
              src={toAbsoluteUrl('/media/svg/brand-logos/instagram-2-1.svg')}
              className='h-20px'
            />
          </a>
        </li>

        <li className='menu-item'>
          <a href={REACT_YOUTUBE_URL} target='_blank' className='menu-link px-2'>
            <img src={toAbsoluteUrl('/media/svg/brand-logos/youtube-3.svg')} className='h-20px' />
          </a>
        </li>
      </ul>
    </>
  )
}

const updateDOM = (config: ILayout) => {
  if (config.app?.footer?.fixed?.desktop) {
    document.body.classList.add('data-kt-app-footer-fixed', 'true')
  }

  if (config.app?.footer?.fixed?.mobile) {
    document.body.classList.add('data-kt-app-footer-fixed-mobile', 'true')
  }
}

export {Footer}
