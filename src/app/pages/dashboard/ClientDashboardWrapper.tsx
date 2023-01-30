/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget3,
  CardsWidget7,
  CardsWidget8,
  CardsWidget20,
  EngageWidget10,
} from '../../../_metronic/partials/widgets'
import {useSelector} from 'react-redux'

const items = [
  {name: 'Alan Warden', initials: 'A', state: 'danger'},
  {name: 'Susan Redwood', initials: 'S', state: 'primary'},
]

const ClientDashboardPage: FC = () => {
  const {currentUser} = useSelector((store: any) => ({
    currentUser: store.authReducer.currentUser,
  }))

  let _currentUser = JSON.parse(currentUser);
  return (
    <>
      {/* begin::Row */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        {/* begin::Col */}
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget20
            className='h-md-100 mb-5 mb-xl-10'
            reference={_currentUser?.email}
            color='#50CD89'
            name={_currentUser?.displayName}
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget8
            className='h-md-100 mb-5 mb-xl-10'
            items={items}
            icon={false}
            labelColor='dark'
            textColor='gray-300'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget7
            className='h-md-100 mb-5 mb-xl-10'
            subject='Business Score'
            value="456"
          />
        </div>

        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget7
            className='h-md-100 mb-5 mb-xl-10'
            subject='Leader Score'
            value="456"
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 gx-xl-8'>
        <div className='col-xl-4'>
          <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
        </div>
        <div className='col-xl-8'>
          <EngageWidget10 className='h-md-100' />
        </div>
      </div>
      {/* end::Row */}
    </>
  )
}

const ClientDashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'DASHBOARD'})}</PageTitle>
      <ClientDashboardPage />
    </>
  )
}

export {ClientDashboardWrapper}
