import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Discussion} from './components/Discussion'
import {ActionPoints} from './components/ActionPoints'
import {Documents} from './components/Documents'
import {Report} from './components/Report'
import {CoachHeader} from './CoachHeader'

const CoachBreadCrumbs: Array<PageLink> = [
  {
    title: 'Coach View',
    path: '/coaching/project',
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

const CoachPage = () => (
  <Routes>
    <Route
      element={
        <>
          <CoachHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='discussion'
        element={
          <>
            <PageTitle breadcrumbs={CoachBreadCrumbs}> Discussion</PageTitle>
            <Discussion />
          </>
        }
      />
      <Route
        path='action-points'
        element={
          <>
            <PageTitle breadcrumbs={CoachBreadCrumbs}>Action Point</PageTitle>
            <ActionPoints />
          </>
        }
      />
      <Route
        path='documents'
        element={
          <>
            <PageTitle breadcrumbs={CoachBreadCrumbs}>Documents</PageTitle>
            <Documents />
          </>
        }
      />
      <Route
        path='report'
        element={
          <>
            <PageTitle breadcrumbs={CoachBreadCrumbs}>Report</PageTitle>
            <Report />
          </>
        }
      />
      {<Route index element={<Navigate to='/coaching/project' />} />}
    </Route>
  </Routes>
)

export default CoachPage
