import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Discussion} from './components/Discussion'
import {ActionPoints} from './components/ActionPoints'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {ProfileHeader} from './ProfileHeader'

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
        path='action-points'
        element={
          <>
            <PageTitle breadcrumbs={ViewBreadCrumbs}>Action Point</PageTitle>
            <ActionPoints />
          </>
        }
      />
      <Route
        path='documents'
        element={
          <>
            <PageTitle breadcrumbs={ViewBreadCrumbs}>Documents</PageTitle>
            <Documents />
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
