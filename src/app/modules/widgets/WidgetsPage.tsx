import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Charts} from './components/Charts'
import {Projects} from './components/Projects'
import {Employees} from './components/Employees'
import {Mixed} from './components/Mixed'
import {Statistics} from './components/Statistics'

const widgetsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Stats',
    path: '/admin/statistics',
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

const WidgetsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='statistics'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Statistics</PageTitle>
              <Charts />
            </>
          }
        />
        
        <Route
          path='project'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Projects</PageTitle>
              <Projects />
            </>
          }
        />
        <Route
          path='mixed'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Mixed</PageTitle>
              <Mixed />
            </>
          }
        />
        <Route
          path='employees'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Employees</PageTitle>
              <Employees />
            </>
          }
        />
        <Route
          path='revenue'
          element={
            <>
              <PageTitle breadcrumbs={widgetsBreadCrumbs}>Revenue</PageTitle>
              <Statistics />
            </>
          }
        />
        <Route index element={<Navigate to='/admin/project' />} />
      </Route>
    </Routes>
  )
}

export default WidgetsPage
