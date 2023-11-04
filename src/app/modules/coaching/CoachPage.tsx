import {Navigate, Routes, Route, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
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
      
      {<Route index element={<Navigate to='/coaching/project' />} />}
    </Route>
  </Routes>
)

export default CoachPage
