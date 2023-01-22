/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  closeModal:any
}

const CreateDiscussion: React.FC<Props> = ({className, closeModal}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body pb-0'>
        {/* begin::Header */}
        <div className='d-flex align-items-center mb-5'>
          {/* begin::User */}
          <div className='d-flex align-items-center flex-grow-1'>
            {/* begin::Avatar */}
            <div className='symbol symbol-45px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-23.jpg')} alt='' />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column'>
              <p  className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                Nick Logan
              </p>

              <span className='text-gray-400 fw-semibold'>PHP, SQLite, Artisan CLI</span>
              <span className='text-gray-400 fw-semibold'>Last week at 10:00 PM</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::User */}

          {/* begin::Menu */}
          <div className='my-0'>
            <button
              type='button'
              onClick={closeModal}
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              >
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
            </button>
          </div>
          {/* end::Menu */}
        </div>
        {/* end::Header */}

        {/* begin::Post */}
        <div className='mb-5'>
          {/* begin::Text */}
          <p className='text-gray-400 fw-semibold mb-5 text-uppercase'>
            Discuss with Coach, Create A discussion that address a problem or you can use the chat
          </p>
          {/* end::Text */}

        </div>
        {/* end::Post */}

        {/* begin::Separator */}
        <div className='separator mb-4'></div>
        {/* end::Separator */}

        {/* begin::Reply input */}
        <form className='position-relative mb-6'>
          <textarea
            className='form-control border-0 p-1 pe-10 resize-none min-h-50px'
            rows={3}
            placeholder='Create Discussion...'
          ></textarea>

          <div className='position-absolute top-0 end-0 me-n5'>
            <span className='btn btn-icon btn-sm btn-active-color-primary pe-0 me-2'>
               <KTSVG
                path='/media/icons/duotune/communication/com012.svg'
                className='svg-icon-3 mb-3'
              />
            </span>
          </div>
        </form>
        {/* edit::Reply input */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {CreateDiscussion}
