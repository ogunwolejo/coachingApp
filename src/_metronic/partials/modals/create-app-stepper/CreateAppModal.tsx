/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import {KTSVG} from '../../../helpers'

type Props = {
  show: boolean
  handleClose: () => void
}

const modalsRoot = document.getElementById('root-modals') || document.body

const CreateAppModal = ({show, handleClose}: Props) => {
  return createPortal(
    <Modal
      id='kt_modal_create_app'
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-900px'
      show={show}
      onHide={handleClose}
      backdrop={true}
    >
      <div className='modal-header'>
        <h2>Create App</h2>
        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
        {/* end::Close */}
      </div>

      <div className='modal-body py-lg-10 px-lg-10'>
        {/*begin::Stepper */}
        <div
          //ref={stepperRef}
          //className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
          id='kt_modal_create_app_stepper'
        >
          {/*begin::Content */}
          <div className='flex-row-fluid py-lg-5 px-lg-15'>
            <div id='kt_modal_create_app_form'>
              {/*begin::Actions */}
              <div className='d-flex flex-stack pt-10'>
                <div className='me-2'>
                  <button
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                    //onClick={prevStep}
                  >
                    <KTSVG
                      path='/media/icons/duotune/communication/com013.svg'
                      className='svg-icon-3 me-1'
                    />{' '}
                    Call Client
                  </button>
                </div>
                <div>
                  <button
                    type='button'
                    className='btn btn-lg btn-primary'

                    //onClick={nextStep}
                  >
                    Call Coach
                    <KTSVG
                      path='/media/icons/duotune/communication/com009.svg'
                      className='svg-icon-3 ms-1 me-0'
                    />
                  </button>
                </div>
                <div>
                  <button
                    type='button'
                    className='btn btn-lg btn-primary'
                    //onClick={nextStep}
                  >
                    Call Senior Coach
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>,
    modalsRoot
  )
}

export {CreateAppModal}
