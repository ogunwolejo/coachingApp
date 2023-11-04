/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10 py-xl-4 h-md-100'>
        <div
          className={`card card-flush bgi-no-repeat  h-md-100`}
          style={{
            backgroundColor: '#fff',
          }}
        >
          <div className='card-header pt-5'>
            <div className='card-title d-flex flex-column'>
              <span className='fs-1hx fw-bold text-black me-2 lh-1 ls-n2'>{'Joshua Ogunwole'}</span>
            </div>
          </div>
           <div className=' h-8px card-body d-flex align-items-end pt-0'></div>
        </div>
      </div>
      {/* end::Col */}
    </div>
  </>
)

const DashboardWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>DASHBOARD</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
