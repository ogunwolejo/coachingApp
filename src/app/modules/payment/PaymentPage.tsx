import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Vertical} from './components/Vertical'

const PaymentBreadCrumbs: Array<PageLink> = [
  {
    title: 'Payment',
    path: '/payment/subscribe',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const PaymentPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='subscribe'
        element={
          <>
            <PageTitle breadcrumbs={PaymentBreadCrumbs}>Vertical</PageTitle>
            <Vertical />
          </>
        }
      />
      <Route index element={<Navigate to='/payment/subscribe' />} />
    </Route>
  </Routes>
)

export default PaymentPage
