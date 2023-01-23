/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget6,
  CardsWidget7,
  CardsWidget17,
} from '../../../_metronic/partials/widgets'

const HeadCoachDashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10 py-xl-4'>
      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10'>
        <div
          className={`card card-flush bgi-no-repeat  `}
          style={{
            backgroundColor: '#fff',
          }}
        >
          <div className='card-header pt-5'>
            <div className='card-title d-flex flex-column'>
              <span className='fs-1hx fw-bold text-black me-2 lh-1 ls-n2'>{'Joshua Ogunwole'}</span>
              <span className='text-black opacity-50 pt-3 fw-semibold fs-4'>Head Coach</span>
            </div>
          </div>
          <div className=' h-8px card-body d-flex align-items-end pt-0'></div>
        </div>
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10'>
        <CardsWidget7
          className='h-md-100 mb-5 mb-xl-10 py-xl-4'
          subject='Employee Count'
          value='25'
        />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10'>
        <CardsWidget7
          className='h-md-100 py-xl-4 mb-5 mb-xl-10'
          subject='Total Project(s)'
          value='1232'
        />
      </div>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10'>
        <CardsWidget7
          className='h-md-100 mb-5 mb-xl-10 py-xl-4'
          subject='Total Number Of Reports Submitted'
          value='44690'
        />
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8 mb-xl-10'>
      <div className='col-xl-4'>
         <CardsWidget7
          className='h-md-100 mb-5 mb-xl-10 py-xl-4'
          subject='This Year Revenue '
          value='44690'
        />
      </div>
       <div className='col-xl-4'>
         <CardsWidget7
          className='h-md-100 mb-5 mb-xl-10 py-xl-4'
          subject='Total Revenue'
          value='44690'
        />
      </div>
       <div className='col-xl-4'>
         <CardsWidget7
          className='h-md-100 mb-5 mb-xl-10 py-xl-4'
          subject='Wage Bill'
          value='4,469,000'
        />
      </div>
    </div>
    {/* end::Row */}
  </>
)

const HeadCoachDashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'DASHBOARD'})}</PageTitle>
      <HeadCoachDashboardPage />
    </>
  )
}

export {HeadCoachDashboardWrapper}
