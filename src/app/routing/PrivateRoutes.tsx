import {lazy, FC, Suspense, useEffect, useLayoutEffect} from 'react'
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import {PulseLoader} from 'react-spinners';
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'





const PrivateRoutes = () => {
  const ViewPage = lazy(() => import('../modules/view/ViewPage')) // profile
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  // const CoachingProjects = lazy(() => import('../modules/coaching/Projects'))
  // const ProjectPage = lazy(() => import('../modules/coaching/CoachPage'))
  
  return (
    // (<PulseLoader size={15} color="" loading={loading} margin={10}/>)  
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path=''>
          <Route
            path='view/*'
            element={
              <SuspensedView>
                <ViewPage />
              </SuspensedView>
            }
          />

          {/* <Route
            path='admin/*'
            element={
            <SuspensedView>
              </SuspensedView>
            }
          /> */}

         <Route
            path='account/*'
            element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
            }
          />
          
          <Route path='*' element={<Navigate to='/error/404' />} />
        </Route>
        <Route path='dashboard' element={<DashboardWrapper />} />
        {/* Lazy Modules */}
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}


/***
 * 
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
 */