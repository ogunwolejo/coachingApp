/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget6,
  CardsWidget7,
  CardsWidget17
} from '../../../_metronic/partials/widgets'

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
              <span className='text-black opacity-50 pt-3 fw-semibold fs-4'>{'Coach'}</span>
            </div>
          </div>
           <div className=' h-8px card-body d-flex align-items-end pt-0'></div>
        </div>
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10'>
        <CardsWidget17 className='h-md-100 mb-5 mb-xl-10 py-xl-4 bg-primary'  color='text-white'/>
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10'>
        <CardsWidget7
          className='h-md-100 mb-5 mb-xl-10 py-xl-4 bg-info'
          subject='Project Supervising'
          value='223'
          color='text-white'
        />
      </div>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10'>
        <CardsWidget7
          className='h-md-100 mb-5 mb-xl-10 py-xl-4 bg-success'
          subject='Total Number Of Reports Submitted'
          value='44690'
          color='text-white'
        />
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-6'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-6'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
