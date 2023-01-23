/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import {ReportCard} from '../../../../_metronic/partials/content/cards/ReportCard'
import {CreateReportModal} from '../../../../_metronic/partials'

export function Report() {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          My Report
          <span className='fs-6 text-gray-400 fw-bold ms-1'>(59)</span>
        </h3>

        <div className='d-flex my-2'>
          <button className='btn btn-sm btn-primary' onClick={() => setShowCreateAppModal(true)}>
            Create New Report
          </button>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
        <div className='col-md-6 col-xxl-4'>
          <ReportCard reportTitle='Report 1' />
        </div>
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
      <CreateReportModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      />
    </>
  )
}
