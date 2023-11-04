import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Connections} from './components/Connections'
import {ProfileHeader} from './ProfileHeader'
import { Discussion } from './components/Discussion'

const ViewBreadCrumbs: Array<PageLink> = [
  {
    title: 'My View',
    path: '/view/discussion',
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

const ViewPage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='discussion'
        element={
          <>
            <PageTitle breadcrumbs={ViewBreadCrumbs}> Discussion</PageTitle>
            <Discussion />
          </>
        }
      />
      <Route
        path='connections'
        element={
          <>
            <PageTitle breadcrumbs={ViewBreadCrumbs}>Connections</PageTitle>
            <Connections />
          </>
        }
      />
      <Route index element={<Navigate to='/view/discussion' />} />
    </Route>
  </Routes>
)

export default ViewPage
